import Image from "next/image"

import RightImg from "./assets/Right Image.png"
import LeftImg from "./assets/Left Image.png"
const ContentPage = () => {
  return (
    <div>
        <div className="grid grid-cols-6 grid-flow-row-dense gap-5">
            <Image src={LeftImg} alt="" width={270} height={149} className="col-span-2 row-span-2 h-full object-cover"></Image>
            <div className="col-span-2 h-full object-cover">
                <h2>Select your Location</h2>
                <p>Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
            </div>
            <Image src={RightImg} alt="" width={270} height={149} className="col-span-2 h-full object-cover"></Image>
            <div className="col-span-2 row-span-2 object-cover">ki</div>
           
            
        </div>
    </div>
  )
}

export default ContentPage