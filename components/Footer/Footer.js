import React from "react";
import PropTypes from "prop-types";
import omnislogo from "../../assets/logo-no-background.png";

import {
  ListItem,
  List,
  Typography,
  Box,
  Grid,
  Divider,
  Container,
} from "@mui/material";

import { FacebookRounded } from "@mui/icons-material";
import { Instagram } from "@mui/icons-material";
import Link from "next/link";

const Footer = () => {
  return (
    <Box bgcolor={"background.gray"} py={8}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs>
            <img src={omnislogo.src} alt="OmnesBet" height={"75px"} />
            <Box display={"flex"} mt={4}>
              <Box mr={2} color="grey.400">
                <FacebookRounded />
              </Box>
              <Box color="grey.400">
                <Link href={"https://www.instagram.com/omnesbet/"}>
                  <Instagram />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={6} lg={2}>
            <FooterList
              title="Websites"
              options={[
                { title: "How it works", route: "/como-funciona" },
                { title: "Questions", route: "/duvidas" },
                { title: "Rules", route: "/regras" },
              ]}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <FooterList
              title="Company"
              options={[
                { title: "Service terms", route: "/termos-de-servico" },
                {
                  title: "Accounts & Payouts",
                  route: "/accounts-payouts-and-bonuses",
                },
              ]}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <FooterList
              title="About"
              options={[
                { title: "Who we are", route: "/quem-somos" },
                { title: "Privacy Policy" },
              ]}
            />
          </Grid>
        </Grid>
        <Box bgcolor="grey.400" style={{ opacity: 0.2 }}>
          <Divider />
        </Box>
        <Box bgcolor="grey.400" style={{ opacity: 0.2 }}>
          <Divider />
        </Box>
        <Box bgcolor="grey.400" style={{ opacity: 0.2 }}>
          <Divider />
        </Box>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box color="grey.400" pt={10}>
            <Typography>© 2023 OmnesBet. All rights reserved.</Typography>
          </Box>
          <Link href={"https://oddspedia.com"}>
            <Box color="grey.400" pt={10} sx={{ display: "flex", gap: "5px" }}>
              <Typography>Data powered by</Typography>
              <img
                src="https://widgets.oddspedia.com/images/logo-oddspedia-dark.svg"
                alt="Oddspedia"
                height={"20px"}
              />
            </Box>
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

const FooterList = ({ title, options = [] }) => {
  return (
    <List>
      <ListItem>
        <Box
          fontWeight="box.fontWeight"
          fontSize="box.fontSize"
          color="grey.400"
        >
          <Typography>{title}</Typography>
          <Box mb={3} />
        </Box>
      </ListItem>
      {/*eslint-disable-next-line arrow-parens*/}
      {options.map((opt) => {
        return (
          <Box fontSize="body2.fontSize" color="grey.400">
            <Typography>{opt.title}</Typography>
          </Box>
        );
      })}
    </List>
  );
};

FooterList.propTypes = {
  title: PropTypes.string,
  options: PropTypes.array,
};

export default Footer;
