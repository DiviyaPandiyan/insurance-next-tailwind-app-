import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Heropage";
import ContentPage from "./components/Content/index"
import CoverPage from "./components/CoverPage/index"
import FormsPage from "./components/DetailsPage/index"
import CustomurInfo from "./components/CustomerInfo";
import UploadDocs from "./components/UploadDocs";
import Footer from "./components/Footer/index"

export default function Home() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <ContentPage/>
    <CoverPage/>
    <FormsPage />
    <CustomurInfo/>
    <UploadDocs/>
    <Footer/>
    </>
    

  );

}
