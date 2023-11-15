import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Form_reservas from "./routes/Formulario_Reservas";
import App from "./App";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/formulario_reservas',
        element: <Form_reservas/>
    }
])