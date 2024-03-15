// import React from 'react'
// import { Box } from '@mui/material'
// import FormBg from "../assets/images/formBg.svg";

// import FormFooter from "../assets/images/formFooter.svg";

// const AdmissionForm = () => {
//   return (
//     <div>
//          {/* Fourth section -- Form */}
//       {/* not done */}
//       <Box display="flex" flexDirection="column">
//         <img
//           style={{ width: "100%", objectFit: "contain", cursor: "pointer" }}
//           src={FormBg}
//           alt="formBg"
//         />
//         <img
//           style={{ objectFit: "contain", cursor: "pointer" }}
//           src={FormFooter}
//           alt="formFooter"
//         />
//       </Box>
//     </div>
//   )
// }

// export default AdmissionForm

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

import FormBg from "../assets/images/formBg.svg";

const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    state: "",
    city: "",
    cladd: "",
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
    <Container maxWidth="md">
      <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            backgroundImage: `url(${FormBg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            minHeight: "60vh",
          }}
          onSubmit={handleSubmit}>
          <Typography variant="h4" sx={{ mb: 3, textAlign: "center" }}>
            Admission Form
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
                <InputLabel>Select Cladd</InputLabel>
                <Select
                  name="cladd"
                  value={formData.cladd}
                  onChange={handleChange}>
                  <MenuItem value="cladd1">Cladd 1</MenuItem>
                  <MenuItem value="cladd2">Cladd 2</MenuItem>
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
        style={{ objectFit: "contain", cursor: "pointer" }}
        src={FormFooter}
        alt="formFooter"
      /> */}
    </Container>
  );
};

export default AdmissionForm;
