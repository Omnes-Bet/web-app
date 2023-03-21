import React, { useState, useEffect, useContext } from "react";
import SignInCard from "../../components/SignInCard/SignInCard";
import PageSeo from "../../components/PageSeo";
import { AuthContext } from "../../contexts/authContext";
import Router from "next/router";

const LogIn = () => {
  const [pageUrl, setPageUrl] = useState();
  const { user } = useContext(AuthContext);

  if (user) {
    Router.push("/");
  }

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Entrar",
    description: "Entre no melhor software de arbitragem",
    pageUrl: pageUrl,
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
        height: "600px",
        borderRadius: "20px",
        paddingTop: "150px",
      }}
    >
      <PageSeo seoProps={pageSeoProps} />
      <SignInCard />
    </div>
  );
};

export default LogIn;
