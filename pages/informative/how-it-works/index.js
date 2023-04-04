import React, { useState, useEffect } from "react";
import { makeStyles } from "@mui/styles";
import PageSeo from "../../../components/PageSeo";

const useStyles = makeStyles({
  container: {
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
    borderRadius: "1rem",
    boxShadow: "0 0 1rem rgba(255, 255, 255, 0.1)",
    paddingTop: "6rem",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "2rem",
  },
  title: {
    color: "#fff",
    fontSize: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  text: {
    color: "#fff",
    fontFamily: "sans-serif",
    fontSize: "1rem",
    lineHeight: 2.5,
    marginBottom: "2rem",
    textAlign: "justify",
  },
});

function HowItWorks() {
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Como Funciona",
    description:
      "Saiba mais sobre como funciona a OmnesBet",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <h1 className={classes.title}>Como Funciona</h1>
          <p className={classes.text}>
            Bem-vindo ao nosso software de Surebets, onde fornecemos uma
            plataforma inovadora e fácil de usar para identificar e aproveitar
            as apostas seguras no mercado de apostas esportivas. Nesta página,
            explicaremos como nosso software funciona e como você pode usá-lo
            para lucrar com as apostas esportivas.
          </p>
          <p className={classes.text}>
            Antes de tudo, vamos definir o que é uma Surebet. Uma Surebet,
            também conhecida como aposta de arbitragem, é uma situação em que
            diferentes casas de apostas oferecem probabilidades em um evento
            esportivo que garantem um lucro para o apostador, independentemente
            do resultado do evento. Ao fazer apostas em todos os resultados
            possíveis com diferentes casas de apostas, o apostador pode garantir
            um lucro, não importa quem vença o jogo.
          </p>
          <p className={classes.text}>
            Nosso software escaneia as probabilidades oferecidas por diferentes
            casas de apostas em um grande número de eventos esportivos e
            identifica oportunidades de apostas seguras em tempo real. Você pode
            usar nossa plataforma para procurar por apostas seguras em esportes,
            ligas ou eventos específicos e filtrar os resultados com base em
            diferentes critérios, como margem de lucro, odds mínimas e máximas e
            preferências de casa de apostas.
          </p>
          <p className={classes.text}>
            Assim que você identificar uma Surebet, nosso software calculará os
            valores ideais de aposta a serem colocados em cada resultado,
            levando em consideração as probabilidades e as odds cobrada pelas
            casas de apostas. Você pode usar nossa calculadora de apostas
            integrada para ver quanto apostar e quanto lucro esperar da aposta
            segura.
          </p>
          <p className={classes.text}>
            Usando nosso software de Surebets, você pode obter lucros
            consistentes e sem riscos em apostas esportivas, sem a necessidade
            de conhecimento ou experiência extensos na indústria de apostas.
            Nosso software é fácil de usar, confiável e constantemente
            atualizado para garantir a maior precisão e desempenho.
          </p>
          <p className={classes.text}>
            Em conclusão, se você deseja aproveitar as oportunidades de Surebets
            no mercado de apostas esportivas e aumentar seus ganhos, nosso
            software é a ferramenta perfeita para você. Com nossa plataforma
            inovadora, você pode facilmente encontrar, calcular, fazer apostas e
            obter lucro com esforço e risco mínimo.
          </p>
        </div>
      </div>
    </>
  );
}

export default HowItWorks;
