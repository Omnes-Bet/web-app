import React, { useState, useEffect, useContext } from "react";
import PageSeo from "../../components/PageSeo";
import { makeStyles } from "@mui/styles";
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Box,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import { AuthContext } from "../../contexts/authContext";

const useStyles = makeStyles((theme) => ({
  main: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: "auto",
    borderRadius: "15px",
    backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
  },
  paymentSection: {
    display: "flex",
    gap: "15px",
  },
  paymentSectionMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardHeader: {
    paddingTop: 3,
  },
}));

const stripePromise = loadStripe(
  "pk_live_51MKap3BNTabfN8IzVrtVYUCaUPmcjtkywMKBngay9fMq4Y4pynDeGzZbpT77wp8inUsR1sO5AhZX9xLhSufEbwaz00hWP8S8We"
);

const subscriptionOptions = [
  {
    title: "Silver",
    price: "R$99",
    suffix: " / mês",
    benefit1: "Surebets & Arbs",
    benefit2: "Contato por e-mail e cerca de 3 dias para ser respondido",
    benefit4: "Classificando por ROI",
  },
  {
    title: "Gold",
    price: "R$149",
    suffix: " / mês",
    benefit1: "Surebets & Arbs",
    benefit2: "Entre em contato por e-mail e seja respondido em até 24h",
    benefit4: "Classificando por ROI",
  },
  {
    title: "Pro",
    price: "R$199",
    suffix: " / mês",
    benefit1: "Surebets & Arbs",
    benefit2:
      "Entre em contato por e-mail, telefone e video chamadas com nossa equipe",
    benefit4: "Classificando por ROI",
  },
];

const Payments = () => {
  const [pageUrl, setPageUrl] = useState();
  const router = useRouter();
  const classes = useStyles();
  const matches = useMediaQuery("(min-width:600px)");
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user) {
      Router.push("/");
    }
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Plano selecionado",
    description: "Assine e aproveite os dados",
    pageUrl: pageUrl,
  };

  const content = subscriptionOptions.filter(
    (i) => i.title == router.query.planSelected
  )[0];

  return (
    <div className={classes.main}>
      <PageSeo seoProps={pageSeoProps} />
      <div style={{ margin: "0 auto", paddingTop: "8rem" }}>
        <Link href={"/payments/all"}>
          <Button variant="outlined" color="primary">
            Veja outros planos
          </Button>
        </Link>
        <div
          className={
            matches ? classes.paymentSection : classes.paymentSectionMobile
          }
        >
          <Grid item xs={12} md={4}>
            <Card variant="outlined">
              <CardHeader
                title={content?.title}
                className={classes.cardHeader}
              ></CardHeader>
              <CardContent>
                <Box px={1}>
                  <Typography variant="h3" component="h2" gutterBottom={true}>
                    {content?.price}
                    <Typography
                      variant="h6"
                      color="textSecondary"
                      component="span"
                    >
                      {content?.suffix}
                    </Typography>
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {content?.benefit1}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                  >
                    {content?.benefit2}
                  </Typography>
                  <Typography
                    color="textSecondary"
                    variant="subtitle1"
                    component="p"
                    paragraph={true}
                  >
                    {content?.benefit4}
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Elements stripe={stripePromise}>
            <CheckoutForm
              plandId={router.query.id}
              planName={router.query.planSelected}
            />
          </Elements>
        </div>
      </div>
      <div
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          marginTop: "20px",
          fontFamily: "sans-serif",
          color: "white",
          padding: "20px",
        }}
      >
        <p>
          Gostaríamos de informar aos nossos usuários que as informações que
          fornecemos são apenas para fins informativos. Não nos
          responsabilizamos por nenhum perdas sofridas ao usar nosso serviço.
          Nosso serviço é projetado para fornecer aos usuários informações sobre
          possíveis oportunidades de arbitragem no mercado de apostas
          esportivas, mas não garantimos a precisão as informações fornecidas.
        </p>
        <br />
        <p>
          É importante que os usuários entendam que as informações que fornecer
          pode mudar a qualquer momento. Portanto, é do usuário responsabilidade
          de verificar todas as informações antes de fazer qualquer aposta. Nós
          altamente recomendável que os usuários realizem suas próprias
          pesquisas antes de fazer tomar qualquer decisão e consultar um
          profissional, se necessário.
        </p>
        <br />
        <p>
          Embora a aposta segura possa ser uma estratégia lucrativa, ela também
          traz riscos. Os usuários devem entender que sempre há uma chance de
          perder dinheiro ao fazer apostas, mesmo ao usar uma estratégia de
          surebetting. Além disso, existem outros riscos a serem considerados,
          como apostas limites, restrições de conta e imprevistos que possam
          afetar o resultado de uma partida.
        </p>
        <br />
        <p>
          É crucial que os usuários abordem as apostas seguras com cautela e
          apenas apostar dentro de suas possibilidades. Os usuários nunca devem
          fazer apostas que eles não pode perder. Nosso objetivo é fornecer aos
          usuários informações que podem ajudá-los a tomar decisões informadas,
          mas, em última análise, é o responsabilidade do usuário gerenciar seu
          próprio risco e fazer suas próprias decisões.
        </p>
        <br />
        <p>
          Em resumo, embora nos esforcemos para fornecer informações precisas e
          atualizadas informações, não assumimos responsabilidade por quaisquer
          perdas incorridas durante a utilização do nosso serviço. Os usuários
          devem verificar todas as informações antes colocar quaisquer apostas e
          são responsáveis ​​por gerir o seu próprio risco. Nós encorajar os
          usuários a abordar as apostas seguras com cautela e apenas apostar
          dentro de seus meios.
        </p>
      </div>
    </div>
  );
};

export default Payments;
