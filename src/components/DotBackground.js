import { Box } from "@mui/material";
import React from "react";

const DotBackground = ({ height, width, color , children}) => {
  return (
    <Box
      sx={{
        background: color || "white", // Default color is white
        height: height || "70px", // Default height is 70px
        width: width || "70px", // Default width is 70px
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
          {children}
      </Box>
  );
};

export default DotBackground;
