import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Grid,
  Container,
  Stack,
  Paper,
  FormControlLabel,
  Checkbox,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import FormFooter from "../assets/images/formFooter.svg";

import FormBg from "../assets/images/formBg.svg";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    class: "",
    agree: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <Container
        maxWidth="100%"
        sx={{
          height: "70vh",
          backgroundImage: `url(${FormBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
        }}>
        <Paper
          elevation={3}
          sx={{
            p: 4,
            borderRadius: 4,
            width: "80%",
            height: "370px",
            mt: "60px",
            backgroundColor: "#edf7f6", 
            color: "black", 
          }}>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexDirection: "column",

              minHeight: "60vh",
            }}
            onSubmit={handleSubmit}>
            <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
              Admission Form 2024
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Email Address"
                  name="email"
                  type="email"

                  value={formData.email}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Mobile Number"
                  name="mobile"
                  type="tel"
                  value={formData.mobile}
                  onChange={handleChange}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Select State</InputLabel>
                  <Select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}>
                    <MenuItem value="state1">State 1</MenuItem>
                    <MenuItem value="state2">State 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Select City</InputLabel>
                  <Select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}>
                    <MenuItem value="city1">City 1</MenuItem>
                    <MenuItem value="city2">City 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl fullWidth required>
                  <InputLabel>Select class</InputLabel>
                  <Select
                    name="class"
                    value={formData.class}
                    onChange={handleChange}>
                    <MenuItem value="class1">class 1</MenuItem>
                    <MenuItem value="class2">class 2</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox
                      checked={formData.agree}
                      onChange={handleChange}
                      name="agree"
                    />
                  }
                  label="I agree to receive information regarding my submitted enquiry"
                />
              </Grid>
              <Grid item xs={12}>
                <Stack direction="row" spacing={2} justifyContent="center">
                  <Button variant="contained" type="submit">
                    Enquire Now
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </Box>
        </Paper>
        {/* <img
       
        src={FormFooter}
        alt="formFooter"
      /> */}
      </Container>
      <img
        style={{ objectFit: "contain", cursor: "pointer", width: "100%" }}
        src={FormFooter}
        alt="footer"
      />
    </>
  );
};

export default AdmissionForm;
