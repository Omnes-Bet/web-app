import React, { useState, useEffect } from "react";
import SignInCard from "../../components/SignInCard/SignInCard";
import PageSeo from "../../components/PageSeo";

const LogIn = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Sign In",
    description: "Sign In for the Best Arbitrage Software",
    pageUrl: pageUrl,
  };

  return (
    <div style={{ backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)", height: "600px", borderRadius: "20px", paddingTop: "150px" }}>
      <PageSeo seoProps={pageSeoProps} />
      <SignInCard />
    </ div>
  );
};

export default LogIn;
