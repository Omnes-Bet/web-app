import React, { useState, useEffect } from "react";
import SignUpCard from "../../components/SignUpCard/SignUpCard";
import PageSeo from "../../components/PageSeo";

const Register = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Sign Up",
    description: "Sign up for the best Arbitrage Software",
    pageUrl: pageUrl,
  };

  return (
    <>
      <PageSeo seoProps={pageSeoProps} />
      <SignUpCard />
    </>
  );
};

export default Register;
