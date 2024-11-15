import React from "react";
import { Outlet } from "react-router-dom";
import WebHeader from "./component/header";
import WebFooter from './component/footer';

function Layout() {
    return(
        <section>
            <WebHeader />
            <main>
                <Outlet />
            </main>
            <WebFooter/>
        </section>
    )
}

export default Layout;