import React from 'react';
import { Avatar } from "antd";
import { Button } from "antd";
import { Col } from "antd";
import { Divider } from "antd";
import { Layout } from "antd";
import { Menu } from "antd";
import { Row } from "antd";
import { Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import { DownOutlined } from "@ant-design/icons";
import { GiftFilled } from "@ant-design/icons";
import { LeftOutlined } from "@ant-design/icons";
import { QuestionCircleFilled } from "@ant-design/icons";
import { RightOutlined } from "@ant-design/icons";
import { SearchOutlined } from "@ant-design/icons";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { ShoppingFilled } from "@ant-design/icons";
import { StarFilled } from "@ant-design/icons";

function SlashkartAntUI(props) {
  return (
    <div>
      <Layout
        style={{ width: "100%", zIndex: "2", position: "sticky", top: "0" }}
      >
        <Layout style={{ backgroundColor: "#1a7aff", zIndex: "1" }}>
          <Row align="middle" justify="space-around">
            <Col>
              <div>
                <Avatar src="https://images.unsplash.com/photo-1599686100490-c386c444baf1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" />
              </div>
            </Col>
            <Col>
              <div>
                <Row align="middle" justify="start">
                  <Col>
                    <Button
                      style={{
                        border: "none",
                        fontSize: "20px",
                        fontFamily: "Noto Sans JP",
                        color: "#ffffff",
                        background: "none",
                        paddingLeft: "0px",
                      }}
                    >
                      Slashkart
                    </Button>
                  </Col>
                </Row>
                <Row
                  align="middle"
                  gutter={5}
                  justify="start"
                  style={{ marginTop: "-2px" }}
                >
                  <Col>
                    <span
                      style={{
                        fontSize: "13px",
                        fontFamily: "Kite One",
                        color: "#ffffff",
                        fontWeight: "60",
                      }}
                    >
                      Techies
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontFamily: "Kite One",
                        color: "#f8e71c",
                        fontWeight: "600",
                        letterSpacing: "1px",
                      }}
                    >
                      SlashDiv
                    </span>
                  </Col>
                </Row>
              </div>
            </Col>
            <Col md={10}>
              <div
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: "5px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  paddingLeft: "5px",
                  paddingRight: "10px",
                }}
              >
                <input
                  placeholder="Search Products"
                  style={{
                    border: "none",
                    paddingTop: "3px",
                    outline: "none",
                    background: "none",
                    fontWeight: "500",
                    width: "90%",
                    fontSize: "15px",
                    paddingBottom: "3px",
                    fontFamily: "sans-serif",
                  }}
                ></input>
                <SearchOutlined
                  style={{
                    width: "auto",
                    fontSize: "20px",
                    paddingTop: "6px",
                    float: "right",
                    color: "#1a7aff",
                  }}
                />
              </div>
            </Col>
            <Col>
              <div>
                <Button
                  style={{
                    borderRadius: "5px",
                    padding: "3px 22px",
                    color: "#1a7aff",
                    fontWeight: "600",
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    height: "auto",
                  }}
                >
                  Login
                </Button>
              </div>
            </Col>
            <Col>
              <Row align="middle" justify="center">
                <Col>
                  <div style={{ paddingRight: "5px" }}>
                    <Typography.Text
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      More
                    </Typography.Text>
                  </div>
                </Col>
                <Col>
                  <div style={{ display: "inline-block" }}>
                    <CaretDownOutlined
                      style={{
                        marginLeft: "-3px",
                        fontSize: "20px",
                        color: "#ffffff",
                        textJustify: "center",
                        fontWeight: "bold",
                        height: "auto",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row align="middle" justify="center">
                <Col>
                  <div style={{ paddingRight: "5px" }}>
                    <ShoppingCartOutlined
                      style={{
                        color: "#ffffff",
                        textJustify: "center",
                        fontSize: "22px",
                      }}
                    />
                  </div>
                </Col>
                <Col>
                  <div style={{ paddingRight: "5px" }}>
                    <Typography.Text
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "#ffffff",
                        fontWeight: "600",
                      }}
                    >
                      Cart
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            borderStyle: "none",
            zIndex: "1",
          }}
        >
          <Row
            align="middle"
            justify="space-around"
            style={{ paddingTop: "3px", paddingBottom: "3px" }}
          >
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Electronics
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  TVs &amp; Appliances
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Men
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Women
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Baby &amp; Kids
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Home &amp; Furniture
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Sports , Books &amp; More
                  <DownOutlined
                    style={{
                      color: "#4a4a4a",
                      fontSize: "9px",
                      fontWeight: "700",
                    }}
                  />
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Flights
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Offer Zone
                </Menu.Item>
              </Menu>
            </Col>
            <Col style={{ fontFamily: "sans-serif" }}>
              <Menu
                mode="horizontal"
                triggerSubMenuAction="click"
                theme="dark"
                selectable
                style={{ border: "none", background: "none" }}
              >
                <Menu.Item
                  style={{
                    border: "none",
                    fontSize: "13px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.87)",
                    background: "none",
                    fontWeight: "700",
                  }}
                >
                  Grocery
                </Menu.Item>
              </Menu>
            </Col>
          </Row>
        </Layout>
      </Layout>
      <Layout style={{ backgroundColor: "#f2f2f2", padding: "10px" }}>
        <Layout style={{ backgroundColor: "#569285" }}>
          <div>
            <Row align="middle" gutter={10} justify="space-between">
              <Col sm={24} xs={24} lg={8} md={8}>
                <img
                  src="https://images.unsplash.com/photo-1572584642822-6f8de0243c93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2FsZXxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                  style={{ width: "100%", height: "150px" }}
                ></img>
              </Col>
              <Col>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                      height: "60px",
                    }}
                  ></img>
                  <Typography.Title
                    level={4}
                    style={{
                      fontSize: "15px",
                      paddingTop: "5px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Mobiles
                  </Typography.Title>
                </div>
              </Col>
              <Col>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fGVsZWN0cm9uaWN8ZW58MHx8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                      height: "60px",
                    }}
                  ></img>
                  <Typography.Title
                    level={4}
                    style={{
                      fontSize: "15px",
                      paddingTop: "5px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Electronics
                  </Typography.Title>
                </div>
              </Col>
              <Col>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1589544421314-2d8297a767a5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mjl8fGZhc2hpb258ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                      height: "60px",
                    }}
                  ></img>
                  <Typography.Title
                    level={4}
                    style={{
                      fontSize: "15px",
                      paddingTop: "5px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Fashion
                  </Typography.Title>
                </div>
              </Col>
              <Col>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1531751519425-e1fa9110434b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8YmVhdXR5fGVufDB8MnwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                      height: "60px",
                    }}
                  ></img>
                  <Typography.Title
                    level={4}
                    style={{
                      fontSize: "15px",
                      paddingTop: "5px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Beauty
                  </Typography.Title>
                </div>
              </Col>
              <Col>
                <div style={{ padding: "10px", textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1590794056226-79ef3a8147e1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjZ8fGtpdGNoZW58ZW58MHwyfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{
                      width: "60px",
                      borderRadius: "15px",
                      height: "60px",
                    }}
                  ></img>
                  <Typography.Title
                    level={4}
                    style={{
                      fontSize: "15px",
                      paddingTop: "5px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      fontWeight: "600",
                    }}
                  >
                    Home Essentials
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
        <Layout style={{ marginTop: "10px" }}>
          <div>
            <img
              src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8b25saW5lJTIwc2hvcHBpbmd8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
              style={{ width: "50%", height: "250px" }}
            ></img>
            <img
              src="https://images.unsplash.com/photo-1483181957632-8bda974cbc91?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              style={{ width: "50%", height: "250px" }}
            ></img>
          </div>
          <div style={{ marginTop: "-175px" }}>
            <LeftOutlined
              style={{
                backgroundColor: "#ffffff",
                paddingTop: "30px",
                color: "#000000",
                paddingLeft: "2px",
                paddingBottom: "30px",
                fontSize: "40px",
                float: "left",
                paddingRight: "2px",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
              }}
            />
            <RightOutlined
              style={{
                backgroundColor: "#ffffff",
                paddingTop: "30px",
                color: "#000000",
                paddingLeft: "2px",
                paddingBottom: "30px",
                fontSize: "40px",
                float: "right",
                paddingRight: "2px",
                borderBottomLeftRadius: "5px",
                borderTopLeftRadius: "5px",
              }}
            />
          </div>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            padding: "20px 10px",
            marginTop: "90px",
          }}
        >
          <div>
            <Row align="middle" justify="space-between">
              <Col>
                <Typography.Title
                  level={2}
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Top Offers
                </Typography.Title>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#2874f0",
                    padding: "10px 25px",
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    fontWeight: "600",
                    height: "auto",
                  }}
                >
                  VIEW ALL
                </Button>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Row align="top" gutter={20} justify="space-around">
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wc3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Best Gaming Deals
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹51,990
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Acer ,Asus, HP &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1505409628601-edc9af17fda6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Top 10 Furniture Deals
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Up to 75% Off
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Peps Kurlon &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/flagged/photo-1550255120-9b2a9de58dfd?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNhbWVyYXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Canon DSLR Camera
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    EMI From ₹2,333/m*
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    ₹19,999
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1559599238-308793637427?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGJlZHJvb20lMjAlMjBmdXJuaXR1cmV8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Mattresses
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹2,490
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Perfect Homes
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            padding: "20px 10px",
            marginTop: "10px",
          }}
        >
          <div>
            <Row align="middle" justify="space-between">
              <Col
                sm={6}
                xs={6}
                lg={4}
                md={5}
                style={{ paddingBottom: "10px" }}
              >
                <div style={{ textAlign: "center", display: "inline-block" }}>
                  <img
                    src="https://images.unsplash.com/photo-1594404708321-12d10ea5590f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGRpd2FsaSUyMGxpZ2h0fGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "50px" }}
                  ></img>
                </div>
              </Col>
              <Col>
                <Typography.Title
                  level={2}
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Diwali Hot Sale
                </Typography.Title>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#2874f0",
                    padding: "10px 25px",
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    fontWeight: "600",
                    height: "auto",
                  }}
                >
                  VIEW ALL
                </Button>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Row align="top" gutter={20} justify="space-between">
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1592898741882-ff375ff0e692?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mzh8fDEwbW9iaWxlJTIwcGhvbmVzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Most Affordable Phones
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Get Up to 50% Off
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Samsung , Huawei &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1436473849883-bb3464c23e93?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODl8fGFpciUyMGNvbmRpdGlvbmluZ3xlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    5-Star Triple Invertor AC
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹19,999
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Samsung , Whirlpool &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8cmVmcmlnZXJhdG9yfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Double Door Refrigerator
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Start Onwards ₹21,990
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    LG , Samsung &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1579838333277-8b1b1f9d7856?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGRpYW1vbmQlMjByaW5nc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Proposal Rings
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Start Onwards ₹499
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Platinum{" "}
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            padding: "20px 10px",
            marginTop: "10px",
          }}
        >
          <div>
            <Row align="middle" gutter={20} justify="space-between">
              <Col
                sm={6}
                xs={6}
                lg={4}
                md={5}
                style={{ paddingBottom: "10px" }}
              >
                <div style={{ textAlign: "center", display: "inline-block" }}>
                  <img
                    src="https://images.unsplash.com/photo-1513451732213-5775a1c40335?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGRpc2NvdW50JTIwc2FsZXxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "50px" }}
                  ></img>
                </div>
              </Col>
              <Col>
                <Typography.Title
                  level={2}
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Today&#039;s Hot Deals
                </Typography.Title>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#2874f0",
                    padding: "10px 25px",
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    fontWeight: "600",
                    height: "auto",
                  }}
                >
                  VIEW ALL
                </Button>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Row align="top" gutter={20} justify="space-between">
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1598343175492-9e7dc0e63cc6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNsaXBwZXJzfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Sparx , Bata ,Paragone &amp; More
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Get Up to 60% Off
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Sandals,Shoes &amp; Splippers{" "}
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1583397758734-a524369cd4eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Women Long Frock{" "}
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    60-70% + Extra10%
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Women Fit &amp; Flare Blue Dress
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1508380702597-707c1b00695c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8dHJpbW1lcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    MI Trimmer for Men
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Starts ₹199
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    LG , Samsung &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1605423930791-b1fdc6c1e31d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fG1lbnMlMjB3ZWRkaW5nJTIwYmxhemVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Men Wedding Blazer
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    50% Off + 10% Cashback
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Dark Black
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            padding: "20px 10px",
            marginTop: "10px",
          }}
        >
          <div>
            <Row align="middle" gutter={20} justify="space-between">
              <Col
                sm={6}
                xs={6}
                lg={4}
                md={5}
                style={{ paddingBottom: "10px" }}
              >
                <div style={{ textAlign: "center", display: "inline-block" }}>
                  <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZWxlY3Ryb25pY3N8ZW58MHwwfDB8&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "50px" }}
                  ></img>
                </div>
              </Col>
              <Col>
                <Typography.Title
                  level={2}
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Best Of Electronics
                </Typography.Title>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#2874f0",
                    padding: "10px 25px",
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    fontWeight: "600",
                    height: "auto",
                  }}
                >
                  VIEW ALL
                </Button>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Row align="top" gutter={20} justify="space-between">
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1581837672885-533599e35674?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aGFpciUyMGRyeWVyfGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Hair Dryers
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹399
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Philips , Havells &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1526509867162-5b0c0d1b4b33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Sony Gaming Consoles
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹27,349
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Play Station &amp; X-Box
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/flagged/photo-1551954810-43cd6aef5b1f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bW9uaXRvcnxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Best Sellimg Monitors
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Start Onwards ₹4,999
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    LG , Acer , HP &amp; More
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1603144229867-797e6ceeb9c6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c291bmQlMjBzcGVha2Vyc3xlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Audible Speakers
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹490
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Logitech , Quantum &amp; More
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
        <Layout
          style={{
            backgroundColor: "#ffffff",
            padding: "20px 10px",
            marginTop: "10px",
            marginBottom: "40px",
          }}
        >
          <div>
            <Row align="middle" justify="space-between">
              <Col>
                <Typography.Title
                  level={2}
                  style={{
                    fontSize: "25px",
                    fontFamily: "sans-serif",
                    fontWeight: "600",
                  }}
                >
                  Fashion Brands
                </Typography.Title>
              </Col>
              <Col>
                <Button
                  style={{
                    backgroundColor: "#2874f0",
                    padding: "10px 25px",
                    fontFamily: "sans-serif",
                    color: "#ffffff",
                    fontWeight: "600",
                    height: "auto",
                  }}
                >
                  VIEW ALL
                </Button>
              </Col>
            </Row>
          </div>
          <div style={{ paddingTop: "20px" }}>
            <Row align="middle" gutter={20} justify="space-between">
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1583039949243-e4119fa27a7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Women Floral Saree
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From ₹1,629
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    White and Pink
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8bWVuJTIwc2hpcnQlMjBmYXNoaW9ufGVufDB8MHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Regular Fit Carbon Jeans
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Up to 75% Off
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Light Blue
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1602629339830-b7848e2ff629?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Women Maxi Frock
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    From Onwards ₹2,149
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Gray &amp; Yellow
                  </Typography.Title>
                </div>
              </Col>
              <Col sm={12} xs={12} md={6} style={{ paddingBottom: "10px" }}>
                <div style={{ textAlign: "center" }}>
                  <img
                    src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTQ0fHxtZW4lMjBzaGlydHxlbnwwfDB8MHw%3D&auto=format&fit=crop&w=500&q=60"
                    style={{ width: "100%", height: "200px" }}
                  ></img>
                  <Typography.Title
                    level={3}
                    style={{
                      fontSize: "15px",
                      paddingTop: "15px",
                      fontFamily: "Roboto",
                      color: "#000000",
                      fontWeight: "500",
                    }}
                  >
                    Woodland Slim Fit
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "18px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      color: "#417505",
                      fontWeight: "500",
                    }}
                  >
                    Start On ₹1999
                  </Typography.Title>
                  <Typography.Title
                    style={{
                      fontSize: "13px",
                      fontFamily: "Roboto",
                      marginTop: "-0px",
                      fontWeight: "500",
                    }}
                  >
                    Dark Navy Blue{" "}
                  </Typography.Title>
                </div>
              </Col>
            </Row>
          </div>
        </Layout>
      </Layout>
      <Layout
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          paddingTop: "40px",
        }}
      >
        <Row>
          <Col>
            <div>
              <div>
                <span
                  style={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    color: "rgba(74,74,74,0.63)",
                    fontWeight: "600",
                  }}
                >
                  Top Stories :{" "}
                </span>
                <span
                  style={{
                    fontSize: "15px",
                    fontFamily: "sans-serif",
                    color: "rgba(0,0,0,0.72)",
                    fontWeight: "600",
                  }}
                >
                  Brand Directory
                </span>
              </div>
              <div style={{ paddingTop: "15px" }}>
                <span
                  style={{
                    fontSize: "15px",
                    fontFamily: "Roboto",
                    color: "rgba(0,0,0,0.36)",
                    fontWeight: "600",
                  }}
                >
                  MOST SEARCHED FOR ON SLASHKART :
                </span>
                <span
                  style={{
                    color: "rgba(0,0,0,0.96)",
                    fontSize: "12px",
                    fontFamily: "Roboto",
                  }}
                >
                  <span>
                    <span>TV and Home Appliances Big Billion Days 2020 </span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Slashkart COVID-19 Insurance</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Slashkart Help Centre</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Track Orders</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Manage Orders</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Return Orders</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Made In India Toys</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Slashkart Gift Cards Store</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Slashkart Axis Bank Credit Card</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Vivo</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Huawei</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Samsung</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Apple</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Sony</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>MI</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Karbon</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Celcon</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Motorola</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Nokia</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Real Me</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Oppo</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>LG</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Panasonic</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Sarees</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Shirts</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Pants</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>T-shirts</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Jeans</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Eie Glasses</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Frocks</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Shorts</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Shoes</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>AC</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Refrigirators</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Washion mission</span>
                    <span> | </span>
                  </span>
                  <span>
                    <span>Belt</span>
                    <span> | </span>
                  </span>
                </span>
              </div>
            </div>
            <div>
              <Row>
                <Col>
                  <div style={{ paddingTop: "30px" }}>
                    <Typography.Title
                      style={{
                        fontSize: "15px",
                        fontFamily: "sans-serif",
                        color: "rgba(0,0,0,0.58)",
                        fontWeight: "800",
                      }}
                    >
                      Slashkart : <span>The One-stop Shopping Destination</span>
                    </Typography.Title>
                    <Typography.Text
                      style={{
                        color: "rgba(0,0,0,0.92)",
                        fontFamily: "sans-serif",
                      }}
                    >
                      E-commerce is revolutionizing the way we all shop in
                      India. Why do you want to hop from one store to another in
                      search of the latest phone when you can find it on the
                      Internet in a single click? Not only mobiles. Flipkart
                      houses everything you can possibly imagine, from trending
                      electronics like laptops, tablets, smartphones, and mobile
                      accessories to in-vogue fashion staples like shoes,
                      clothing and lifestyle accessories; from modern furniture
                      like sofa sets, dining tables, and wardrobes to appliances
                      that make your life easy like washing machines, TVs, ACs,
                      mixer grinder juicers and other time-saving kitchen and
                      small appliances; from home furnishings like cushion
                      covers, mattresses and bedsheets to toys and musical
                      instruments, we got them all covered. You name it, and you
                      can stay assured about finding them all here. For those of
                      you with erratic working hours, Flipkart is your best bet.
                      Shop in your PJs, at night or in the wee hours of the
                      morning. This e-commerce never shuts down.
                    </Typography.Text>
                  </div>
                  <div style={{ paddingTop: "10px" }}>
                    <Typography.Text
                      style={{
                        color: "rgba(0,0,0,0.92)",
                        fontFamily: "sans-serif",
                      }}
                    >
                      What&#039;s more, with our year-round shopping festivals
                      and events, our prices are irresistible. We&#039;re sure
                      you&#039;ll find yourself picking up more than what you
                      had in mind. If you are wondering why you should shop from
                      Slashkart when there are multiple options available to
                      you, well, the below will answer your question.
                    </Typography.Text>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Layout>
      <Layout style={{ backgroundColor: "#172337" }}>
        <div>
          <Row
            align="top"
            justify="space-around"
            style={{
              paddingTop: "30px",
              paddingLeft: "50px",
              paddingRight: "50px",
            }}
          >
            <Col sm={6} xs={6} md={3} style={{ paddingBottom: "10px" }}>
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  ABOUT
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Contact Us
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    About Us
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Slashkart Stories
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Press
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Slashkart Holesales
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col sm={6} xs={6} md={3} style={{ paddingBottom: "10px" }}>
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  HELP
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Payments
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Shipping
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Cancellation &amp; Returns
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    FAQ
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Report Infrigment
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col sm={6} xs={6} md={3} style={{ paddingBottom: "10px" }}>
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  POLICY
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Return Policy
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Terms Of Use
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Security
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Privacy
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Sitemap
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    EPR Complaince
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col sm={6} xs={6} md={3} style={{ paddingBottom: "10px" }}>
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  SOCIAL
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Facebook
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Twitter
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    YouTube
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col
              sm={12}
              xs={12}
              md={6}
              lg={5}
              style={{ paddingBottom: "10px" }}
            >
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  Mail Us:
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Slashdiv Technologies Private Limited,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Flat No.15,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    PS Sivaswamy Salai,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Mylapore,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Chennai-600004,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tamilnadu, India.
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col
              sm={12}
              xs={12}
              md={6}
              lg={5}
              style={{ paddingBottom: "10px" }}
            >
              <div>
                <Typography.Text
                  style={{
                    color: "#9b9b9b",
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                >
                  Registered Office Address:
                </Typography.Text>
                <Menu
                  style={{
                    border: "none",
                    paddingTop: "0px",
                    background: "none",
                  }}
                >
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Slashdiv Technologies Private Limited,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Flat No.15,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    PS Sivaswamy Salai,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Mylapore,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Chennai-600004,
                  </Menu.Item>
                  <Menu.Item
                    style={{
                      border: "none",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                      paddingLeft: "0px",
                      fontSize: "12px",
                      fontFamily: "sans-serif",
                    }}
                  >
                    Tamilnadu, India.
                  </Menu.Item>
                </Menu>
                <Row>
                  <Col>
                    <Menu style={{ border: "none", background: "none" }}>
                      <Menu.Item
                        style={{
                          border: "none",
                          color: "#ffffff",
                          background: "none",
                          fontWeight: "600",
                          paddingLeft: "0px",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                        }}
                      >
                        Telephone :{" "}
                      </Menu.Item>
                    </Menu>
                  </Col>
                  <Col style={{ marginLeft: "-30px", color: "#337fd8" }}>
                    <Menu style={{ border: "none", background: "none" }}>
                      <Menu.Item
                        style={{
                          border: "none",
                          fontSize: "12px",
                          fontFamily: "sans-serif",
                          color: "#247be0",
                          background: "none",
                          fontWeight: "600",
                        }}
                      >
                        9876543210
                      </Menu.Item>
                    </Menu>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </div>
        <Divider
          dashed
          orientation="center"
          type="horizontal"
          plain
          style={{ backgroundColor: "#4a4a4a" }}
        />
        <div>
          <Row
            align="middle"
            justify="space-around"
            style={{
              paddingBottom: "20px",
              paddingRight: "20px",
              paddingLeft: "20px",
            }}
          >
            <Col>
              <div>
                <Menu style={{ border: "none", background: "none" }}>
                  <Menu.Item
                    style={{
                      border: "none",
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                    }}
                  >
                    <ShoppingFilled
                      style={{ color: "#f8e71c", fontSize: "20px" }}
                    />
                    Sell On Slashkart
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col>
              <div>
                <Menu style={{ border: "none", background: "none" }}>
                  <Menu.Item
                    style={{
                      border: "none",
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                    }}
                  >
                    <StarFilled
                      style={{ color: "#f8e71c", fontSize: "20px" }}
                    />
                    Adertise
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col>
              <div>
                <Menu style={{ border: "none", background: "none" }}>
                  <Menu.Item
                    style={{
                      border: "none",
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                    }}
                  >
                    <GiftFilled
                      style={{ color: "#f8e71c", fontSize: "20px" }}
                    />
                    Gift Cards
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col>
              <div>
                <Menu style={{ border: "none", background: "none" }}>
                  <Menu.Item
                    style={{
                      border: "none",
                      fontSize: "14px",
                      fontFamily: "sans-serif",
                      color: "#ffffff",
                      background: "none",
                      fontWeight: "500",
                    }}
                  >
                    <QuestionCircleFilled
                      style={{ color: "#f8e71c", fontSize: "20px" }}
                    />
                    Help Center
                  </Menu.Item>
                </Menu>
              </div>
            </Col>
            <Col>
              <div style={{ paddingTop: "5px" }}>
                <Typography.Text
                  style={{
                    color: "#ffffff",
                    fontSize: "14px",
                    fontFamily: "sans-serif",
                  }}
                >
                  © 2019-2020 Slashkart.com
                </Typography.Text>
              </div>
            </Col>
          </Row>
        </div>
      </Layout>
    </div>
  );
}
export default SlashkartAntUI;