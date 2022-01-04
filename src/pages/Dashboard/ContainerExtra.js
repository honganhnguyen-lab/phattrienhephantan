import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import {
  Grid,
  Stack,
  Card,
  CardContent,
  IconButton,
  Alert,
  Typography,
  CssBaseline,
  Box,
  Container,
  Snackbar,
  Toolbar,
  Button,
} from "@mui/material";

import FavoriteIcon from "@mui/icons-material/Favorite";

import { ThemeProvider } from "@mui/private-theming";
import DashboardContent from "./Dashboard";
import DialogOpen from "./Extra/index";
import { makeStyles } from "@mui/styles";

import axios from "axios";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const useStyles = makeStyles(() => ({
  StyledBackground: {
    position: "absolute",
    zIndex: -1,
    width: "90%",
    left: "6%",
    top: "3%",
    borderRadius: "5%",
  },
}));

const ContainerExtra = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [state, setState] = React.useState(false);
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setState(false);
  };
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const GetShow = (id) => {
    axios.get(`http://localhost:5001/extra/${id}`).then((resp) => {
      setData(resp.data);
    });
  };
  useEffect(GetShow, []);

  return (
    <ThemeProvider>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <DashboardContent />
        <Box
          component="main"
          sx={{
            backgroundcolor: (theme) =>
              theme.palette.mode === "light"
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            positionn: "relative",
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  spacing={3}
                >
                  <Box sx={{ position: "relative" }}>
                    <Stack
                      direction="column"
                      spacing={1}
                      justifyContent="center"
                      sx={{
                        position: "absolute",
                        width: "88%",
                        left: "6%",
                        top: "25%",
                      }}
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => GetShow(1)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Chuyên mục học từ sự kiện số tháng 11
                            <br />
                            23:59 02/12/21
                          </Typography>
                        </Stack>
                      </Button>
                      <Button
                        variant="contained"
                        color="error"
                        onClick={() => GetShow(2)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Hội thảo hướng nghiệp, giới thiệu việc làm
                            <br />
                            17:00 06/01/22
                          </Typography>
                        </Stack>
                      </Button>
                      <Button
                        variant="contained"
                        color="warning"
                        onClick={() => GetShow(3)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Kiểm tra quy chế kì 20211 cho sinh viên K66
                            <br />
                            00:00 22/01/22
                          </Typography>
                        </Stack>
                      </Button>
                      <Button
                        variant="contained"
                        color="success"
                        onClick={() => GetShow(4)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Tham gia hiến máu nhân đạo kì 20211 ĐHBKHN
                            <br />
                            23:59 30/01/22
                          </Typography>
                        </Stack>
                      </Button>
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => GetShow(5)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Giải chạy 1000 bước chân vì sức khỏe mỗi ngày lần
                            thứ hai
                            <br />
                            23:59 30/01/22
                          </Typography>
                        </Stack>
                      </Button>
                      <Button
                        variant="contained"
                        color="info"
                        onClick={() => GetShow(6)}
                      >
                        <Stack
                          direction="row"
                          spacing={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <FavoriteIcon />
                          <Typography variant="caption">
                            {" "}
                            Chuyên mục học từ lịch sử số tháng 1
                            <br />
                            23:59 02/02/22
                          </Typography>
                        </Stack>
                      </Button>
                    </Stack>
                    <img
                      src="/static/extra/background.png"
                      className={classes.StyledBackground}
                    />
                    <img src="/static/extra/iphoneframe.png" alt="" />
                  </Box>
                  {data && (
                    <Box
                      // border={color}
                      sx={{ minWidth: 275, boxShadow: `5px 5px 5px 5px  ` }}
                    >
                      <Card variant="contained">
                        <CardContent>
                          <Typography
                            sx={{ fontSize: 16 }}
                            color={data.color}
                            gutterBottom
                          >
                            Công tác sinh viên
                          </Typography>

                          <Typography variant="h5" component="div">
                            {data.name}
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {data.deadline}
                          </Typography>
                        </CardContent>

                        <CardContent sx={{ textAlign: "left" }}>
                          <Typography variant="body2">
                            Thời gian : {data.when}
                            <br />
                            Địa điểm : {data.where}
                            <br />
                            Thuộc tổ chức : {data.what}
                            <br />
                            Hạn nộp MC : {data.deadline}
                          </Typography>
                          <Typography variant="body2" color="red">
                            Tiêu chí ứng với hoạt động
                          </Typography>
                          <Typography variant="body2">
                            <b>Thông tin chi tiết:</b>
                            <br />
                            1. Đối tượng tham gia : {data.people}
                            <br />
                            2. Thời gian tham gia : {data.time}
                            <br />
                            3. Cách thức tham gia :
                            <br />- {data.how}
                            <br />
                            {data.morehow}
                            <br />
                            4. Cách thức phê duyệt
                            <br />- {data.accept}
                          </Typography>
                        </CardContent>

                        <Button
                          variant="contained"
                          onClick={() => setOpen(true)}
                          sx={{
                            backgroundColor: data.color,
                            marginBottom: "10px",
                          }}
                        >
                          Nộp minh chứng
                        </Button>
                        <DialogOpen
                          open={open}
                          setState={setState}
                          setOpen={setOpen}
                          status={data.status}
                        ></DialogOpen>
                        <Snackbar
                          open={state}
                          autoHideDuration={1000}
                          onClose={handleClose}
                        >
                          <Alert
                            severity="success"
                            sx={{ width: "100%" }}
                            onClose={handleClose}
                          >
                            Gửi ảnh lên thành công,BTC sẽ duyệt và trả kết quả
                            cho bạn
                          </Alert>
                        </Snackbar>
                      </Card>
                    </Box>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default ContainerExtra;
