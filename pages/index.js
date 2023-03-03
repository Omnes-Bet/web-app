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
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-11108087420"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {window.dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'AW-11108087420');
        </script>
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
            {!(user?.subsInfo?.status == "active") ? (
              <>
                <h1>Ensure your winning bets</h1>
                <p>
                  Make your bets and investments safe with our arbitrage
                  services
                </p>
                <Link href={"/payments/all"}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1c50abcc", width: "fit-content" }}
                  >
                    Subscribe Now
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <h1>Check the current Arbs & Surebts</h1>
                <p>
                  Make you bets and investments safe with our arbitrage services
                </p>
                <Link href={"/surebets"}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#1c50abcc", width: "fit-content" }}
                  >
                    Surebets
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
