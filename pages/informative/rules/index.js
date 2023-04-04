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
  rule: {
    color: "#262626",
    fontSize: "1.5rem",
    marginBottom: "10px",
    textAlign: "left",
  },
  description: {
    color: "#5e5e5e",
    fontSize: "1rem",
    lineHeight: 2,
    textAlign: "justify",
    marginBottom: "30px",
    marginLeft: "15px",
  },
});

function Rules() {
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Regras",
    description:
      "Entenda todas as regras e diretrizes",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Typography variant="h1" className={classes.title}>
            Regras
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h2" className={classes.subtitle}>
                Registro de conta
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.rule}>
                  Exigência de idade
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Você deve ter 18 anos ou mais para criar uma conta.
                </Typography>

                {/* <Typography variant="h3" className={classes.rule}>Identification Verification</Typography>
              <Typography variant="body1" className={classes.description}>We require all users to verify their identity to prevent fraud and protect the integrity of our platform. You may be asked to provide a copy of your government-issued ID, a recent utility bill, and other information to confirm your identity.</Typography> */}

                <Typography variant="h3" className={classes.rule}>
                  Uma conta por usuário
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Cada usuário só pode criar uma conta. A criação de várias
                  contas é estritamente proibida e pode resultar na suspensão ou
                  encerramento da conta.
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
                Assinaturas
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.rule}>
                  Métodos de pagamento aceitos
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Aceitamos cartões de crédito. Consulte nossa página de
                  pagamento para obter mais informações.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel3a-content"
              id="panel3a-header"
            >
              <Typography variant="h2" className={classes.subtitle}>
                Conduta do Usuário
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.rule}>
                  Atividades Proibidas
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  As seguintes atividades são estritamente proibidas em nossa
                  plataforma:
                  <ul className={classes.description}>
                    <li>Postar informações falsas ou enganosas</li>
                    <li>
                      Usar nossa plataforma para qualquer atividade ilegal
                    </li>
                    <li>Assediar ou intimidar outros usuários</li>
                    <li>Criar várias contas</li>
                    <li>
                      Envolver-se em qualquer atividade que viole nossos termos
                      de serviço
                    </li>
                  </ul>
                </Typography>

                <Typography variant="h3" className={classes.rule}>
                  Suspensão ou encerramento da conta
                </Typography>
                <Typography variant="body1" className={classes.description}>
                  Reservamo-nos o direito de suspender ou encerrar sua conta a
                  qualquer momento se acreditarmos que você violou nossos termos
                  de serviço ou se envolveu em qualquer atividade que possa
                  prejudicar nossa plataforma ou outros usuários.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default Rules;
