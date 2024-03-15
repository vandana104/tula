import React from 'react'

import { Box } from '@mui/material'
import FormBg from "../assets/images/formBg.svg";
import FormFooter from "../assets/images/formFooter.svg";

const AdmissionForm = () => {
  return (
    <div>
         {/* Fourth section -- Form */}
      {/* not done */}
      <Box display="flex" flexDirection="column">
        <img
          style={{ width: "100%", objectFit: "contain", cursor: "pointer" }}
          src={FormBg}
          alt="formBg"
        />
        <img
          style={{ objectFit: "contain", cursor: "pointer" }}
          src={FormFooter}
          alt="formFooter"
        />
      </Box>
    </div>
  )
}

export default AdmissionForm
