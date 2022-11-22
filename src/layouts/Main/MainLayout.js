import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar'


const MainLayout = () => {
 
  const getValueChangeInput = (value) => {
    handleSearchChange(value);
  };

  const handleSearchChange = (value) => {
   
  };
  return (
    <>
      <Header /> 
      <Sidebar /> 
      <div className='customer-main-content'>
      <Outlet />
      </div>
    </>
  );
};

export default MainLayout;
