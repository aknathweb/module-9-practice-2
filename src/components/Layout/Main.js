import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const Main = () => {
    return (
        <div>
            {/* Static part */}
            <Header></Header>
            {/* Dynamic part */}
            <Outlet></Outlet>
        </div>
    );
};

export default Main;