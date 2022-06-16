/**
 =========================================================
 * Material Dashboard 2 React - v2.1.0
 =========================================================

 * Product Page: https://www.creative-tim.com/product/material-dashboard-react
 * Copyright 2022 Creative Tim (https://www.creative-tim.com)

 Coded by www.creative-tim.com

 =========================================================

 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

// @mui material components
import Drawer from "@mui/material/Drawer";
import {styled} from "@mui/material/styles";
import rgba from "../../assets/theme/functions/rgba";

export default styled(Drawer)(({theme, ownerState}) => {
  const {palette, boxShadows, transitions, breakpoints, functions} = theme;
  const {transparentSidenav, whiteSidenav, miniSidenav, darkMode} = ownerState;

  const sidebarWidth = 96;
  const {transparent, gradients, white, background} = palette;
  const {xxl, sidebarBoxShadow } = boxShadows;
  const {pxToRem, linearGradient} = functions;

  let backgroundValue = darkMode
    ? background.sidenav
    : white.main;

  if (transparentSidenav) {
    backgroundValue = transparent.main;
  } else if (whiteSidenav) {
    backgroundValue = white.main;
  }

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = () => ({
    background: backgroundValue,
    width: sidebarWidth,
    overflowX: "hidden",
    transform: "translateX(0) translateY(-50%)",
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),


    [breakpoints.down("xl")]: {
      boxShadow: transparentSidenav ? "none" : sidebarBoxShadow,
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor:
        transparentSidenav
          ? `${transparent.main} !important`
          : rgba(darkMode ? background.default : white.main, 0.6),
    },

    [breakpoints.up("xl")]: {
      boxShadow: !darkMode ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      transform: "translateX(0) translateY(-50%)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  });

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = () => ({
    background: backgroundValue,
    width: sidebarWidth,
    overflowX: "hidden",
    transform: `translateX(${pxToRem(-320)}) translateY(-50%)`,
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),


    [breakpoints.down("xl")]: {
      boxShadow: transparentSidenav ? "none" : sidebarBoxShadow,
      backdropFilter: `saturate(200%) blur(${pxToRem(30)})`,
      backgroundColor:
        transparentSidenav
          ? `${transparent.main} !important`
          : rgba(darkMode ? background.default : white.main, 0.6),
    },

    [breakpoints.up("xl")]: {
      boxShadow: !darkMode ? "none" : xxl,
      marginBottom: transparentSidenav ? 0 : "inherit",
      left: "0",
      transform: "translateX(0) translateY(-50%)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  });

  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",

      ...(miniSidenav ? drawerCloseStyles() : drawerOpenStyles()),
    },
  };
});
