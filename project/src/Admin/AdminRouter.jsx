import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminDashboard from './AdminDashboard';
import AdminAllUser from './AdminAllUser';
import EditeAdminAllUser from './EditeAdminAllUser.jsx';
import AdminAdduserData from './AdminAdduserData.jsx';
import { useCookies } from 'react-cookie';

const AdminRouter = () => {
    const [cookies] = useCookies(['id', 'username']);
    const navigate = useNavigate();

    // const isLoggedIn = cookies.username !== undefined;

    useEffect(() => {
        console.log("🚀 ~ file: AdminRouter.jsx:17 ~ useEffect ~ useEffect:")

        if (!cookies.id && !cookies.username) {
            navigate('/loginregistration');
        }
    }, [cookies, navigate]);

    return (
        <Routes>
            <Route path="/" element={<AdminMenu />}>
                <Route path="admindashboard" element={<AdminDashboard />} />
                <Route path="adminalluser" element={<AdminAllUser />} />
                <Route path="editeadminalluser/:id" element={<EditeAdminAllUser />} />
                <Route path="adminadduserdata" element={<AdminAdduserData />} />
            </Route>
        </Routes>
    );
};

export default AdminRouter;



