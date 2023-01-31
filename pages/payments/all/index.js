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
    title: "Omnesbet | All Plans",
    description: "Choose a plan and enjoy the data",
    pageUrl: pageUrl,
  };

  return (
    <Box my={8}>
      <PageSeo seoProps={pageSeoProps} />
      <Plans />
    </Box>
  );
};

export default AllPlans;
