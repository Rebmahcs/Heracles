import {Link} from "react-router-dom";
import {LoginLogoutButton} from "../core/auth/AuthButtons.tsx";

export default function HomePage(){
    return (<>
        <div>HomePage</div>
        <LoginLogoutButton/>
        <Link to="/profile">My Profile</Link>
    </>)
}