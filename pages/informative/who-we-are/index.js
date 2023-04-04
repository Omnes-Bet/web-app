import React, { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import PageSeo from "../../../components/PageSeo";

const useStyles = makeStyles({
  container: {
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
    padding: "3rem",
    paddingTop: "6rem",
    fontFamily: "sans-serif",
    borderRadius: "1rem",
  },
  wrapper: {
    maxWidth: "1100px",
    margin: "0 auto",
  },
  title: {
    color: "white",
    fontSize: "3rem",
    marginBottom: "2rem",
    textAlign: "center",
  },
  subtitle: {
    color: "#262626",
    fontSize: "2rem",
    fontWeight: "500",
    marginBottom: "1rem",
    textAlign: "left",
  },
  question: {
    color: "#262626",
    fontSize: "1.5rem",
    marginBottom: "10px",
    textAlign: "left",
  },
  answer: {
    color: "#5e5e5e",
    fontSize: "1rem",
    lineHeight: 2,
    textAlign: "justify",
    marginBottom: "30px",
    marginLeft: "15px",
  },
});

function WhoWeAre() {
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Quem Nós Somos",
    description: "Conheça um pouco mais sobre os valores da OmnesBet",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Typography variant="h1" className={classes.title}>
            Quem nós somos
          </Typography>
          <Typography
            variant="body1"
            className={classes.answer}
            sx={{ color: "white !important" }}
          >
            Somos uma equipe de especialistas em apostas esportivas com paixão
            por desenvolver soluções de software inovadoras e fáceis de usar
            para ajudar os apostadores esportivos em todo o mundo para maximizar
            seus lucros e minimizar seus riscos. Nosso software de Surebet é o
            resultado de anos de experiência na indústria de apostas esportivas,
            combinada com algoritmos avançados e tecnologia de ponta.
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h2" className={classes.subtitle}>
                Nossa missão
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="body1" className={classes.answer}>
                  Nossa missão é fornecer aos apostadores esportivos uma
                  plataforma confiável e fácil de usar para identificar e
                  aproveitar as oportunidades de Surebets no mercado de apostas
                  esportivas. Temos como objetivo ajudar nossos usuários a
                  obterem lucros consistentes e sem riscos com esportes, sem a
                  necessidade de amplo conhecimento ou experiência na indústria
                  de apostas. Acreditamos que nosso software de Surebet pode
                  revolucionar a forma como as pessoas abordam as apostas
                  esportivas e podem tornar-se uma ferramenta essencial para
                  quem deseja aumentar ganhos e construir uma estratégia de
                  apostas lucrativa.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography variant="h2" className={classes.subtitle}>
                Nossos valores
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="body1" className={classes.answer}>
                  Em nosso software de Surebet, valorizamos integridade,
                  transparência e satisfação do cliente acima de tudo.
                  Acreditamos que a honestidade e abertura são essenciais para
                  construir confiança com nossos usuários, e nós estamos
                  empenhados em fornecer informações precisas, confiáveis ​​e
                  apoio em todos os momentos. Também priorizamos as necessidades
                  e interesses de nossos usuários, e estamos trabalhando
                  constantemente para melhorar nosso software e serviços para
                  atender às crescentes necessidades e expectativas. Nós nos
                  esforçamos para criar uma interface amigável e intuitiva que
                  pode ser facilmente utilizada por qualquer pessoa,
                  independentemente do nível de experiência em apostas
                  esportivas. Nossa equipe se dedica a fornecer atendimento e
                  suporte ao cliente, e estamos sempre disponíveis para
                  responder a quaisquer perguntas ou preocupações que nossos
                  usuários podem ter. No geral, nossos valores refletem nosso
                  compromisso com excelência, inovação e satisfação do cliente,
                  e estamos orgulhosos de defender esses valores em tudo o que
                  fazemos.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}
export default WhoWeAre;
