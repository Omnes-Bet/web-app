import React from "react";
import PropTypes from "prop-types";
import omnislogo from "../../assets/logo-no-background.png";
import plusEighteenIcon from "../../assets/plus-18-movie.png";
import visaIcon from "../../assets/visa.png";
import mastercardIcon from "../../assets/mastercard.png";

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
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
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
                <Link
                  href={
                    "https://www.facebook.com/profile.php?id=100090355054176"
                  }
                >
                  <FacebookRounded />
                </Link>
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
                { title: "How it works", route: "/informative/how-it-works" },
                { title: "Questions", route: "/informative/questions" },
                { title: "Rules", route: "/informative/rules" },
              ]}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <FooterList
              title="Company"
              options={[
                {
                  title: "Service terms",
                  route: "/informative/services-terms",
                },
                {
                  title: "Accounts",
                  route: "/informative/accounts",
                },
              ]}
            />
          </Grid>
          <Grid item xs={6} lg={2}>
            <FooterList
              title="About"
              options={[
                { title: "Who we are", route: "/informative/who-we-are" },
                {
                  title: "Privacy Policy",
                  route: "/informative/privacy-policy",
                },
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

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            padding: "10px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src={plusEighteenIcon.src}
              alt="plus-eighteen"
              style={{ width: "50px", marginRight: "15px" }}
            />
            <VerifiedUserIcon fontSize="large" />
          </div>

          <div>
            <img src={visaIcon.src} alt="visa" style={{ width: "50px" }} />
            <img
              src={mastercardIcon.src}
              alt="mastercard"
              style={{ width: "70px" }}
            />
          </div>
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
              <Typography>Data powered by Oddspedia</Typography>
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
          <Link href={opt?.route ? opt?.route : ""}>
            <Box fontSize="body2.fontSize" color="grey.400">
              <Typography>{opt.title}</Typography>
            </Box>
          </Link>
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
