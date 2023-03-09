import { useContext, useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, useMediaQuery, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Plans from "../components/Plans/Plans";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/logo-black.png";
import PageSeo from "../components/PageSeo";
import WhatIsASurebetBanner from "../components/WhatIsASurebetBanner/WhatIsASurebetBanner";
import WinEveryWeekBanner from "../components/WinEveryWeekBanner/WinEveryWeekBanner";
import SocialProof from "../components/SocialProof/SocialProof";

const useStyles = makeStyles((theme) => ({
  main: {
    position: "relative",
    paddingTop: "3rem",
    fontFamily: "sans-serif",
    color: "white",
  },
  heroSectionDesktop: {
    position: "relative",
    height: "600px",
  },
  heroSectionMobile: {
    position: "relative",
    height: "400px",
  },
  videoParticles: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heroDesktopInfo: {
    position: "absolute",
    width: "100%",
    height: "auto",
    top: "0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "200px 15%",
    gap: "20px",
    fontFamily: "sans-serif",
    color: "white",
  },
  heroMobileInfo: {
    position: "absolute",
    width: "70%",
    height: "auto",
    top: "0",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    margin: "100px 40px",
    gap: "20px",
    fontFamily: "sans-serif",
    color: "white",
  },
  iframeDesktop: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  iframeMobule: {
    display: "flex",
    margin: "0 auto",
    flexDirection: "column",
    gap: "20px",
  },
}));

export default function Home() {
  const [pageUrl, setPageUrl] = useState();
  const { user } = useContext(AuthContext);
  const classes = useStyles();
  const isMobile = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Arbitrage Software",
    description:
      "Best Software for Sports Betting Arbitrage. Earn risk free money with Omnesbet Software.",
    pageUrl: pageUrl,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={logo.src} />
        <link rel="canonical" href="https://omnesbet.com" key="canonical" />
      </Head>
      <PageSeo seoProps={pageSeoProps} />
      <div className={classes.main}>
        <div
          className={
            !isMobile ? classes.heroSectionMobile : classes.heroSectionDesktop
          }
        >
          <video
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/particleEffect.mp4" type="video/mp4" />
          </video>
          <div
            className={
              !isMobile ? classes.heroMobileInfo : classes.heroDesktopInfo
            }
          >
            {(user && !(user?.subsInfo?.status == "active") && !(user?.is_trial == 1)) ? (
              <>
                <h1>Ensure Your Winning Bets</h1>
                <p>
                  Subscribe Now for Unlimited Access to the OmnesBet Sports Betting Tool
                </p>
                <Link href={"/payments/all"}>
                  <Button
                    variant="contained"
                    sx={{ background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)", width: "fit-content" }}
                  >
                    Subscribe Now
                  </Button>
                </Link>
              </>
            ) : (user && !(user?.subsInfo?.status == "active") && (user?.is_trial == 1)) ? (
              <>
                <h1>Enjoy Your Trial Mode</h1>
                <p>
                  Enjoy Your 1-Day Free Trial and Experience OmnesBet
                </p>
                <Link href={"/surebets"}>
                  <Button
                    variant="contained"
                    sx={{ background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)", width: "fit-content" }}
                  >
                    Surebets
                  </Button>
                </Link>
              </>
            ) : (user?.subsInfo?.status == "active") ? (
              <>
                <h1>Welcome to OmnesBet</h1>
                <p>
                  Your All-in-One Sports Betting Solution for Arbitrages & Surebets
                </p>
                <Link href={"/surebets"}>
                  <Button
                    variant="contained"
                    sx={{ background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)", width: "fit-content" }}
                  >
                    Surebets
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <h1>Sign up now for 1-Day Free Trial</h1>
                <p>
                  The Ultimate Sports Betting Tool for Consistent Wins
                </p>
                <Link href={"/signup"}>
                  <Button
                    variant="contained"
                    sx={{ background: "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)", width: "fit-content" }}
                  >
                    Sign up
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <WhatIsASurebetBanner />
        <WinEveryWeekBanner />
        <SocialProof />

        {!(user?.subsInfo?.status == "active") && (
          <Box>
            <Plans />
          </Box>
        )}
      </div>
    </>
  );
}
