import React from "react";
import { NavLink } from "react-router-dom";
import dollarIcon from '../../assets/icons/dollar.svg'
import userIcon from '../../assets/icons/user.svg'
import settingIcon from '../../assets/icons/setting.svg'
import supportIcon from '../../assets/icons/support.svg'
import dataIcon from '../../assets/icons/data.svg'
import stationIcon from '../../assets/icons/station.svg'
import questionIcon from '../../assets/icons/question.svg'
import logo from '../../assets/images/logo/airsense.jpg'
const Sidebar = () => {


    return (
        <>
    <ul className="customer-sidebar-nav">
      <div className="customer-logo-sidebar">
        <img src={logo} />
      </div>
    <li className="nav-item">
      <NavLink to='/customer/dashboard' className={"nav-item"}>
    <img src={supportIcon} />

        Dashboard
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/stations' className={"nav-item"}>
      <img src={stationIcon} />

        Trạm quản lí
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/datas' className={"nav-item"}>
      <img src={dataIcon} />
        
        Dữ liệu trạm</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/account' className={"nav-item"}>
      <img src={userIcon} />
        Tài khoản
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/orders' className={"nav-item"}>
      <img src={dollarIcon} />
        Đơn hàng
        </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/FAQ' className={"nav-item"}>
      <img src={questionIcon} />
        F.A.Q</NavLink>
    </li>
    <li className="nav-item">
      <NavLink to='/customer/setting' className={"nav-item"}>
    <img src={settingIcon} />
        Thiết lập</NavLink>
    </li>

   
  </ul>

        </>
    )
}

export default Sidebar;