import Image from "next/image"

import RightImg from "./assets/Right Image.png"
import LeftImg from "./assets/Left Image.png"
import frame2 from "./assets/Frame 24.png"
import line2 from "./assets/Line 267.png"

const ContentPage = () => {
  return (
    <>
    <div>
        <div className="grid pl-24 grid-cols-6 grid-flow-row-dense gap-5">
            <Image src={LeftImg} alt="" width={270} height={149} className="col-span-2 row-span-2 h-full object-cover"></Image>
            <div className="col-span-2 auto-row-max">
            <div className="flex justify-center items-center">
  <div className="h-12 w-12 bg-[#65BF73] text-center rounded-full">
    1
  </div>
</div>

                <h2 className="font-bold text-center text-[#170F49] mt-6">Select your Location</h2>
                <p className="text-[#6F6C90] text-center text-sm">Please fill the form below to receive a quote for your project. Feel free to add as much detail as needed.</p>
                
      
<form className="max-w-sm mx-auto mt-16">
  <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Search your location here</label>
  <select id="countries" className="bg-[#FFFFFF] shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option selected>Choose a country</option>
    <option value="US">United States</option>
    <option value="CA">Canada</option>
    <option value="FR">France</option>
    <option value="DE">Germany</option>
  </select>
  
</form>

<div className="flex justify-center items-center mt-40">
  <button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full">
    Continue
  </button>
</div>


                <div></div>
            </div>
            <Image src={RightImg} alt="" width={270} height={149} className="col-span-2 h-full object-cover"></Image>
            
           
            
        </div>
    </div>
    <div className="flex items-center justify-center ml-20">
  <Image src={line2} alt="" width={6} height={1} className="object-cover" />
</div>

    </>
  )
}

export default ContentPage