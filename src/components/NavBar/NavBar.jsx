import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/huyhieudoan.png";
import { AuthContext } from "../../contexts/auth.provider";
import Profile from "./Profile";
import { routes } from "./routes";
import {
  NavLogo,
  Nav,
  Bars,
  NavBtn,
  NavBtnLink,
  NavLink,
  NavMenu,
  NavMenuExtend,
  NavSubMenu,
  NavSubLink,
} from "./styled";
const NavBar = () => {
  const [extendNavBar, setExtendNavBar] = useState(false);
  const { user, token } = useContext(AuthContext);

  return (
    <>
      <Nav extendNavBar={extendNavBar}>
        <Link to="/">
          <NavLogo src={logo} />
        </Link>

        <Bars
          onClick={() => {
            setExtendNavBar((crr) => !crr);
          }}
        >
          {extendNavBar ? <>&#10005;</> : <> &#8801;</>}
        </Bars>
        <NavMenu>
          {routes.map((route) => {
            if (route.subRoutes) {
              return (
                <NavSubMenu key={route.name}>
                  <NavLink to={route.link}>{route.name}</NavLink>
                  <NavSubLink>
                    {route.subRoutes.map((subRoute) => (
                      <NavLink key={subRoute.name} to={subRoute.link}>
                        {subRoute.name}
                      </NavLink>
                    ))}
                  </NavSubLink>
                </NavSubMenu>
              );
            } else {
              return (
                <NavLink key={route.name} to={route.link}>
                  {route.name}
                </NavLink>
              );
            }
          })}
          {token != null ? (
            <NavLink to="/so-do-cho-ngoi">SƠ ĐỒ CHỖ NGỒI</NavLink>
          ) : null}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to="/diem-danh" color="red">
            ĐIỂM DANH
          </NavBtnLink>
          {token == null ? (
            <NavBtnLink to="/dang-nhap" color="#41a2eb">
              ĐĂNG NHẬP
            </NavBtnLink>
          ) : (
            <Profile />
          )}
        </NavBtn>
        {extendNavBar && (
          <NavMenuExtend>
            {routes.map((route) => {
              if (route.subRoutes) {
                return (
                  <NavSubMenu>
                    <NavLink to={route.link}>{route.name}</NavLink>
                    <NavSubLink>
                      {route.subRoutes.map((subRoute) => (
                        <NavLink to={subRoute.link}>{subRoute.name}</NavLink>
                      ))}
                    </NavSubLink>
                  </NavSubMenu>
                );
              } else {
                return <NavLink to={route.link}>{route.name}</NavLink>;
              }
            })}
            <NavBtnLink to="/diem-danh" color="red">
              ĐIỂM DANH
            </NavBtnLink>
            <NavBtnLink to="/dang-nhap" color="#41a2eb">
              ĐĂNG NHẬP
            </NavBtnLink>
          </NavMenuExtend>
        )}
      </Nav>
    </>
  );
};

export default NavBar;
