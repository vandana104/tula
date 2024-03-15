import React from "react";
import FooterImg from "../assets/images/footer.svg";
import FAQ from "../assets/images/faqs.svg";
import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      {" "}
      <img style={{objectFit:"contain", }} src={FAQ} alt="footer" />
      <img src={FooterImg} alt="footer" />
    </Box>
  );
};

export default Footer;
