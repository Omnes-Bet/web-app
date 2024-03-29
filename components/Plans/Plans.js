import React from "react";
import { makeStyles } from "@mui/styles";
import {
  Container,
  Grid,
  Box,
  Typography,
  Card,
  CardContent,
  CardHeader,
  Button,
} from "@mui/material";
import Link from "next/link";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  cardHeader: {
    paddingTop: 3,
  },
}));

const Plans = (props) => {
  const classes = useStyles();

  const content = {
    badge: "LOREM IPSUM",
    "header-p1": "Surebets Ilimitadas",
    "header-p2": "turpis non sapien lobortis pretium",
    description: "Tenha o software de arbitragem mais completo",
    option1: "Mensal",
    option2: "Anual",
    "01_title": "Silver",
    "01_price": "R$99",
    "01_suffix": " / mo",
    "01_benefit1": "Surebets & Arbs",
    // "01_benefit2": "Prematch comparison service",
    "01_benefit3": "Contato por e-mail e resposta em cerca de 3 dias",
    "01_benefit4": "Classificação por ROI",
    "01_primary-action": "Selecione o Plano",
    "01_secondary-action": "Saiba mais",
    "02_title": "Gold",
    "02_price": "R$149",
    "02_suffix": " / mo",
    "02_benefit1": "Surebets & Arbs",
    // "02_benefit2": "Prematch comparison service",
    "02_benefit3": "Contato por e-mail e resposta em até 24 horas",
    "02_benefit4": "Classificação por ROI",
    "02_primary-action": "Selecione o Plano",
    "02_secondary-action": "Saiba mais",
    "03_title": "Pro",
    "03_price": "R$199",
    "03_suffix": " / mo",
    "03_benefit1": "Surebets & Arbs",
    // "03_benefit2": "Prematch comparison service",
    "03_benefit3":
      "Contato por e-mail, telefone e chamadas de vídeo com nossa equipe",
    "03_benefit4": "Classificação por ROI",
    "03_primary-action": "Selecione o Plano",
    "03_secondary-action": "Saiba mais",
    ...props.content,
  };

  const [state, setState] = React.useState({
    checkbox: true,
  });

  const handleChange = (event) => {
    setState({ ...state, checkbox: event.target.checked });
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="lg">
        <Box py={8} textAlign="center">
          <Box mb={3}>
            <Container maxWidth="sm">
              <Typography variant="h3" component="h2" gutterBottom={true}>
                <Typography variant="h3" component="span" color="primary">
                  {content["header-p1"]}{" "}
                </Typography>
              </Typography>
              <Typography
                variant="subtitle1"
                color="textSecondary"
                paragraph={true}
              >
                {content["description"]}
              </Typography>
            </Container>
          </Box>
          <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["01_title"]}
                  className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["01_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["01_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["01_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["01_benefit4"]}
                    </Typography>
                  </Box>
                  <Link
                    href={{
                      pathname: "/payments",
                      query: {
                        planSelected: "Silver",
                        id: "price_1MjGlgBNTabfN8Izddff2lE7",
                      },
                    }}
                  >
                    <Button
                      variant="outlined"
                      color="primary"
                      className={classes.primaryAction}
                    >
                      {content["01_primary-action"]}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["02_title"]}
                  className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["02_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["02_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["02_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["02_benefit4"]}
                    </Typography>
                  </Box>
                  <Link
                    href={{
                      pathname: "/payments",
                      query: {
                        planSelected: "Gold",
                        id: "price_1MjGdaBNTabfN8IzTeI2hGvZ",
                      },
                    }}
                  >
                    <Button variant="contained" color="primary">
                      {content["02_primary-action"]}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Card variant="outlined">
                <CardHeader
                  title={content["03_title"]}
                  className={classes.cardHeader}
                ></CardHeader>
                <CardContent>
                  <Box px={1}>
                    <Typography variant="h3" component="h2" gutterBottom={true}>
                      {content["03_price"]}
                      <Typography
                        variant="h6"
                        color="textSecondary"
                        component="span"
                      >
                        {content["03_suffix"]}
                      </Typography>
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit1"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit2"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                    >
                      {content["03_benefit3"]}
                    </Typography>
                    <Typography
                      color="textSecondary"
                      variant="subtitle1"
                      component="p"
                      paragraph={true}
                    >
                      {content["03_benefit4"]}
                    </Typography>
                  </Box>
                  <Link
                    href={{
                      pathname: "/payments",
                      query: {
                        planSelected: "Pro",
                        id: "price_1MjGg8BNTabfN8IzQykI3Xjo",
                      },
                    }}
                  >
                    <Button variant="outlined" color="primary">
                      {content["03_primary-action"]}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
};

export default Plans;
