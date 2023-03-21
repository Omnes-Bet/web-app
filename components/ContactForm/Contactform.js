import React from "react";
import { Grid, Button, Card, CardContent, Typography } from "@mui/material";
import Router from "next/router";

const ContactForm = () => {
  return (
    <form
      action="mailto:daniel.alves@omnesbet.com"
      method="post"
      enctype="text/plain"
    >
      <Typography gutterBottom variant="h3" align="center">
        React-App
      </Typography>
      <Grid>
        <Card style={{ maxWidth: 450, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5" align="center">
              Entre em Contato
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              gutterBottom
              align="center"
            >
              Entraremos em contato com você dentro de 24hrs.
            </Typography>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={() => Router.push("/")}
              >
                Enviar e-mail
              </Button>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </form>
  );
};

export default ContactForm;
