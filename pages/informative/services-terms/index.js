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

function ServiceTerms() {
  const classes = useStyles();
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Termos de Serviços",
    description:
      "Aprenda mais sobre como funciona a OmnesBet",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <div className={classes.container}>
        <div className={classes.wrapper}>
          <Typography variant="h1" className={classes.title}>
            Termos de serviço
          </Typography>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h2" className={classes.subtitle}>
                Assinatura
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.question}>
                  Como faço para cancelar minha assinatura?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Você pode cancelar sua assinatura a qualquer momento fazendo
                  login em sua conta e indo para a página do usuário. A partir
                  daí, você pode escolha cancelar sua assinatura.
                </Typography>

                <Typography variant="h3" className={classes.question}>
                  Existe uma política de reembolso?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Não oferecemos reembolso de taxas de assinatura pagas.
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
                Propriedade intelectual
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.question}>
                  Quem detém os direitos de propriedade intelectual do software?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Possuímos todos os direitos de propriedade intelectual do
                  software, incluindo, entre outros, patentes, direitos
                  autorais, marcas registradas, e segredos comerciais. Você não
                  pode reproduzir, distribuir, modificar ou criar trabalhos
                  derivados de nosso software sem nossa prévia permissão por
                  escrito.
                </Typography>
                <Typography variant="h3" className={classes.question}>
                  Qual é a licença para usar o software?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Ao assinar nosso software, concedemos a você um direito não
                  exclusivo, licença intransferível para usar o software para
                  seu próprio uso pessoal ou comercial, de acordo com estes
                  termos.
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
                Terminação
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <Typography variant="h3" className={classes.question}>
                  Quais são os motivos para rescindir sua assinatura?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Reservamo-nos o direito de encerrar sua assinatura a qualquer
                  momento e por qualquer motivo, incluindo, mas não limitado a,
                  violação destes termos de serviços, atividade fraudulenta,
                  violação de leis ou regulamentos aplicáveis.
                </Typography>

                <Typography variant="h3" className={classes.question}>
                  O que acontece se sua assinatura for encerrada?
                </Typography>
                <Typography variant="body1" className={classes.answer}>
                  Se sua assinatura for encerrada, você não terá mais acesso ao
                  nosso software e todos os direitos concedidos a você sob estes
                  termos de serviço cessarão imediatamente.
                </Typography>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </>
  );
}

export default ServiceTerms;
