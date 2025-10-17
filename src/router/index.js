import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/RootPages/Home.jsx";
import Login from "../pages/AuthPages/Login.jsx";
import Signup from "../pages/AuthPages/Signup.jsx";
import Memo from "../pages/RootPages/Memo.jsx";
import MemoList from "../pages/RootPages/MemoList.jsx";
import PATHS from "../constants/paths.js";
import RootLayout from "../layouts/RootLayout.jsx";

const router = createBrowserRouter([{
    path: PATHS.HOME, Component: RootLayout, children: [{
        index: true, Component: Home
    }, {
        path: PATHS.LOGIN, Component: Login
    }, {
        path: PATHS.SIGNUP, Component: Signup
    }, {
        path: PATHS.MEMO, Component: Memo
    }, {
        path: PATHS.MEMO_LIST, Component: MemoList
    }],
}])

export default router