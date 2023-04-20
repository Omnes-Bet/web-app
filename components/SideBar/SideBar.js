import React, { useContext } from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Button,
} from "@mui/material";
import styled from "@emotion/styled";
import { Storage } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
import { CompareArrows } from "@mui/icons-material";
import { EmojiEvents } from "@mui/icons-material";
import { CastConnected } from "@mui/icons-material";
import { LibraryBooks } from "@mui/icons-material";
import { TrendingDown } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AttachMoney } from "@mui/icons-material";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";

const StyledListItemText = styled(ListItemText)(({ theme }) => ({
  animation: "colorChange 2s linear infinite",

  "@keyframes colorChange": {
    "0%": {
      color: "rgba(0, 0, 0, 0.87)",
    },
    "50%": {
      color: "green",
    },
    "100%": {
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
}));

const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({
  animation: "colorChange 2s linear infinite",

  "@keyframes colorChange": {
    "0%": {
      color: "rgba(0, 0, 0, 0.87)",
    },
    "50%": {
      color: "green",
    },
    "100%": {
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
}));

const SideBar = ({ isOpen, setOpen }) => {
  const { user, logout } = useContext(AuthContext);

  return (
    <Drawer anchor="left" open={isOpen} onClose={() => setOpen(false)}>
      <Box
        p={2}
        width="250px"
        role="presentation"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <List>
          {(user?.subsInfo?.status == "active" || user?.is_trial == 1) && (
            <Link href={"/surebets"} onClick={() => setOpen(false)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <Storage sx={{ color: "#1c50abcc" }} />
                  </ListItemIcon>
                  <ListItemText
                    primary={"Surebets"}
                    sx={{ color: "#1c50abcc" }}
                  />
                </ListItemButton>
              </ListItem>
            </Link>
          )}

          <Link href={"/live-score"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CastConnected sx={{ color: "#c70704" }} />
                </ListItemIcon>
                <ListItemText primary={"Ao Vivo"} sx={{ color: "#c70704" }} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/odds-comparison"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CompareArrows sx={{ color: "#1c50abcc" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Compare as Odds"}
                  sx={{ color: "#1c50abcc" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/dropping-odds"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <TrendingDown sx={{ color: "#1c50abcc" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Odds Caindo"}
                  sx={{ color: "#1c50abcc" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/match-center"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <LibraryBooks sx={{ color: "#1c50abcc" }} />
                </ListItemIcon>
                <ListItemText
                  primary={"Central da Partida"}
                  sx={{ color: "#1c50abcc" }}
                />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/leagues"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEvents sx={{ color: "#1c50abcc" }} />
                </ListItemIcon>
                <ListItemText primary={"Ligas"} sx={{ color: "#1c50abcc" }} />
              </ListItemButton>
            </ListItem>
          </Link>

          {!(user?.subsInfo?.status == "active") && (
            <Link href={"/payments/all"} onClick={() => setOpen(false)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <StyledListItemIcon>
                    <AttachMoney />
                  </StyledListItemIcon>
                  <StyledListItemText primary={"Planos"} />
                </ListItemButton>
              </ListItem>
            </Link>
          )}

          <Link
            href={"/surebets/what-is-surebet"}
            onClick={() => setOpen(false)}
          >
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <MenuBookIcon />
                </ListItemIcon>
                <ListItemText primary={"O que são Surebets"} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/contact"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ContactMail />
                </ListItemIcon>
                <ListItemText primary={"Contato"} />
              </ListItemButton>
            </ListItem>
          </Link>
        </List>

        {user && (
          <Button
            variant="contained"
            color="error"
            onClick={() => {
              logout();
              setOpen(false);
            }}
          >
            Sair
          </Button>
        )}
      </Box>
    </Drawer>
  );
};

export default SideBar;
