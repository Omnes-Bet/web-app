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

function AccountsPayouts() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
          Contas e Pagamentos
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Configuração de conta
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Como criar uma conta?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Você pode criar uma conta visitando nosso site e clicando no
                botão "Inscreva-se". Siga as instruções para inserir suas
                informações e criar sua conta.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                Posso ter várias contas?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Cada usuário tem permissão para ter uma conta. Se você precisar
                de várias contas para o seu negócio, entre em contato com nossa
                equipe de suporte ao cliente.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4a-content"
            id="panel4a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Segurança da conta
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Como proteger minha conta contra acessos não autorizados?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Você pode proteger sua conta usando uma senha forte. Também
                recomendamos que você não compartilhe suas credenciais de login
                da conta com ninguém e seja cauteloso em relação a tentativas de
                phishing.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                O que devo fazer se suspeitar de acesso não autorizado à minha
                conta?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Se você suspeitar de acesso não autorizado à sua conta, entre em
                contato imediatamente com nossa equipe de suporte ao cliente.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}
export default AccountsPayouts;
