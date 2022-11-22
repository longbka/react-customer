import "./account.css";
import { Col, Row } from "antd";
import { Button } from "antd";
import avatarDemo from "../../assets/icons/avatarDemo.svg";
function Account() {
  return (
    <>
      <Col span={9} offset={3} className = "account-app">
        <div className="container">
          <div className="content">
            <div className="title">
              <h1>Personal Information</h1>
              <span className="description">Manage your Medusa profile</span>
            </div>
            <br />
            <div className="avatar">
              <span className="title-avatar">Picture</span>
              <div className="image">
                <img src={avatarDemo} width="100px"></img>
              </div>
            </div>
          </div>
          <br />
          <div className="general">
            <span className="title-general">General</span>
            <div className="content-general">
              <Row gutter={24}>
                <Col span={12} offset={0}>
                  <div className="first-name">
                    <div className="label-text">
                      <label for="firstName"> First name</label>
                    </div>
                    <div className="input-text">
                      <input
                        placeholder="Lebron"
                        id="firstName"
                        name="firstName"
                      />
                    </div>
                  </div>
                </Col>
                <Col span={12} offset={0}>
                  <div className="last-name">
                    <div className="label-text">
                      <label for="lastName">Last name</label>
                    </div>
                    <div className="input-text">
                      <input
                        placeholder="James"
                        name="lastName"
                        id="lastName"
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
              <Row>
                <Col span={24} offset={0}>
                  <div className="email-container">
                    <div className="label-text">
                      <label for="email"> Email</label>
                    </div>
                    <div className="input-text">
                      <input placeholder="Lebron" id="email" name="email" />
                    </div>
                  </div>
                </Col>
              </Row>
              <br />
            </div>
          </div>
        </div>
        <Row>
          <Col span={24} offset={0} className="footer">
            <Button size="default">Cancel changes</Button>
            <Button type="primary" size="default">
              Save
            </Button>
          </Col>
        </Row>
      </Col>
    </>
  );
}

export default Account;
