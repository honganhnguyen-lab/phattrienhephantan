import React, { useState } from "react";
import {
  Grid,
  Card,
  CardContent,
  MenuItem,
  InputLabel,
  Select,
  Button,
  CardHeader,
  FormControl,
  ListItemText,
  MenuList,
  TextField
} from "@mui/material";
import { useDispatch } from "react-redux";
import { regisAdd, loadRegis } from "../../../redux/action";
import { Formik, Form } from "formik";

//Data
const initialValues = {
  occupation: "",
  credits : '',
};

const options = [
  {id:1, label: "AB10-An toàn thông tin", value: "AB10", credits: 2 },
  {id:2, label: "IT20-ProjectII", value: "IT20", credits: 3 },
  {id:3, label: "IT30-ProjectIII", value: "IT30", credits: 3 },
  {id:4, label: "GT10-Giải tích I", value: "GT10", credits: 4 },
  {id:5, label: "GT20-Giải tích II", value: "GT20", credits: 3 },
  {id:6, label: "GT21-Giải tích II", value: "GT21", credits: 2 },
  {id:7, label: "GT270-Giải tích II", value: "GT270", credits: 2 },
  {id:8, label: "GT80-Giải tích II", value: "GT80", credits: 2 },
];

const InfoTeach = () => {
  let dispatch = useDispatch();
  const onSubmit = (values) => {
    const setValues = options.find(v=>v.value === values.occupation);
    values.credits = setValues.credits;
    dispatch(regisAdd(values));
    dispatch(loadRegis());
    
  };

  
  

  return (
    <Grid container justifyContent="center" spacing={1}>
      <Grid item md={10}>
        <Card
          // justifyContent="center"
          // alignItems="center"
          // textAlign="center"
          sx={{ borderBlockColor: "red" }}
        >
          <CardHeader
            title="REGISTER FORM"
            sx={{ color: "white", bgcolor: "#9e1010" }}
          ></CardHeader>
          <Formik onSubmit={onSubmit} initialValues={initialValues}>
            {({ dirty, isValid, values, handleChange, handleBlur }) => {
              return (
                <Form>
                  <CardContent>
                    <Grid item container spacing={1} justifyContent="center">
                      <Grid item xs={12} sm={6} md={12}>
                        <FormControl fullWidth variant="outlined">
                          <InputLabel id="demo-simple-select-outlined-label">
                            Subject
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            label="Subject"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.occupation}
                            name="occupation"
                          >
                            <MenuItem>None</MenuItem>
                            {options.map((item) => (
                              
                              <MenuItem key={item.value} value={item.value}>
                                {item.label}
                                
                              </MenuItem>
                             
                              
                              
                            ))}
                          </Select>
                          
                        </FormControl>
                        <Button
                          disabled={!dirty || !isValid}
                          variant="contained"
                          color="error"
                          type="Submit"
                          sx={{ marginTop: 2 }}
                        >
                          REGISTER
                        </Button>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Form>
              );
            }}
          </Formik>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InfoTeach;
