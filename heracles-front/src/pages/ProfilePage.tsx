import {useAuth0} from "@auth0/auth0-react";
import {Link} from "react-router-dom";

const Profile = () => {
    const { user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Loading ...</div>;
    }

    if(!isAuthenticated){
        return <div>Not logged...</div>
    }

    return ( user != null && (
            <div>
                <img src={user.picture} alt={user.name} />
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
    );
};

export default function ProfilePage(){
    return(
        <>
            <h1>Hermes</h1>
            <Profile/>
            <Link to="/">Home</Link>
        </>
    )
}