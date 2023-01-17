import React, { useState } from "react";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useMediaQuery,
  Modal,
  Typography,
  TextField
} from "@mui/material";
import { Box, Container } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const SurebetTable = ({ arbsData }) => {
  const [betValue, setBetValue] = useState("100")
  const isMobile = useMediaQuery('(min-width:600px)');
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  const HowMuchToBet = (money, event) => {
    const eventToNormalizeCalc = event
    const eventOdds = eventToNormalizeCalc?.map(i => ((money / i.odds) / 100).toFixed(2).replace('.', ''))
    let sum = 0;
    for (let i = 0; i < eventOdds.length; i++){
        sum = sum + parseInt(eventOdds[i])
    }
    const toAddOnSurebet = parseInt((money - sum) / eventOdds.length)

    for(let i = 0; i < eventToNormalizeCalc.length; i++){
      eventToNormalizeCalc[i].odds = parseInt(eventOdds[i]) + parseInt(toAddOnSurebet)
    }

    return eventToNormalizeCalc;
  }


  return (
    <Paper className="container">
      <Container>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{
          paddingTop: "6rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "300px",
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography>{arbsData[0]?.event}</Typography>
          <Typography variant="h6">How much you want to bet?</Typography>
          <TextField
            required
            id="outlined-required"
            label="Bet Value"
            value={betValue}
            onChange={(e) => setBetValue(e.target.value)}
          />
          
          <Button variant="contained" onClick={() => HowMuchToBet(betValue * 100, arbsData)}>Calculate Bet</Button>
          <Button variant="contained" onClick={handleClose}>Close</Button>
        </Box>
        
      </Modal>
        <Box>
          <TableContainer>
            <Table aria-label="customized table">
              <TableHead sx={{ borderRadius: "20px" }}>
                <TableRow>
                  <TableCell>Lucro</TableCell>
                  <TableCell align="right">Casa de Aposta</TableCell>
                  <TableCell align="right">Evento</TableCell>
                  <TableCell align="right">Mercado</TableCell>
                  <TableCell align="right">Chance</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {arbsData.map((row) => (
                  <TableRow key={row.profit}>
                    <TableCell component="th" scope="row">
                      1.00%
                    </TableCell>
                    <TableCell align="right">{row.bookmaker}</TableCell>
                    <TableCell align="right">{row.event}</TableCell>
                    <TableCell align="right">{row.result}</TableCell>
                    <TableCell align="right">{row.odds}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Container>
      <Box sx={{ display: "flex", justifyContent: "flex-end", alignItems: "center", padding: "10px 25px", justifyContent: isMobile ? "flex-end" : "center" }}>
        <Button variant="contained" onClick={handleOpen}>Calculate Bet</Button>
      </Box>
      
    </Paper>
  );
};

export default SurebetTable;
