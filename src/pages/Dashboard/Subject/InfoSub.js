import React, { useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
  TableHead,
  TableRow,
  Stack,
  Button,
  IconButton,
  Typography,
  Collapse,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { loadSubjects } from "../../../redux/action";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const InfoSub = () => {
  let dispatch = useDispatch();
  const { subjects } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(loadSubjects());
  }, []);

  const [open, setOpen] = React.useState(false);
  const onOpenButton = (id) => {
    setOpen(!open);
    console.log(id);
  };

  return (
    <Stack direction="row" spacing={2}>
      <TableContainer sx={{ paddingLeft: "10px" }}>
        <Table
          stickyHeader
          aria-label="sticky table"
          border={1}
          style={{
            borderWidth: "2px",
            borderColor: "#aaaaaa",
            borderStyle: "solid",
          }}
        >
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Mã môn</StyledTableCell>
              <StyledTableCell align="center">Tên môn</StyledTableCell>
              <StyledTableCell align="center">Số tín chỉ</StyledTableCell>
              <StyledTableCell align="center">Thời gian học</StyledTableCell>
            </TableRow>
          </TableHead>
          {subjects &&
            subjects.map((subject) => (
              <TableBody sx={{ maxHeight: "300px" }} key={subject.id}>
                <TableRow>
                  <TableCell>
                    <Button onClick={() => onOpenButton(subject.id)}>
                      <KeyboardArrowUpIcon />
                    </Button>
                  </TableCell>
                  <TableCell component="th" scope="row" align="center">
                    {subject.id}
                  </TableCell>
                  <TableCell align="center">{subject.subject}</TableCell>
                  <TableCell align="center">{subject.credit}</TableCell>
                  <TableCell align="center">{subject.timing}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell
                    style={{ paddingBottom: 0, paddingTop: 0 }}
                    colSpan={6}
                  >
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <Box sx={{ margin: 1 }}>
                        <Typography variant="h6" gutterBottom component="div">
                          Thông tin thầy cô
                        </Typography>
                        <Table size="small" aria-label="purchases">
                          <TableHead>
                            <TableRow>
                              <TableCell>Tên giảng viên</TableCell>
                              <TableCell>Bộ môn</TableCell>
                              <TableCell align="right">Amount</TableCell>
                            </TableRow>
                          </TableHead>
                          <TableBody>
                            <TableRow>
                              <TableCell component="th" scope="row">
                                {subject.teacher}
                              </TableCell>
                              <TableCell>{subject.faculty}</TableCell>
                              <TableCell align="right">HI</TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </TableBody>
            ))}
        </Table>
      </TableContainer>
    </Stack>
  );
};

export default InfoSub;
