// pages/forms.js
import Image from "next/image";
import img_n3 from "./assets/Frame 225.png";
import line from "./assets/Line 270.png";
import house from "./assets/house.png";
const FormsPage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center ">
        <div className="max-w-4xl w-full bg-white">
          <Image
            src={img_n3}
            alt=""
            width={100}
            height={100}
            className="w-auto h-auto object-cover ml-16"
          />

          <h1 className="text-3xl font-bold mb-6 text-center">Form Page</h1>
          <h1 className="md:text-2xl text-4xl font-bold ml-4 text-[#170F49] md:justify-between">
            Building Details
          </h1>
          <p className="md:text-xs text-[#6F6C90] ml-4 mt-4 mb-2 mr-3">
            Please fill the form below to receive a quote for your project.
            <br />
            Feel free to add as much detail as needed.
          </p>
          <Image src={line} alt="" width={445} className="mt-4 mb-4"></Image>
          <div className="flex items-center">
            <Image
              src={house}
              alt=""
              width={87.5}
              height={70}
              className="w-auto h-auto object-cover ml-16"
            />
            <h2 className="text-[#0C7BC4] ml-4">Premium Details</h2>
          </div>

          <div className="flex flex-col md:flex-row gap-8 ">
            {/* First Form */}
            <div className="flex-1 bg-[#F6FFFE]  p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold mb-4 grid grid-cols-1 divide-y"/>
  
              <form>
              <div className="flex gap-64">
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-gray-700"
                  >
                    Content - Location 1
                  </label>
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-gray-700"
                  >
                    $240
                  </label>
                </div>
                <div className="flex gap-64">
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-gray-700"
                  >
                    Content - Location 1
                  </label>
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-gray-700"
                  >
                    $240
                  </label>
                </div>
                <div className="flex gap-80">
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-[#4F4F4F]"
                  >
                    Taxes
                  </label>
                 
                </div>
                <div className="flex gap-80">
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-[#4F4F4F]"
                  >
                    Discount
                  </label>
                  <label
                    htmlFor="email1"
                    className="text-sm font-medium text-gray-700"
                  >
                    $0
                  </label>
                  
                </div>
              </form>
            </div>

            {/* Second Form */}
            <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-4">Form 2</h2>
              <form>
                <div className="mb-4">
                  <label
                    htmlFor="name2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name2"
                    name="name2"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="phone2"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone2"
                    name="phone2"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                    placeholder="Enter your phone number"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Submit Form 2
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormsPage;
