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

const Header = ({ setOpen }) => {
  const { user } = useContext(AuthContext);

  return (
    <AppBar sx={{ backgroundColor: "#303134" }}>
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
            <Typography>OmnesBet</Typography>
          </Link>
          {!user ? (
            <>
              <Link href={"signin"} style={{ marginLeft: "auto" }}>
                <Button variant="contained" color="error">
                  Log In
                </Button>
              </Link>

              <Link href={"/signup"}>
                <Button
                  variant="contained"
                  sx={{ marginLeft: "5px" }}
                  color="error"
                >
                  Register
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
