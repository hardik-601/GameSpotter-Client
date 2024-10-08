import { BrowserRouter } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import GamerInformation from "./components/GamerInformation/GamerInformation";
import Features from "./components/Features/Features";
import GeneralInformation from "./components/Generalinformation/GeneralInformation";
import Faq from "./components/Faq/Faq";
import NewsLetters from "./components/NewsLetters/NewsLetters";
import Footer from "./components/Footer/Footer";


function App() {


  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>
        <GamerInformation/>
        <Features/>
        <GeneralInformation/>
        <Faq/>
        <NewsLetters/>
        <Footer/>
      </div>
    </BrowserRouter>
  )
}

export default App
