import AdmissionForm from "./components/AdmissionForm";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import VideoPlay from "./components/VideoPlay";
// import "./index"
// import "App"

function App() {
  return (
    <div className="App">
      <HeroSection/>
      <AdmissionForm/>
      <VideoPlay/>

      <Footer/>
    </div>
  );
}

export default App;
