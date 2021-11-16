import React, { useEffect } from "react";
import {
  Grid,
  Card,
  CardContent,
  Table,
  TableCell,
  TableRow,
  TableHead,
  TableBody,
  CardHeader,
  tableCellClasses,
  Button,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loadRegis, regisDelete } from "../../../redux/action";
import { styled } from "@mui/styles";
import DeleteIcon from "@mui/icons-material/Delete";

//Data
const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "whitesmoke",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const FinalSub = () => {
  let dispatch = useDispatch();
  const { regis } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadRegis());
  }, []);
  const onChangeDelete = (id) => {
    if (window.confirm("Are you confirm to delete the user ?")) {
      dispatch(regisDelete(id));
      dispatch(loadRegis());
    }
  };
  return (
    <Grid container justifycontent="center" spacing={1}>
      <Grid item md={10}>
        <Card
          justifycontent="center"
          alignitems="center"
          textalign="center"
          sx={{ borderBlockColor: "red" }}
        >
          <CardHeader
            title="SCHEDULE REGISTER"
            sx={{ color: "white", bgcolor: "#9e1010" }}
          ></CardHeader>
          <CardContent>
            <Table>
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Mã môn</StyledTableCell>
                  <StyledTableCell align="center">Tín chỉ</StyledTableCell>
                  <StyledTableCell align="right" />
                </TableRow>
              </TableHead>
              <TableBody>
                {regis &&
                  regis.map((regi) => (
                    <TableRow key={regi.id}>
                      <TableCell align="center">{regi.occupation}</TableCell>
                      <TableCell align="center">0</TableCell>
                      <TableCell align="center">
                        <Button onClick={() => onChangeDelete(regi.id)}>
                          <DeleteIcon />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                <TableRow>
                  <TableCell align="center">Tổng tín chỉ</TableCell>
                  <TableCell align="center">0</TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FinalSub;
