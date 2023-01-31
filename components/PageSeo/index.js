/* eslint-disable complexity */
import React from "react";
import { NextSeo } from "next-seo";

const PageSeo = (seoProps) => {
    const { title, description, pageUrl } = seoProps.seoProps

  const seo = {
    title: title || "Omnesbet || Arbitrage Software",
    description: description || "Best Software for Sports Betting Arbitrage. Earn risk free money with Omnesbet Software.",
    canonical: pageUrl || "https://omnesbet.com",
    openGraph: {
      type: "website",
      title: title || "Omnesbet || Arbitrage Software",
      description: description || "Best Software for Sports Betting Arbitrage. Earn risk free money with Omnesbet Software.",
      url: pageUrl || "https://omnesbet.com"
    },
    twitter: "https://twitter.com/Omnesbet"
  };

  return <NextSeo {...seo} />;
};

export default PageSeo;
