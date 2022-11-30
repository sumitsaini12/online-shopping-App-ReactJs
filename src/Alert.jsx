import React from "react";
import { useEffect } from "react";
import { HiOutlineX, HiAtSymbol } from "react-icons/hi";
import { withAlert } from "./withProvider";

const themeMap = {
    Success: {
        color: "bg-green-100",
        IconClasses: "bg-green-500 text-white",
    },
    Error: {
        color: "bg-red-100",
        IconClasses: "bg-red-500 text-white",
    },
    Warning: {
        color: "bg-orange-100",
        IconClasses: " bg-orange-500 text-white",
    },
    Info: {
        color: "bg-blue-100 ",
        IconClasses: " bg-blue-500 text-white",
    }
};


function Alert({ alert, removeAlert }) {

    useEffect(() => {
        if (alert) {
            const timeOut = setTimeout(removeAlert, 3 * 1000);

            return () => {
                clearTimeout(timeOut);
            };
        }
    }, [alert]);


    if (!alert) {
        return <></>;
    };

    const { type, message } = alert;
    const { color, IconClasses } = themeMap[type];


    return (
        <div className="items-center justify-center flex">
            <div className={`flex justify-between items-center overflow-hidden rounded-md shadow-lg my-3 ` + color}>
                {type && (
                    <div className={`flex p-3 ` + IconClasses}>
                        <div className="inline-flex justify-center items-center h-6 w-6">
                            <span className="sr-only">{type} Icon</span>
                            <HiAtSymbol className="w-6 h-6" />
                        </div>
                    </div>
                )}
                <div className="text-lg font-bold pl-3 pr-1">{type}</div>
                <div className="text-sm font-semibold pr-3">{message}</div>

                <button onClick={removeAlert} className="w-4 h-4 mx-3 items-center justify-center text-gray-400 hover:text-gray-900 rounded-md focus:ring-2 ring-gray-300 g inline-flex">
                    <span className="sr-only">Close</span>
                    <HiOutlineX className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
}
export default withAlert(Alert)

