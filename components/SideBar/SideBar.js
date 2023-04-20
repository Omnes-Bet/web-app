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
import { Storage } from "@mui/icons-material";
import { ContactMail } from "@mui/icons-material";
import { CompareArrows } from "@mui/icons-material";
import { EmojiEvents } from "@mui/icons-material";
import { CastConnected } from "@mui/icons-material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AttachMoney } from "@mui/icons-material";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";

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
                    <Storage />
                  </ListItemIcon>
                  <ListItemText primary={"Surebets"} />
                </ListItemButton>
              </ListItem>
            </Link>
          )}

          <Link href={"/live-score"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CastConnected />
                </ListItemIcon>
                <ListItemText primary={"Ao Vivo"} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/odds-comparison"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CompareArrows />
                </ListItemIcon>
                <ListItemText primary={"Odds Compare"} />
              </ListItemButton>
            </ListItem>
          </Link>

          <Link href={"/leagues"} onClick={() => setOpen(false)}>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <EmojiEvents />
                </ListItemIcon>
                <ListItemText primary={"Ligas"} />
              </ListItemButton>
            </ListItem>
          </Link>

          {!(user?.subsInfo?.status == "active") && (
            <Link href={"/payments/all"} onClick={() => setOpen(false)}>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <AttachMoney />
                  </ListItemIcon>
                  <ListItemText primary={"Planos"} />
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
