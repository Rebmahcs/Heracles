import {useAuth0} from "@auth0/auth0-react";

export function useIsAuthenticated() {
    const {isAuthenticated} = useAuth0()
    return isAuthenticated
}