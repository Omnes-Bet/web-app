import React, { useState, useEffect } from "react";
import { Container, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { useMediaQuery } from "@mui/material";
import surebetsImg from "../../../assets/surebets.png";
import arbitrageImg from "../../../assets/arbitrage.webp";
import PageSeo from "../../../components/PageSeo";

const useStyles = makeStyles(() => ({
  container: {
    paddingTop: "6rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: 40,
    marginTop: 40,
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
    color: "#fff",
    borderRadius: 20,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.4)",
    "@media (max-width: 600px)": {
      padding: 20,
      marginTop: 20,
    },
  },
  section: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    marginBottom: 80,
    "@media (max-width: 600px)": {
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      marginTop: 40,
      marginBottom: 40,
    },
  },
  sectionTitle: {
    fontWeight: "bold",
    textAlign: "left",
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 20,
    "@media (max-width: 600px)": {
      fontSize: "2rem",
      marginBottom: 10,
    },
  },
  sectionContent: {
    textAlign: "justify",
    maxWidth: 800,
    lineHeight: 1.5,
    marginRight: 80,
    "@media (max-width: 600px)": {
      marginRight: 0,
      marginBottom: 20,
    },
  },
  sectionImage: {
    height: "auto",
    borderRadius: 10,
    boxShadow: "0px 0px 20px 0px rgba(0,0,0,0.2)",
    "@media (max-width: 600px)": {
      marginLeft: 0,
      maxWidth: 300,
    },
  },
  highlight: {
    color: "#ffc107",
  },
}));

const WhatIsSurebet = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Como Funciona o Software",
    description:
      "Aprenda mais sobre como funciona a OmnesBet",
    pageUrl: pageUrl,
  };

  const classes = useStyles();
  const isDesktop = useMediaQuery("(min-width:600px)");

  return (
    <Container maxWidth="lg" className={classes.container}>
      <PageSeo seoProps={pageSeoProps} />
      <Box className={classes.section}>
        <Box className={classes.sectionContent}>
          <Typography variant="h4" className={classes.sectionTitle}>
            O que são Surebets?
          </Typography>
          <Typography variant="body1">
            Surebets, ou apostas de arbitragem, são um tipo de aposta que
            permite ao apostador lucrar independentemente do resultado do jogo,
            explorando diferenças nas probabilidades oferecidas por diferentes
            casas de apostas.
          </Typography>
          <Typography variant="body1">
            Para fazer uma Surebet, o apostador precisa encontrar um jogo em que
            as diferentes casas de apostas ofereçam probabilidades diferentes
            para cada resultado possível. O objetivo é encontrar uma combinação
            de apostas que garanta um lucro, independentemente do resultado do
            jogo. Para alcançar isso, o apostador divide sua aposta em todos os
            resultados possíveis do jogo, de acordo com as probabilidades
            oferecidas por cada casa de apostas.
          </Typography>
          <Typography variant="body1">
            As Surebets são populares entre os apostadores profissionais, que
            estão sempre em busca de oportunidades de lucro. No entanto, elas
            exigem análise cuidadosa e monitoramento de probabilidades, e pode
            ser difícil de encontrar e executar.
          </Typography>
        </Box>
        <Box
          className={classes.sectionImage}
          style={{ margin: !isDesktop ? "0 auto" : "" }}
        >
          <img
            style={{ width: !isDesktop ? "100%" : "" }}
            src={surebetsImg.src}
            alt="surebets"
          />
        </Box>
      </Box>
      <Box className={classes.section} sx={{ gap: "40px" }}>
        <Box
          className={classes.sectionImage}
          style={{ margin: !isDesktop ? "0 auto" : "" }}
        >
          <img
            style={{ width: !isDesktop ? "100%" : "" }}
            src={arbitrageImg.src}
            alt="arbitrage"
          />
        </Box>
        <Box className={classes.sectionContent}>
          <Typography variant="h4" className={classes.sectionTitle}>
            O que é Arbitragem?
          </Typography>
          <Typography variant="body1">
            Arbitragem é uma estratégia de negociação que consiste na compra e
            venda do mesmo ativo em diferentes mercados, a fim de aproveitar as
            diferenças de preço e lucrar. No mundo das apostas esportivas,
            arbitragem refere-se ao mesmo conceito, mas, em vez de negociar
            ativos, o apostador está apostando em diferentes resultados do mesmo
            jogo.
          </Typography>
          <Typography variant="body1">
            Assim como as Surebets, as apostas de arbitragem podem ser usadas
            para garantir lucro independentemente do resultado do jogo. O
            apostador aproveita as diferenças de cotações oferecidas por
            diferentes casas de apostas e aposta em todos os resultados
            possíveis do jogo com diferentes casas de apostas, de modo que as
            probabilidades totais sejam superiores a 1. Dessa forma, o apostador
            pode lucrar independentemente do resultado do jogo.
          </Typography>
          <Typography variant="body1">
            No entanto, assim como as Surebets, as apostas de arbitragem exigem
            análise cuidadosa e monitoramento constante das cotações oferecidas
            pelas diferentes casas de apostas, além de serem difíceis de
            encontrar e executar. O lucro das apostas de arbitragem geralmente é
            pequeno, mas pode ser significativo quando grandes quantias de
            dinheiro são apostadas.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatIsSurebet;
