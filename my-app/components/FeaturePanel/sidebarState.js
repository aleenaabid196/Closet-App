"use client";

import { useState } from "react";
import SidebarContext from "./sidebarContext";

const SidebarStateProvider = ({ children }) => {
    const [sidebar, setSidebar] = useState("close");

    return (
        <SidebarContext.Provider value={{ sidebar, setSidebar }}>
            {children}
        </SidebarContext.Provider>
    );

};

export default SidebarStateProvider;
