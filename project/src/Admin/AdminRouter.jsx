import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminMenu from './AdminMenu';
import AdminDashboard from './AdminDashboard';
import AdminAllUser from './AdminAllUser';

const AdminRouter = () => {
    return (
        <>
            <Routes >
                <Route path='/' element={<AdminMenu />}>

                    <Route path='admindashboard' element={<AdminDashboard />} />
                    <Route path='adminalluser' element={<AdminAllUser />} />

                </Route>
            </Routes>
        </>
    );
};

export default AdminRouter;