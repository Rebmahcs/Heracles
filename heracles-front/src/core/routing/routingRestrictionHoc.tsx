import {ReactElement} from "react";
import PrivateElement from "./PrivateElement.tsx";


/*
 * This file contains functions that creates HOC that handle access restriction on components / pages
 */

export function withAuthentication(element: ReactElement){
    return (
        <PrivateElement>
            {element}
        </PrivateElement>
    )
}