import React, { useState, useEffect, useContext } from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Container, Box, CircularProgress } from "@mui/material";
import SurebetTable from "../../components/SurebetTable/SurebetTable";
import useArbs from "../../hooks/useArbs";
import { AuthContext } from "../../contexts/authContext";
import Router from "next/router";
import PageSeo from "../../components/PageSeo";
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
}));

const Surebet = () => {
  const { user } = useContext(AuthContext);
  const { getArbs, arbs } = useArbs();
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Surebets",
    description: "Choose the best arbitrage and earn money with it",
    pageUrl: pageUrl,
  };

  useEffect(() => {
    if (!(user?.status == "active")) {
      Router.push("/");
    } else {
      getArbs();
    }
  }, []);

  return (
    <Container sx={{ marginTop: "140px" }}>
      <PageSeo seoProps={pageSeoProps} />
      {arbs ? (
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
      )}
    </Container>
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
