import { createBrowserRouter } from "react-router-dom"
import RootLayOut from "../components/RootLayOut/RootLayOut"
import Home from "../Pages/Home/Home"
import ErrorPage from "../components/ErrorPage/ErrorPage"
import Donation from "../Pages/Donation/Donation"
import Statistics from "../Pages/Statistics/Statistics"
import Service from "../Pages/Service/Service"


const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <RootLayOut></RootLayOut>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: ()=> fetch('/public/services.json')
            },
            {
                path: "/donation",
                element: <Donation></Donation>
            },
            {
                path: "/statistics",
                element: <Statistics></Statistics>
            },
            {
                path: "/service/:id",
                element: <Service></Service>,
                loader: ()=> fetch('/public/services.json')
            }
        ]
    }
])
 

export default myCreatedRouter