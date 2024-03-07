import {ReactNode} from "react";
import {useIsAuthenticated} from "../auth/authHooks.ts";
import {Navigate} from "react-router-dom";

interface PrivateElementProps {
    children: ReactNode
}

export default function PrivateElement({children}: Readonly<PrivateElementProps>){
    const isAuthenticated = useIsAuthenticated()

    if(!isAuthenticated){
        return <Navigate replace to="/"/>
    }

    //TODO: Add role/scope restrictions

    return children
}