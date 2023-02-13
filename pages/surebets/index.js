import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Container, Box, CircularProgress } from "@mui/material";
import SurebetTable from "../../components/SurebetTable/SurebetTable";
import useArbs from "../../hooks/useArbs";
import { AuthContext } from "../../contexts/authContext";
import Router from "next/router";
import PageSeo from "../../components/PageSeo";
import SurebetWidget from "../../components/SurebetWidget/SurebetWidget";
//import { parseCookies } from "nookies";

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
}));

const Surebet = () => {
  const { user } = useContext(AuthContext);
  const { getArbs, arbs } = useArbs();
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();
  const [odds, setOdds] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Surebets",
    description: "Choose the best arbitrage and earn money with it",
    pageUrl: pageUrl,
  };

  // const calAPI = async () => {
  //   await fetch(
  //     "https://oddspedia.com/api/v1/getSurebets?markets=&geoCode=BR&geoState=&sports=&bookmakers=&wettsteuer=0&sort=profit&language=br"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setOdds(data));
  // };

  useEffect(() => {
    if (!(user?.subsInfo?.status == "active")) {
      Router.push("/");
    } /*else {
      getArbs();
      calAPI();
    }*/
  }, []);

  useEffect(() => {
    window.oddspediaWidget = {
      api_token: "4284fe60768c63b526c6af991cfc1608063cc071f7e15bd6ace4fd5f58a0",
      type: "sure-bets",
      domain: "omnesbet.com",
      selector: "oddspedia-widget-sure-bets",
      width: "0",
      theme: "0",
      odds_type: "1",
      language: "en",
      primary_color: "#0F5D75",
      accent_color: "#1AB7AC",
      font: "Roboto",
      limit: "5",
    };

    const script = document.createElement('script');
    script.src = 'https://widgets.oddspedia.com/js/widget/init.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div id="oddspedia-widget-sure-bets" style={{ paddingTop: "6rem" }}>
      <PageSeo seoProps={pageSeoProps} />
      {/* {odds ? (
        odds?.data?.slice(0, 30).map((i) => {
          return <SurebetWidget obj={i} />;
        })
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )} */}
      {/* {arbs ? (
        arbs?.data?.map((data) => {
          return (
            <Box my={8}>
              <Box>
                <Paper
                  className={classes.overview}
                  elevation={2}
                  square="false"
                >
                  <SurebetTable arbsData={data} />
                </Paper>
              </Box>
            </Box>
          );
        })
      ) : (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <CircularProgress />
        </Box>
      )} */}
    </div>
  );
};

export default Surebet;

// export const getServerSideProps = async (ctx) => {
//   const { ["nextauth.token"]: token } = parseCookies(ctx);

//   if (!token) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {},
//   };
// };
