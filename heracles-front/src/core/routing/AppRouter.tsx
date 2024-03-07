import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ProfilePage from "../../pages/ProfilePage.tsx";
import HomePage from "../../pages/HomePage.tsx";
import {withAuthentication} from "./routingRestrictionHoc.tsx";

export default function AppRouter(){
    const router = createBrowserRouter([
        {path: "/", element: <HomePage/>},
        {path: "/profile", element: withAuthentication(<ProfilePage/>)}
    ])
    return (
        <RouterProvider router={router} />
    )
}