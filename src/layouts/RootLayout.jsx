import React from 'react';
import {Link, Outlet} from "react-router-dom";

function RootLayout() {
    return (<div>
        <div className="flex gap-3">
        <Link to="/">home</Link>
        <Link to="/login">login</Link>
        <Link to="/signup">signup</Link>
        <Link to="/memo">memo</Link>
        <Link to="/memolist">memolist</Link>
        </div>
        <div>
            <Outlet/>
        </div>
    </div>);
}

export default RootLayout;