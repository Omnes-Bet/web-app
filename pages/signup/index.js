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
    <div style={{ backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)", height: "650px", borderRadius: "20px", paddingTop: "100px" }}>
      <PageSeo seoProps={pageSeoProps} />
      <SignUpCard />
    </div>
  );
};

export default Register;
