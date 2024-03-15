import { Box, Typography, Divider } from "@mui/material";
import React from "react";
import TulaLogo from "../assets/logos/tulaLogo.svg";
import Menu from "../assets/logos/menu.svg";
import Text from "../assets/images/letsDoItText.svg";
import italicText from "../assets/images/italicText.svg";
import Shooting from "../assets/images/shooting.svg";
import Horse from "../assets/images/horse.svg";
import Workout from "../assets/images/workout.svg";
import Karate from "../assets/images/karate.svg";
import FormBg from "../assets/images/formBg.svg";
import FormFooter from "../assets/images/formFooter.svg";
import Swim from "../assets/images/swim.svg";
import Dancer from "../assets/images/dancer.svg";
import Yoga from "../assets/images/yoga.svg";
import Women from "../assets/images/women.svg";
import Men from "../assets/images/Man.svg";
import DotBackground from "./DotBackground";

const HeroSection = () => {
  return (
    <Box
      sx={{
        background: "#b90124",
        width: "100%",
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
            padding: "35px 5% 0 5%",
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
              gap: "5%", // Adds space between Typography components
              alignItems: "center",
              position: "relative", // Added position relative for absolute positioning of images
            }}
            color="white">
            <Typography variant="body2" style={{ cursor: "pointer" }}>INQUIRE</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>APPLY</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>SUPPORT US</Typography>
            <Divider orientation="vertical" flexItem />
            <Typography variant="body2" style={{ cursor: "pointer" }}>ANOTHER OPTION</Typography>
            <Typography variant="body2" style={{ cursor: "pointer" }}>LAST OPTION</Typography>
          </Box>
          <Box gap="20px" display="flex" ml="10%" alignItems="center">
            <DotBackground height="40px" width="40px" mr="10px" style={{ cursor: "pointer" }} />
            <DotBackground height="70px" width="70px" color="#60BAB1" style={{ cursor: "pointer" }}>
              <img src={Menu} alt="Menu" />
            </DotBackground>
          </Box>
        </Box>

        {/* First image section */}
        {/* //need to replace the text yo italics and adjust the position */}

        <Box sx={{ position: "relative", display: "flex" }}>
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
              height: "150px",
              position: "absolute",
              top: "170px",
              left: "-200px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="Imagees"
          />

          <img
            src={Horse}
            style={{
              position: "absolute",
              height: "250px",
              top: "100px",
              left: "700px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="images"
          />
          <img
            src={Workout}
            style={{
              height: "250px",
              position: "absolute",
              top: "370px",
              left: "-290px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="images"
          />
          <img
            src={Karate}
            style={{
              height: "270px",
              position: "absolute",
              top: "370px",
              left: "680px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="Image4"
          />
        </Box>
        {/* Second image section */}

        <Box sx={{ position: "relative", my: "100px" }}>
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
              height: "150px",
              position: "absolute",
              top: "300px",
              left: "-200px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="Imagees"
          />

          <img
            src={Yoga}
            style={{
              position: "absolute",
              height: "230px",
              top: "100px",
              left: "700px",
              borderRadius:"50%",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="images"
          />
          <img
            src={Workout}
            style={{
              height: "180px",
              position: "absolute",
              top: "430px",
              left: "-100px",
              zIndex: 2,
              cursor: "pointer"
            }}
            alt="images"
          />
          <img
            src={Dancer}
            style={{
              height: "240px",
              position: "absolute",
              top: "370px",
              left: "580px",
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

        {/* </Box> */}
      </>
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
