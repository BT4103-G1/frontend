import React from "react";
import {
  CHeader,
  CHeaderNav,
  CHeaderNavItem,
  CHeaderNavLink,
  CNavbarBrand,
} from "@coreui/react";
import { TheHeaderDropdown, Notifications } from "./index";
import DstaLogo from "src/assets/DSTA.gif";

// routes config

const TheHeader = () => {
  return (
    <CHeader withSubheader>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CNavbarBrand>
          <img
            src={DstaLogo}
            alt={"DSTA Logo"}
            style={{ height: 40, marginLeft: 40 }}
          />
        </CNavbarBrand>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/manager">Systems Manager</CHeaderNavLink>
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CHeaderNavLink to="/technician">Technician</CHeaderNavLink>
        </CHeaderNavItem>
        {/*<CHeaderNavItem className="px-3">*/}
        {/*  <CHeaderNavLink to="/settings">Settings</CHeaderNavLink>*/}
        {/*</CHeaderNavItem>*/}
      </CHeaderNav>

      <CHeaderNav className="px-3">
        <div className="small text-muted text-truncate mr-3">
          Welcome, Wei Sheng
        </div>
        <TheHeaderDropdown />
        <Notifications />
      </CHeaderNav>
    </CHeader>
  );
};

export default TheHeader;
