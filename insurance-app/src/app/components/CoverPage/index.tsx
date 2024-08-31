import img1 from "./assets/Insurance Car (1).svg"
import img2 from "./assets/Insurance Car (2).svg"
import img3 from "./assets/Insurance Car (3).svg"
import img4 from "./assets/Insurance Car.svg"
import img_n3 from "./assets/pngegg (1).png"
import Image from "next/image"

const CoverPage = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-10">
        <div className="flex justify-center items-center mb-4">
          <div className="h-12 w-12  bg-[#ffffff] rounded-full text-center">
            
          </div>
          <div className="h-12 w-12  bg-[#fffff] rounded-full text-center">
            
          </div>
          <div className="h-12 w-12  bg-[#D9D9D9] rounded-full text-center">
            2
          </div>
        </div>
        <div className="text-center">
          <h2 className="font-bold text-[#170F49] mb-4">Select your Cover</h2>
          <p className="text-[#6F6C90] text-sm text-center">
            Please fill the form below to receive a quote for your project. Feel
            free to add as much detail as needed..
          </p>
          <div className="flex flex-col items-center ">
  <div className="flex gap-[2px] mt-4 ">
    <div className="rounded-full bg-[#41DDB2] px-4 py-2">
      MU, 2 St François Xavier St, Port Louis 11611, Mauritius
    </div>
    <div className="rounded-full bg-white text-[#0C7BC4] border border-slate-700 px-4 py-2">
      2 St François Xavier Balisson, Mauritius
    </div>
  </div>
  <div className="flex gap-2 mt-10 ">
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />Yes, I’m Owner
    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />No, I’m Tenant
  </div>
</div>
<div className="flex flex-col items-center p-4 mt-10">
  <div className="flex items-center space-x-2">
    <label  className="text-gray-700 text-sm font-bold flex-shrink-0">
    Sum Insured <span className="text-red-500">*</span>
    </label>
    <input
      type="number"
      id="number-input"
      className="border-b border-gray-300 focus:border-blue-500 outline-none px-3 py-2 w-full text-sm font-bold placeholder-blue-500"
      placeholder="Enter a number"
      required
    />
  </div> 
</div>

<div className="flex gap-2 items-center ml-24 justify-between">
 <Image src={img1} alt="" width={270} height={149} className="h-32 w-auto object-cover" ></Image>
 <Image src={img2} alt="" width={270} height={149} className="h-32 w-auto object-cover" ></Image>
 <Image src={img3} alt="" width={270} height={149} className="h-32 w-auto object-cover" ></Image>
 <Image src={img4} alt="" width={270} height={149} className="h-32 w-auto object-cover" ></Image>
</div>
<button className="bg-[#283671] text-white font-bold py-2 px-4 rounded-full items-center mt-20  ml-20">
  Continue
</button>
<div className="md:px-12 p-4 border-spacing-16 max-w-screen-2xl mx-auto mt-12">
  <div className="bg-gradient-to-r from-[#35B6B4] to-[#283671] rounded-xl w-[1002px] h-[149px]">
    <div className="flex flex-col md:flex-row items-center gap-10 h-full">
       {/* Banner Image */}
       <div className="flex-grow flex items-center justify-end">
        <Image src={img_n3} alt="" width={100} height={100} className="w-auto h-auto object-cover" />
      </div>
      {/* Banner Content */}
      <div className="md:w-3/5 flex-shrink-0">
        <h1 className="md:text-2xl text-4xl font-bold text-[#FFFFFF] mb-2">
          Fill the Building Details Here
        </h1>
        <p className="md:text-xs text-[#D9D9D9]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>

     

      {/* CTA Button */}
      <div className="w-[212px] h-[58px] bg-[#E5DD18] rounded-[25px] flex items-center justify-center m-6">
        <button className="text-[22px] font-semibold text-[#000000]">
          Continue...
        </button>
      </div>
    </div>
  </div>
</div>





</div>


        </div>
     
    </>
  );
};

export default CoverPage;
