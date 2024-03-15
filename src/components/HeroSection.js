import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import TulaLogo from "../assets/logos/tulaLogo.svg";
import Menu from "../assets/logos/menu.svg";
import italicText from "../assets/images/italicText.svg";
import Shooting from "../assets/images/shooting.svg";
import Horse from "../assets/images/horse.svg";
import Workout from "../assets/images/workout.svg";
import Karate from "../assets/images/karate.svg";

import Swim from "../assets/images/swim.svg";
import Dancer from "../assets/images/dancer.svg";
import Yoga from "../assets/images/yoga.svg";
import DotBackground from "./DotBackground";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "#b90124",
        // width: "100%",
        minHeight: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      <>
        {/* Navbar */}
        <Box
          sx={{
            width: "85%",
            height: "80px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            pt: "35px",
          }}>
          <DotBackground>
            <img
              src={TulaLogo}
              alt="Tula Logo"
              style={{ width: "60px", height: "60px", cursor: "pointer" }}
            />
          </DotBackground>
          <Box
            sx={{
              display: "flex",
              width: "50%",
              ml: "20%",
              gap: "5%", 
              alignItems: "center",
              position: "relative", 
            }}
            color="white">
            <Typography variant="body2" style={{ cursor: "pointer" }}>INQUIRE</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>APPLY</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>SUPPORT US</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" style={{ cursor: "pointer" }}>ADMISSIONS</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>EVENTS</Typography>
          </Box>
          <Box gap="20px" display="flex" ml="10%" alignItems="center">
            <DotBackground height="40px" width="40px" mr="10px" style={{ cursor: "pointer" }} />
            <DotBackground height="70px" width="70px" color="#60BAB1" style={{ cursor: "pointer" }}>
              <img src={Menu} alt="Menu" />
            </DotBackground>
          </Box>
        </Box>

        {/* First image section */}
        
        <Box sx={{ position: "relative", display: "flex", flexDirection: "column", alignItems: "center" }}>
  <img
    width="600px"
    height="600px"
    src={italicText}
    alt="LetsDoIt"
    style={{ position: "relative", cursor: "pointer" }}
  />
  <img
    src={Shooting}
    style={{
      height: "15%",
      position: "absolute",
      top: "28%",
      left: "-33%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="Imagees"
  />

  <img
    src={Horse}
    style={{
      position: "absolute",
      height: "25%",
      top: "16%",
      left: "117%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="images"
  />
  <img
    src={Workout}
    style={{
      height: "25%",
      position: "absolute",
      top: "62%",
      left: "-48%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="images"
  />
  <img
    src={Karate}
    style={{
      height: "27%",
      position: "absolute",
      top: "62%",
      left: "112%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="Image4"
  />
</Box>
{/* Second image section */}

<Box sx={{ position: "relative", my: "100px", display: "flex", flexDirection: "column", alignItems: "center" }}>
  <img
    width="600px"
    height="600px"
    src={italicText}
    alt="LetsDoIt"
    style={{ position: "relative", cursor: "pointer" }}
  />
  <img
    src={Swim}
    style={{
      height: "15%",
      position: "absolute",
      top: "45%",
      left: "-33%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="Imagees"
  />

  <img
    src={Yoga}
    style={{
      position: "absolute",
      height: "23%",
      top: "16%",
      left: "117%",
      zIndex: 2,
      borderRadius: "50%",
      cursor: "pointer"
    }}
    alt="images"
  />
  <img
    src={Workout}
    style={{
      height: "18%",
      position: "absolute",
      top: "71%",
      left: "-17%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="images"
  />
  <img
    src={Dancer}
    style={{
      height: "24%",
      position: "absolute",
      top: "62%",
      left: "97%",
      zIndex: 2,
      cursor: "pointer"
    }}
    alt="Image4"
  />
</Box>

        {/* Third tect area */}
        {/* need to add a line in between texts */}
        <Box
          height="auto"
          width="65%"
          mb="150px"
          display="flex"
          flexDirection="column"
          color="white">
          <img
            width="550px"
            style={{ marginRight: "700px", cursor: "pointer" }}
            src={italicText}
            alt="text"
          />
          <Typography ml="300px" mt="20px">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </Typography>
          <Typography ml="500px" mt="20px">
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. It has survived not only
            five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.{" "}
          </Typography>
        </Box>

      </>
    
      {/* Fith-section
      <Box display="flex" flexDirection="column" position="relative">
      <img src={Men} alt="men" style={{ position: 'absolute', top: 0, left: 0 }} />
      <img src={Women} alt="women" style={{ position: 'absolute', top: 0, left: 0 }} />
    </Box> */}

      {/* sixth section */}
      <Box></Box>
      <Box></Box>
    </Box>
  );
};

export default HeroSection;
