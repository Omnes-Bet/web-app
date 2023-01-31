import React, { useState, useEffect } from "react";
import PageSeo from "../../components/PageSeo";
import ContactForm from "../../components/ContactForm/Contactform";

const Contact = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Contact Us",
    description:
      "Reach out to our team with your needs. We are looking forward to it.",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <ContactForm />
    </>
  );
};

export default Contact;
