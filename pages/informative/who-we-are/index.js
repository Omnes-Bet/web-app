import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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

  return (
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
          Somos uma equipe de especialistas em apostas esportivas com paixão por
          desenvolver soluções de software inovadoras e fáceis de usar para
          ajudar os apostadores esportivos em todo o mundo para maximizar seus
          lucros e minimizar seus riscos. Nosso software surebet é o resultado
          de anos de experiência no indústria de apostas esportivas, combinada
          com algoritmos avançados e tecnologia de ponta.
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
                plataforma confiável e plataforma fácil de usar para identificar
                e aproveitar as vantagens da surebet oportunidades no mercado de
                apostas esportivas. Temos como objetivo ajudar nossos usuários
                obtenham lucros consistentes e sem riscos com esportes apostas,
                sem a necessidade de amplo conhecimento ou experiência na
                indústria de apostas. Acreditamos que nosso software surebet
                pode revolucionar a forma como as pessoas abordam as apostas
                esportivas e podem tornar-se uma ferramenta essencial para quem
                deseja aumentar ganhos e construir uma estratégia de apostas
                lucrativa.
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
                Em nosso software surebet, valorizamos integridade,
                transparência e satisfação do cliente acima de tudo. Acreditamos
                que a honestidade e abertura são essenciais para construir
                confiança com nossos usuários, e nós estão empenhados em
                fornecer informações precisas e confiáveis ​​e apoio em todos os
                momentos. Também priorizamos as necessidades e interesses de
                nossos usuários, e estamos trabalhando constantemente para
                melhorar software e serviços para atender às suas crescentes
                necessidades e expectativas. Nós nos esforçamos para criar uma
                interface amigável e intuitiva plataforma que pode ser
                facilmente utilizada por qualquer pessoa, independentemente
                nível de experiência em apostas esportivas. Nossa equipe se
                dedica a fornecendo atendimento e suporte excepcionais ao
                cliente, e estamos sempre disponível para responder a quaisquer
                perguntas ou preocupações que nossos os usuários podem ter. No
                geral, nossos valores refletem nosso compromisso com excelência,
                inovação e satisfação do cliente, e estamos orgulhosos de
                defender esses valores em tudo o que fazemos.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default WhoWeAre;
