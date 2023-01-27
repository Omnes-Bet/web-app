import { useContext } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import MainBanner from "../components/MainBanner/MainBanner";
import { Container, Box, Typography, useMediaQuery } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Plans from "../components/Plans/Plans";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/logo-black.png"
import Particle from "../components/Particles/Particles";

const useStyles = makeStyles((theme) => ({
  iframeDesktop: {
    display: "flex", 
    justifyContent: "center",
    alignItems: "center", 
    gap: "20px"
  },
  iframeMobule: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
    gap: "20px"
  }
}));

export default function Home() {
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <>
      <Head>
        <title>Omnesbet</title>
        <meta name="description" content="Best Software for Sports Betting Arbitrage" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} />
      </Head>
      <main className={styles.home}>
        <Container>
          <Box my={8}>
            <Particle />
            <MainBanner />
          </Box>
          <Box
            my={8}
            className={matches ? classes.iframeDesktop : classes.iframeMobule}
          >
            <iframe
              width={matches ? 580 : 350}
              height={matches ? 380 : 200}
              src="https://www.youtube.com/embed/1rVWb7YivNk"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <Box>
              <Typography variant="h4" color="white"> Learn About Surebets</Typography>
              <Typography color="white">
                A complete video explaining how it works behind the scenes.
              </Typography>
            </Box>
          </Box>
          {!(user?.status == "active") && (
            <Box>
              <Plans />
            </Box>
          )}
        </Container>
      </main>
    </>
  );
}
