import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import logo from "../../assets/logo.png";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { StateContext } from "../../Context/StateContext/StateContext";
import { FireBaseContext } from "../../Context/FirebaseContext/FirebaseContext";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Scale } from "@mui/icons-material";
function Nav() {
  const { user } = React.useContext(StateContext);
  const { userSignOut } = React.useContext(FireBaseContext);

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  function handelSignOut() {
    userSignOut();
  }
  return (
    <AppBar
      sx={{ backgroundColor: "transparent", color: "black" }}
      position="static"
    >
      <div className="w-11/12 lg:w-4/5 mx-auto">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* logo */}
            <img className="w-9 hidden md:block" src={logo} alt="" />
            <Typography
              variant="h6"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                cursor: "pointer",
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WORD_BY
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{ display: { xs: "block", md: "block", lg: "none" } }}
              >
                <NavLink to={"/"}>
                  <MenuItem key={"home"} onClick={handleCloseNavMenu}>
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      HOME
                    </Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to={"/lets-learn"}>
                  <MenuItem key={"lets-learn"} onClick={handleCloseNavMenu}>
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      Start Learning
                    </Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to={"/tutorials"}>
                  <MenuItem key={"Tutorials"} onClick={handleCloseNavMenu}>
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      Tutorials
                    </Typography>
                  </MenuItem>
                </NavLink>
                <NavLink to={"/about"}>
                  <MenuItem key={"AboutUs"} onClick={handleCloseNavMenu}>
                    <Typography sx={{ color: "black", textAlign: "center" }}>
                      About Us
                    </Typography>
                  </MenuItem>
                </NavLink>
              </Menu>
            </Box>

            <img className="w-9 block md:hidden" src={logo} alt="" />
            <Typography
              variant="h5"
              noWrap
              component="a"
              onClick={() => navigate("/")}
              sx={{
                mr: 2,
                cursor: "pointer",
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              WORD_BY
            </Typography>
            {/* menu item */}
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <NavLink to={"/"}>
                <Button
                  key={"HomeMenu"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Home
                </Button>
              </NavLink>
              <NavLink to={"/lets-learn"}>
                <Button
                  key={"lets-learn"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  Start Learning
                </Button>
              </NavLink>
              <NavLink state={{ his: "/tutorials" }} to={"/tutorials"}>
                <Button
                  key={"tutorialsMenu"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  tutorials
                </Button>
              </NavLink>
              <NavLink to={"/about"}>
                <Button
                  key={"AboutUSMenu"}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  About US
                </Button>
              </NavLink>
              {user && (
                <NavLink to={"/my-profile"}>
                  <Button
                    key={"MyProfileMenu"}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "black", display: "block" }}
                  >
                    My Profile
                  </Button>
                </NavLink>
              )}
            </Box>
            {/* profile icon */}
            <Box sx={{ flexGrow: 0 }}>
              {user ? (
                <Link to={"/signin"}>
                  <Button
                    onClick={handelSignOut}
                    sx={{
                      display: { lg: "inline", xs: "none" },
                      marginRight: "20px",
                      border: "1px solid black",
                      color: "black",
                    }}
                    variant="outlined"
                  >
                    Sign Out
                  </Button>
                </Link>
              ) : (
                <Link to={"/signin"}>
                  <Button
                    sx={{
                      display: { lg: "inline", xs: "none" },
                      marginRight: "20px",
                      border: "1px solid black",
                      color: "black",
                    }}
                    variant="outlined"
                  >
                    Sign In
                  </Button>
                </Link>
              )}

              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  {user?.photoURL ? (
                    <img
                      className="w-10 h-10 rounded-full"
                      src={user?.photoURL}
                    />
                  ) : (
                    <AccountCircleIcon
                      className="bg-slate-50"
                      style={{ transform: "scale(1.9)" }}
                    />
                  )}
                </IconButton>
              </Tooltip>
              {/* drop down menu */}
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {user && (
                  <Link to={"/my-profile"}>
                    <MenuItem key={"setting"} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        My Profile
                      </Typography>
                    </MenuItem>
                  </Link>
                )}
                {user ? (
                  <Link to={"/signin"}>
                    <MenuItem
                      key={"setting"}
                      onClick={() => {
                        handelSignOut();
                        handleCloseUserMenu();
                      }}
                    >
                      <Typography sx={{ textAlign: "center" }}>
                        Sign Out
                      </Typography>
                    </MenuItem>
                  </Link>
                ) : (
                  <Link to={"/signin"}>
                    <MenuItem key={"setting"} onClick={handleCloseUserMenu}>
                      <Typography sx={{ textAlign: "center" }}>
                        Sign In
                      </Typography>
                    </MenuItem>
                  </Link>
                )}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </div>
    </AppBar>
  );
}
export default Nav;
