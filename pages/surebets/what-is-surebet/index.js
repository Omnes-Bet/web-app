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
    title: "Omnesbet | O que é Surebets && Arbitrage",
    description:
      "Obtenha uma compreensão profunda do que é uma aposta certa e arbitragem em apostas esportivas.",
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
            Surebets, também conhecidas como apostas de arbitragem, são um tipo
            de aposta em que o o apostador pode lucrar independentemente do
            resultado do jogo. Esse é alcançado aproveitando as diferenças nas
            probabilidades oferecidas por diferentes casas de apostas.
          </Typography>
          <Typography variant="body1">
            Em uma surebet, o apostador aposta em todos os resultados possíveis
            de uma jogo com diferentes casas de apostas, para que as
            probabilidades totais sejam maiores de 1. Isso garante um lucro,
            independentemente do resultado do jogo. O o lucro geralmente é
            pequeno, mas pode ser significativo quando grandes quantias de
            dinheiro são apostados.
          </Typography>
          <Typography variant="body1">
            As Surebets são populares entre os apostadores profissionais, que
            estão sempre em busca de oportunidades de lucro. No entanto, eles
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
            A arbitragem é uma estratégia de negociação que envolve a compra e
            venda de mesmo ativo em diferentes mercados, a fim de aproveitar o
            preço e diferenças e lucrar. No mundo das apostas esportivas,
            arbitragem refere-se ao mesmo conceito, mas em vez de negociar
            ativos, o apostador está apostando em diferentes resultados do mesmo
            jogo.
          </Typography>
          <Typography variant="body1">
            Assim como as surebets, as apostas de arbitragem podem ser usadas
            para garantir lucro independentemente do resultado do jogo. Isso é
            feito tomando vantagem das diferenças de cotas oferecidas por
            diferentes casas de apostas. O apostador faz apostas em todos os
            resultados possíveis do jogo com diferentes casas de apostas, para
            que as probabilidades totais sejam superiores a 1. Em desta forma, o
            apostador pode lucrar independentemente do resultado da jogo.
          </Typography>
          <Typography variant="body1">
            No entanto, assim como as surebets, as apostas de arbitragem
            requerem uma análise cuidadosa e monitoramento de probabilidades, e
            pode ser difícil de encontrar e executar. O lucro das apostas de
            arbitragem geralmente é pequeno, mas pode ser significativo quando
            grandes quantias de dinheiro são apostadas.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default WhatIsSurebet;
