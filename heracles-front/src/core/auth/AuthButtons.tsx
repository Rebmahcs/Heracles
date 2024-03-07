import {useAuth0} from "@auth0/auth0-react";


export function LoginButton() {
    const {loginWithPopup} = useAuth0()
    return <button onClick={() => void loginWithPopup()}>Login</button>
}

export function LogoutButton() {
    const {logout} = useAuth0();

    return (
        <button onClick={() => void logout()}>
            Log Out
        </button>
    );
}

export function LoginLogoutButton(){
    const {isAuthenticated} = useAuth0()
    return isAuthenticated ? <LogoutButton/> : <LoginButton/>
}