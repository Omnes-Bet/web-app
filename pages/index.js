import { useContext, useState, useEffect, useRef } from "react";
import Head from "next/head";
import Link from "next/link";
import { Box, useMediaQuery, Button, CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Plans from "../components/Plans/Plans";
import { AuthContext } from "../contexts/authContext";
import logo from "../assets/logo-black.png";
import PageSeo from "../components/PageSeo";
import WhatIsASurebetBanner from "../components/WhatIsASurebetBanner/WhatIsASurebetBanner";
import WinEveryWeekBanner from "../components/WinEveryWeekBanner/WinEveryWeekBanner";
import SocialProof from "../components/SocialProof/SocialProof";
import Logo from "../assets/logo-white.ico";

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
  const [isLoading, setIsLoading] = useState(true);

  const oddsPediaTag = useRef();

  const scrollFocus = () => {
    return oddsPediaTag.current;
  };

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  useEffect(() => {
    window.oddspediaWidget = {
      api_token: "4284fe60768c63b526c6af991cfc1608063cc071f7e15bd6ace4fd5f58a0",
      type: "odds-comparison",
      domain: "omnesbet.com",
      selector:
        "oddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false",
      width: "0",
      theme: "1",
      odds_type: "1",
      language: "br",
      primary_color: "#1976D2",
      accent_color: "#15EADB",
      font: "Roboto",
      logos: "true",
      limit: "10",
      popular: "false",
      sports: "",
      leagues: "",
    };

    const script = document.createElement("script");
    script.src =
      "https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetOddsComparisonPopularSportsLeagues";
    script.async = true;
    document.body.appendChild(script);
    setTimeout(() => {
      setIsLoading(false);
      console.log(
        "odds",
        (scrollFocus().firstChild.style.borderRadius = "20px")
      );
    }, 5000);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Software de Arbitragem",
    description:
      "Melhor Software para Arbitragem de Apostas Esportivas. Ganhe dinheiro sem riscos com o Software Omnesbet.",
    pageUrl: pageUrl,
  };

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://omnesbet.com" key="canonical" />
        <link rel="shortcut icon" href={Logo.src} type="image/x-icon" />
        <link rel="icon" href={Logo.src} type="image/x-icon" />
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
            {user &&
            !(user?.subsInfo?.status == "active") &&
            !(user?.is_trial == 1) ? (
              <>
                <h1>Garanta Suas Apostas Ganhadoras</h1>
                <p>
                  Inscreva-se Para Acesso Ilimitado à Ferramenta de Apostas
                  Esportivas OmnesBet
                </p>
                <Link href={"/payments/all"}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)",
                      width: "fit-content",
                    }}
                  >
                    Quero Assinar
                  </Button>
                </Link>
              </>
            ) : user &&
              !(user?.subsInfo?.status == "active") &&
              user?.is_trial == 1 ? (
              <>
                <h1>Aproveite o Seu Modo de Teste</h1>
                <p>
                  Aproveite Seu Teste Gratuito de 1 Dia e Experimente a OmnesBet
                </p>
                <Link href={"/surebets"}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)",
                      width: "fit-content",
                    }}
                  >
                    Surebets
                  </Button>
                </Link>
              </>
            ) : user?.subsInfo?.status == "active" ? (
              <>
                <h1>Bem-vindo a OmnesBet</h1>
                <p>
                  Sua Solução Completa de Apostas Esportivas Para Arbitragens e
                  Surebets
                </p>
                <Link href={"/surebets"}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)",
                      width: "fit-content",
                    }}
                  >
                    Surebets
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <h1>Inscreva-se Para Uma Avaliação Gratuita de 1 Dia</h1>
                <p>
                  A Melhor Ferramenta de Apostas Esportivas Para Vitórias
                  Consistentes
                </p>
                <Link href={"/signup"}>
                  <Button
                    variant="contained"
                    sx={{
                      background:
                        "linear-gradient(68.8deg, #1c50abcc 1.8%, #1c50abcc 31.8%, rgb(9, 93, 134) 56.2%, rgb(15, 155, 217) 89%)",
                      width: "fit-content",
                    }}
                  >
                    Registrar
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            backgroundImage:
              "linear-gradient(to right, #060C23 , black, #060C23)",
            marginTop: "5px",
            padding: "15px",
          }}
        >
          <div
            id="oddspedia-widget-odds-comparison-popular-false-sports-false-leagues-false"
            ref={oddsPediaTag}
            style={{
              width: isMobile ? "1020px" : "",
              background: "",
            }}
          />
          {isLoading && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <CircularProgress />
            </Box>
          )}
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
