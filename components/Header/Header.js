import React, { useContext } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Container,
  Typography,
} from "@mui/material";
import DensitySmallIcon from "@mui/icons-material/DensitySmall";
import UserHeader from "../UserHeader/UserHeader";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";
import omnesLogo from "../../assets/logo-white.png"

const Header = ({ setOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <AppBar sx={{ backgroundColor: "#07090f" }}>
      <Container maxWidth="lg">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
            onClick={() => setOpen(true)}
          >
            <DensitySmallIcon />
          </IconButton>
          <Link href={"/"}>
            {/* <Typography>OmnesBet</Typography> */}
            <img src={omnesLogo.src} style={{ width: "80px", height: "75px"}} alt="omnesbet"/>
          </Link>
          {!user ? (
            <>
              <Link href={"/signin"} style={{ marginLeft: "auto" }}>
                <Button variant="contained" sx={{ background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)" }}>
                  Log In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "5px", background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)" }}
                >
                  Sign Up
                </Button>
              </Link>
            </>
          ) : (
            <UserHeader user={user} />
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
