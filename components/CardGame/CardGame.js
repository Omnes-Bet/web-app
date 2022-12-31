import React from "react";
import { Box, Card, CardActions, Typography } from "@mui/material";

const CardGame = ({ type = "primary", cardInfos }) => {
  const stylesRoot = {
    background: cardInfos?.img ? `url(${cardInfos.img})` : "green",
    boxShadow: "10px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    height: "430px",
    cursor: "pointer",
  };

  const stylesTitle = {
    textTransform: "uppercase",
    color: "white",
    fontWeight: "bold",
    zIndex: 2,
  };

  const stylesText = {
    color: "white",
    zIndex: 2,
  };

  const stylesOverlay = {
    position: "absolute",
    width: "100%",
    height: "30%",
    zIndex: 1,
    bottom: 0,
  };

  return (
    <Box>
      <Card style={stylesRoot}>
        <Box style={stylesOverlay} />
        <CardActions disableSpacing>
          <Box display={"flex"} flexDirection="column" p={2} mt={40}>
            <Typography variant="h5" style={stylesTitle}>
              {cardInfos?.name}
            </Typography>
            <Typography variant="caption" style={stylesText}>
              {cardInfos?.text}
            </Typography>
          </Box>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardGame;
