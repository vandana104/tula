import AdmissionForm from "./components/AdmissionForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import VideoPlay from "./components/VideoPlay";

function App() {
  return (
    <div className="App">
      <HeroSection/>
      {/* <ActivityPage/> */}
      <AdmissionForm/>
      <VideoPlay/>

      <Footer/>
    </div>
  );
}

export default App;
