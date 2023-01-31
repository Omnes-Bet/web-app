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
    <>
      <PageSeo seoProps={pageSeoProps} />
      <SignInCard />
    </>
  );
};

export default LogIn;
