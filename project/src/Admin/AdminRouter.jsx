import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminDashboard from './AdminDashboard';
import AdminAllUser from './AdminAllUser';
import EditeAdminAllUser from './EditeAdminAllUser.jsx';

const AdminRouter = () => {
    return (
        <>
            <Routes >
                <Route path='/' element={<AdminMenu />}>

                    <Route path='admindashboard' element={<AdminDashboard />} />
                    <Route path='adminalluser' element={<AdminAllUser />} />
                    <Route path='editeadminalluser/:id' element={<EditeAdminAllUser />} />

                </Route>
            </Routes>
        </>
    );
};

export default AdminRouter;