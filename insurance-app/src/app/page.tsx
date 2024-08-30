import Image from "next/image";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/Heropage";
import ContentPage from "./components/Content/index"
import CoverPage from "./components/CoverPage/index"
export default function Home() {
  return(
    <>
    <Navbar/>
    <Hero/>
    <ContentPage/>
    <CoverPage/>
    </>
    

  );

}
