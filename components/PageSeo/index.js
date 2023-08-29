/* eslint-disable complexity */
import React from "react";
import { NextSeo } from "next-seo";

const PageSeo = (seoProps) => {
  const { title, description, pageUrl } = seoProps.seoProps;

  const seo = {
    title: title || "Omnesbet || Software de Arbitragem",
    description:
      description ||
      "Melhor software para arbitragem de apostas esportivas. Ganhe dinheiro sem risco com o software Omnesbet.",
    canonical: pageUrl || "",
    openGraph: {
      type: "website",
      title: title || "Omnesbet || Software de Arbitragem",
      description:
        description ||
        "Melhor software para arbitragem de apostas esportivas. Ganhe dinheiro sem risco com o software Omnesbet.",
      url: pageUrl || "",
    },
    twitter: "https://twitter.com/Omnesbet",
  };

  return <NextSeo {...seo} />;
};

export default PageSeo;
