import Img_car1 from "./assets/Img_car1.png";
import Image from "next/image";
import { Lato } from "next/font/google";
import Divider from "./assets/Divider.png"

const lato = Lato({ subsets: ["latin"], weight: ["400", "700"] });
const Hero = () => {
  console.log(Img_car1);
  return (
    <>
      <div className="md:px-12 p-4 border-spacing-16 max-w-screen-2xl mx-auto mt-12">
        <div className="bg-pink-my rounded-xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            {/*banner cont*/}
            <div className="md:w-3/5">
              <h1 className="md:text-2xl text-4xl font-bold ml-4 md:justify-between" >
                Home Insurance Full Quote Journey
              </h1>
              <p className="md:text-xs text-gray-my ml-4 ">
                Embarking on your motor full quote journey: Navigating the road
                to comprehensive coverage
              </p>
            </div>
            {/*bnner img*/}
            <div
            // className="bg-right"
            // style={{ backgroundImage: `url(${Img_car1.src})` }}
            >
              <Image src={Img_car1} alt="" width={270} height={149}></Image>
            </div>
          </div>
        </div>
        <div className="ml-64 mt-6 md:mr-64 sm:mr-64 ">
        <Image src={Divider} alt="" width={700} ></Image>
        </div>
      </div>
    </>
  );
};

export default Hero;
