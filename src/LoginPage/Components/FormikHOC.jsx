import React from "react";

import { useField } from "formik";

function FormikHOC(IncomingComponent) {
    function OutgoingComponent({ name, ...rest }) {
        const field = useField(name);

        const [data, meta] = field;
        const { value, onBlur, onChange } = data;
        const { error, touched } = meta;


        return (
            <IncomingComponent
                name={name}
                value={value}
                onBlur={onBlur}
                onChange={onChange}
                error={error}
                touched={touched}
                {...rest}
            />
        );
    }
    return OutgoingComponent;
}

export default FormikHOC;