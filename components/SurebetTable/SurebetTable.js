import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Box, Container } from "@mui/system";

const rows = [
  {profit: "1,00%", bookmaker: "Pinnacle", event: "Argentina - Croacia", betType: "H1(−1) - escanteios", odds: 1.909},
  {profit: "1,00%", bookmaker: "Leo Vegas", event: "Argentina - Croacia", betType: "2(0:2) - escanteios", odds: 1.92},
  {profit: "1,00%", bookmaker: "Inter​wetten", event: "Argentina - Croacia", betType: "H2(+0.5) - escanteios", odds: 2.40}
];

const SurebetTable = ({ arbsData }) => {
  console.log('batata', arbsData)
  return (
    <Paper className="container">
    <Container>
      <Box>
      <TableContainer>
        <Table
          aria-label="customized table"
        >
          <TableHead sx={{ borderRadius: '20px'}}>
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
                <TableCell component="th" scope="row">1.00%</TableCell>
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
      </Paper>
  );
};

export default SurebetTable;
