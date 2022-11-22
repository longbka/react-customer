import React from "react";
import ringingIcon from "../../assets/icons/ringing.svg";
import refreshIcon from "../../assets/icons/refresh.svg";
import avatar from "../../assets/icons/avatar.svg";
import { SettingOutlined, LogoutOutlined } from "@ant-design/icons";

import { Dropdown, Space } from "antd";
import "./header.css";
const Header = () => {
  const items = [
    {
      label: (
        <a href="" style={{ display: "flex", justifyContent: "start" }}>
          Setting
        </a>
      ),
      key: "0",
      icon: <SettingOutlined />,
    },
    {
      label: (
        <a href="" style={{ display: "flex" }}>
          Sign out
        </a>
      ),
      key: "1",
      icon: <LogoutOutlined />,
    },
  ];
  return (
    <>
      <header className="header-customer">
        <input
          type="text"
          placeholder="Tìm kiếm nội dung"
          className="customer-input-header"
        />
        <span className="customer-button-header">
          <img src={refreshIcon} />
          <img src={ringingIcon} />
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <img src={avatar} />
          </Dropdown>
        </span>
      </header>
    </>
  );
};

export default Header;
