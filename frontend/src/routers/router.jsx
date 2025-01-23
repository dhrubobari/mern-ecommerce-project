import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
        {
            path: "/",
            element: <div><Home/></div>
        },
        {
            path: "/about",
            element: <div>About page</div>
        }
    ]
    },
])

export default router;