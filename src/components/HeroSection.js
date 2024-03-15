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
          width: "80%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          padding: "35px 5% 0 5% ",
        }}>
        <DotBackground>
          <img
            src={TulaLogo}
            alt="Tula Logo"
            style={{ width: "60px", height: "60px" }}
          />
        </DotBackground>
        <Box
          sx={{
            display: "flex",
            ml: "10%",
            gap: "5%", // Adds space between Typography components
            alignItems: "center",
            position: "relative", // Added position relative for absolute positioning of images
          }}
          color="white">
          <Typography variant="body1">INQUIRE</Typography>
          <Typography variant="body1">APPLY</Typography>
          <Typography variant="body1">SUPPORT US</Typography>
          <Divider orientation="vertical" flexItem />
          <Typography variant="body1">ANOTHER OPTION</Typography>
          <Typography variant="body1">LAST OPTION</Typography>
        </Box>
        <Box display="flex" ml="10%">
          <DotBackground height="40px" width="40px" />
          <DotBackground height="70px" width="70px" color="#60BAB1">
            <img src={Menu} alt="Menu" />
          </DotBackground>
        </Box>
      </Box>
      {/* First image section */}
      {/* //need to replace the text yo italics and adjust the position */}
    
      <Box sx={{position: "relative"}}>
      
        <img
          width="1000px"
          height="600px"
          src={Text}
          alt="LetsDoIt"
        style={{position:"relative"}}
        />
        <img src={Shooting}  style={{ height:"150px", position: "absolute", top: "30px", left: "0px", zIndex: 2 }} alt="Imagees"/>
   
    <img src={Horse} style={{ position: "absolute",height:"250px", top: "100px", left: "700px", zIndex: 2 }} alt="images" />
    <img src={Workout} style={{ 
      height:"250px", position: "absolute", top: "330px", left: "20px", zIndex: 2 }} alt="images" />
    <img src={Karate} style={{ height:"270px", position: "absolute", top: "370px", left: "680px", zIndex: 2 }}  alt="Image4"  />
        
          
      </Box>
      {/* Second image section */}
    
      <Box sx={{position: "relative",my:"100px"}}>
      
        <img
          width="600px"
          height="600px"
          src={italicText}
          alt="LetsDoIt"
        style={{position:"relative"}}
        />
        <img src={Shooting}  style={{ height:"150px", position: "absolute", top: "30px", left: "0px", zIndex: 2 }} alt="Imagees"/>
   
    <img src={Horse} style={{ position: "absolute",height:"250px", top: "100px", left: "700px", zIndex: 2 }} alt="images" />
    <img src={Workout} style={{ 
      height:"250px", position: "absolute", top: "330px", left: "20px", zIndex: 2 }} alt="images" />
    <img src={Karate} style={{ height:"270px", position: "absolute", top: "370px", left: "680px", zIndex: 2 }}  alt="Image4"  />
        
          
      </Box>
      {/* Third tect area */}
      <Box height="auto" width="65%" mb="150px" display="flex" flexDirection="column" color="white">
      <img width="550px" style={{marginRight:"700px"}} src={italicText} alt="text"/>
      <Typography ml="300px" mt="20px">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages</Typography>
      <Typography ml="500px" mt="20px">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. </Typography>
      </Box>
      
    {/* </Box> */}
    </>
    {/* Fourth section -- Form */}
    <Box>
        <img style={{height:"400px", width:"100%"}} src={FormBg} alt="formBg"/>
        <img src={FormFooter} alt="formFooter"/>
      </Box>
      </Box>
  );
};

export default HeroSection;
