import React, { useEffect } from "react";
import { makeStyles } from "@mui/styles";
import { Paper, Container, Box } from "@mui/material";
import SurebetTable from "../../components/SurebetTable/SurebetTable";
import useArbs from "../../hooks/useArbs";
import { parseCookies } from "nookies";
import { AlarmSharp } from "@mui/icons-material";

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
  const { getArbs, arbs } = useArbs();
  const classes = useStyles();

  useEffect(() => {
    getArbs();
  }, []);

  console.log("", )

  return (
    <Container sx={{ marginTop: "140px" }}>
      {arbs &&
        arbs?.data?.map((data) => {
          return (
          <Box my={8}>
            <Box>
              <Paper className={classes.overview} elevation={2} square="false">
                <SurebetTable arbsData={data} />
              </Paper>
            </Box>
          </Box>
          )
        })}
    </Container>
  );
};

export default Surebet;

export const getServerSideProps = async (ctx) => {
  const { ["nextauth.token"]: token } = parseCookies(ctx);

  if (!token) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
