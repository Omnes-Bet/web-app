import React, { useState, useEffect, useRef } from "react";
import { makeStyles } from "@mui/styles";
import { useMediaQuery, Box, CircularProgress } from "@mui/material";
import PageSeo from "../../components/PageSeo";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#16a085",
    minHeight: 600,
    marginTop: 10,
    padding: 2,
    borderRadius: "10px",
  },
  surebetWrapper: {
    marginTop: "140px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  oddsPediaIframeDesktop: {
    paddingTop: "7rem",
    paddingBottom: "6rem",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
  oddsPediaIframeMobile: {
    paddingTop: "7rem",
    paddingBottom: "4rem",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
}));

const MatchCenter = () => {
  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");
  const [pageUrl, setPageUrl] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const oddsPediaTag = useRef();

  const scrollFocus = () => {
    return oddsPediaTag.current;
  };

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Central do Partida",
    description: "Veja os Detalhes da Partida",
    pageUrl: pageUrl,
  };

  useEffect(() => {
    window.oddspediaWidget = {
      api_token: "4284fe60768c63b526c6af991cfc1608063cc071f7e15bd6ace4fd5f58a0",
      match_id: "7375065",
      type: "match-center",
      domain: "omnesbet.com",
      selector: "oddspedia-widget-match-center-7375065",
      width: "0",
      theme: "1",
      odds_type: "1",
      language: "br",
      primary_color: "#1976D2",
      primary_color_opacity: "90",
      secondary_color: "#53647B",
      accent_color: "#15EADB",
      font: "Roboto",
      logos: "true",
      image: "true",
      best_odds: "true",
      header: "true",
      odds: "true",
      featured_bookie: "0",
      limitVisibleOperators: "15",
    };

    const script = document.createElement("script");
    script.src =
      "https://widgets.oddspedia.com/js/widget/init.js?widgetId=oddspediaWidgetMatchCenter7375065";
    script.async = true;
    document.body.appendChild(script);
    setTimeout(() => {
      setIsLoading(false);
      scrollFocus().firstChild.style.borderRadius = "20px";
    }, 1000);
  }, []);

  return (
    <div
      className={
        isDesktop
          ? classes.oddsPediaIframeDesktop
          : classes.oddsPediaIframeMobile
      }
    >
      <PageSeo seoProps={pageSeoProps} />
      <div
        id="oddspedia-widget-match-center-7375065"
        ref={oddsPediaTag}
        style={{ width: isDesktop ? "1020px" : "", margin: "0 auto" }}
      />
      {isLoading && (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )}
    </div>
  );
};

export default MatchCenter;
