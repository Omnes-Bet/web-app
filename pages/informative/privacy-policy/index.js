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
        <h1 className={classes.title}>Privacy Policy</h1>
        <p className={classes.text}>
          At our surebet software, we value your privacy and are committed to
          protecting your personal information. This privacy policy outlines our
          practices for collecting, using, and sharing your information when you
          use our website and services. By accessing or using our website, you
          agree to the terms of this privacy policy.
        </p>
        <h2 className={classes.text}>Information We Collect</h2>
        <p className={classes.text}>
          We collect information that you provide to us when you register for
          our services, or contact us for support.
          This information may include your name, email address, payment
          information, and other personal details.
        </p>
        <p className={classes.text}>
          We may also collect information about your use of our website and
          services, including your IP address, browser type, and device
          information. This information may be collected through the use of
          cookies, web beacons, and other tracking technologies.
        </p>
        <h2 className={classes.text}>How We Use Your Information</h2>
        <p className={classes.text}>
          We use the information we collect to provide and improve our services,
          communicate with you about your account, and personalize your
          experience on our website. We may also use your information to send
          you promotional emails and newsletters, but you can opt out of these
          communications at any time.
        </p>
        <p className={classes.text}>
          We may share your information with our trusted partners and service
          providers who assist us in providing our services, but we do not sell
          or rent your personal information to third parties.
        </p>
        <h2 className={classes.text}>How We Protect Your Information</h2>
        <p className={classes.text}>
          We take the security of your information seriously and use
          industry-standard measures to protect it from unauthorized access,
          disclosure, and destruction. However, no method of transmission over
          the internet or electronic storage is 100% secure, and we cannot
          guarantee the absolute security of your information.
        </p>
        <h2 className={classes.text}>Changes to This Privacy Policy</h2>
        <p className={classes.text}>
          We may update this privacy policy from time to time, and we will
          notify you of any changes by posting the new policy on our website. We
          encourage you to review this policy periodically to stay informed
          about our practices.
        </p>
        <h2 className={classes.text}>Contact Us</h2>
        <p className={classes.text}>
          If you have any questions or concerns about our privacy policy, please
          contact us on our contact page. We are committed to resolving any
          issues promptly and transparently.
        </p>
      </div>
    </div>
  );
}
export default PrivacyPolicy;
