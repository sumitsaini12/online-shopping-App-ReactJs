import React from "react";
import { Navigate } from "react-router-dom";
import ProdectPage from "./ProdectPage";

function Dashboard({ user }) {
    if (!user) {
        return <Navigate to="/login" />;
    }
    return (
        <>
            <ProdectPage />
        </>
    )
};

export default Dashboard;