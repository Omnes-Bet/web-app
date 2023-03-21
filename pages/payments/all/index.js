import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Plans from "../../../components/Plans/Plans";
import PageSeo from "../../../components/PageSeo";

const AllPlans = () => {
  const [pageUrl, setPageUrl] = useState();

  useEffect(() => {
    setPageUrl(window?.location?.href);
  }, []);

  const pageSeoProps = {
    title: "Omnesbet | Todos os planos",
    description: "Escolha um plano e aproveite os dados",
    pageUrl: pageUrl,
  };

  return (
    <Box
      my={8}
      sx={{
        backgroundImage: "linear-gradient(to right, #060C23 , black, #060C23)",
        borderBottomLeftRadius: "20px",
        borderBottomRightRadius: "20px",
      }}
    >
      <PageSeo seoProps={pageSeoProps} />
      <Plans />
    </Box>
  );
};

export default AllPlans;
