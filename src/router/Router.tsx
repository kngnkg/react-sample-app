import { FC, memo } from "react";
import { Route, Routes } from "react-router-dom";

import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Page404 } from "../components/pages/Page404";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";

export const Router: FC = memo(() => {
    return (
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home">
                <Route index={true} element={<Home/>}/>
                <Route path="user_management" element={<UserManagement/>}/>
                <Route path="setting" element={<Setting/>}/>
            </Route>
            <Route path="*" element={<Page404/>}/>
        </Routes>
    );
});
