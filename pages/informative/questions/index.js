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

function FAQ() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <Typography variant="h1" className={classes.title}>
          Perguntas Frequentes
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h2" className={classes.subtitle}>
              Geral
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                O que é OmnesBet?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                OmnesBet é uma plataforma inovadora e fácil de usar para
                identificar e aproveitar surebets no mercado de apostas
                esportivas.
              </Typography>

              <Typography variant="h3" className={classes.question}>
                Como a OmnesBet funciona?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Nosso software verifica as probabilidades oferecidas por
                diferentes casas de apostas em um grande número de eventos
                esportivos e identifica oportunidades de surebet em tempo real.
                Você pode usar nossa plataforma para procurar surebets em
                esportes, ligas ou eventos específicos e filtrar os resultados
                com base em diferentes critérios, como margem de lucro, odds
                mínimas e máximas e preferências de casa de apostas. Depois de
                identificar uma surebet, nosso software calcula as quantias
                ótimas para apostar em cada resultado, levando em consideração
                as probabilidades e a comissão cobrada pelas casas de apostas.
              </Typography>

              <Typography variant="h3" className={classes.question}>
                O software OmnesBet é fácil de usar?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Sim, nosso software foi desenvolvido para ser fácil de usar e
                navegar, com instruções claras e guias úteis para garantir que
                você possa aproveitar ao máximo nossa plataforma.
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
              Pagamentos
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Há uma taxa de assinatura para usar o software OmnesBet?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Sim, há uma taxa de assinatura mensal para usar nossa
                plataforma, que lhe dá acesso completo a todos os recursos e
                ferramentas.
              </Typography>
              <Typography variant="h3" className={classes.question}>
                Quais métodos de pagamento são aceitos?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Nós aceitamos cartões de crédito. Você pode encontrar mais
                informações sobre opções de pagamento e planos de preços em
                nossa página de pagamento.
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
              Segurança
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Minhas informações pessoais estão seguras com a OmnesBet?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Sim, levamos a segurança de suas informações pessoais muito a
                sério. Nossa plataforma usa as mais recentes tecnologias de
                criptografia e firewalls para proteger seus dados e nunca
                compartilhamos suas informações com terceiros sem o seu
                consentimento. Também cumprimos todas as leis e regulamentos de
                proteção de dados aplicáveis ​​para garantir que seus direitos
                de privacidade sejam totalmente respeitados.
              </Typography>

              <Typography variant="h3" className={classes.question}>
                Que medidas são usadas para prevenir fraudes?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Temos uma série de medidas em vigor para evitar fraudes,
                incluindo verificações de verificação de credenciais,
                rastreamento de IP e monitoramento de transações. Também
                trabalhamos em estreita colaboração com nossos parceiros de
                pagamento e casas de apostas para garantir que todas as
                transações sejam legítimas e transparentes.
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
              Suporte
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <Typography variant="h3" className={classes.question}>
                Qual suporte está disponível se eu tiver dúvidas ou problemas?
              </Typography>
              <Typography variant="body1" className={classes.answer}>
                Nossa equipe de suporte dedicada está disponível 24 horas por
                dia, 7 dias por semana, para ajudá-lo com qualquer dúvida ou
                problema que você possa ter. Você pode entrar em contato conosco
                por e-mail e faremos o possível para responder o mais rápido
                possível.
              </Typography>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
