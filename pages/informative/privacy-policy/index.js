import React from "react";
import { makeStyles } from "@mui/styles";

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

function PrivacyPolicy() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>Política de Privacidade</h1>
        <p className={classes.text}>
          No nosso software de apostas seguras, valorizamos sua privacidade e
          nos comprometemos a proteger suas informações pessoais. Esta política
          de privacidade descreve nossas práticas para coleta, uso e
          compartilhamento de suas informações quando você usa nosso site e
          serviços. Ao acessar ou usar nosso site, você concorda com os termos
          desta política de privacidade.
        </p>
        <h2 className={classes.text}>Informações que coletamos</h2>
        <p className={classes.text}>
          Coletamos informações que você nos fornece quando se registra para
          nossos serviços ou nos contata para suporte. Essas informações podem
          incluir seu nome, endereço de e-mail, informações de pagamento e
          outros detalhes pessoais.
        </p>
        <p className={classes.text}>
          Também podemos coletar informações sobre o uso do nosso site e
          serviços, incluindo seu endereço IP, tipo de navegador e informações
          do dispositivo. Essas informações podem ser coletadas por meio do uso
          de cookies, web beacons e outras tecnologias de rastreamento.
        </p>
        <h2 className={classes.text}>Como usamos suas informações</h2>
        <p className={classes.text}>
          Usamos as informações que coletamos para fornecer e melhorar nossos
          serviços, nos comunicar com você sobre sua conta e personalizar sua
          experiência em nosso site. Também podemos usar suas informações para
          enviar a você e-mails promocionais e boletins informativos, mas você
          pode optar por sair dessas comunicações a qualquer momento.
        </p>
        <p className={classes.text}>
          Poderemos compartilhar suas informações com nossos parceiros
          confiáveis e provedores de serviços que nos ajudam a fornecer nossos
          serviços, mas não vendemos nem alugamos suas informações pessoais para
          terceiros.
        </p>
        <h2 className={classes.text}>Como protegemos suas informações</h2>
        <p className={classes.text}>
          Levamos a segurança de suas informações a sério e usamos medidas
          padrão do setor para protegê-las contra acesso, divulgação e
          destruição não autorizados. No entanto, nenhum método de transmissão
          pela internet ou armazenamento eletrônico é 100% seguro e não podemos
          garantir a segurança absoluta de suas informações.
        </p>
        <h2 className={classes.text}>
          Alterações a esta Política de Privacidade
        </h2>
        <p className={classes.text}>
          Poderemos atualizar esta política de privacidade de tempos em tempos e
          notificaremos você sobre quaisquer alterações, publicando a nova
          política em nosso site. Recomendamos que você revise esta política
          periodicamente para se manter informado sobre nossas práticas.
        </p>
        <h2 className={classes.text}>Entre em Contato</h2>
        <p className={classes.text}>
          Se você tiver alguma dúvida ou preocupação sobre nossa política de
          privacidade, entre em contato conosco por meio de nossa página de
          contato. Estamos comprometidos em resolver quaisquer problemas
          prontamente e de forma transparente.
        </p>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
