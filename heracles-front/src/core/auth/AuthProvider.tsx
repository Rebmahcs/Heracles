import authConf from "./authConf.json";
import {ChildrenProp} from "../technicalTypes.ts";
import {Auth0Provider} from "@auth0/auth0-react";

export default function AuthProvider({children}: Readonly<ChildrenProp>) {
    console.log(window.location.origin)
    return (
        <Auth0Provider
            domain={authConf.domain}
            clientId={authConf.clientId}
            authorizationParams={{
                redirect_uri: window.location.origin
            }}>
            {children}
        </Auth0Provider>
    )
}

