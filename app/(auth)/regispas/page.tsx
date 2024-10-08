import { Button } from "@/components/button";
import Image from "next/image";
import Link from "next/link";

export default function Loginpas() {
  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50" id="regispsi">
      {/* Back Button and Logo */}
      <div className="absolute top-0 left-0 m-6 flex items-center space-x-4 z-10">
        <Image src="/images/logo.png" alt="Logo" width={60} height={60} className="mr-2" />
        <Link href="/Role">
          <Button className="bg-transparent text-black font-bold hover:bg-blue-100 rounded-3xl text-sm flex items-center">
            <Image src="/icons/arrow-down.png" alt="Back arrow" width={24} height={24} className="mr-2" />
            Back
          </Button>
        </Link>
      </div>

      {/* Form and Image Container */}
      <div className="flex flex-col lg:flex-row items-stretch w-full lg:max-w-7xl p-6 md:p-10 lg:px-24 mx-auto min-h-screen mt-20 lg:mt-0 h-[600px]">
        {/* Form Section */}
        <div className="justify-center w-full lg:w-1/2 flex flex-col space-y-4 lg:space-y-6 bg-white shadow-lg rounded-lg p-6 md:p-8 lg:p-10 h-full flex-grow">
          <h1 className="text-2xl lg:text-3xl font-semibold text-center">Create new account</h1>
          <p className="text-center mb-4">
          Already have an account? <a href="/loginpas" className="text-[#E11C1C]">Login!</a>
          </p>
          <form className="space-y-4">
          <div>
              <label htmlFor="name" className="block text-sm font-semibold">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          
            
              <div className="w-full mt-4 lg:mt-0">
                <label htmlFor="phone" className="block text-sm font-semibold">Phone Number</label>
                <input
                  type="number"
                  id="phone"
                  placeholder="Enter your Phone Number"
                  className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                  pattern="[0-9]*"
                />
              </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your Email"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your Password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div>
              <label htmlFor="confirm-password" className="block text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                id="confirm-password"
                placeholder="Confirm Password"
                className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Right-Aligned Register Button */}
            <div className="flex justify-end">
              <button type="submit" className="w-[200px] bg-[#E8F0FE] text-[#4C82CB] py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
                Register
              </button>
            </div>
          </form>
        </div>

        {/* Illustration Section in a Column */}
        <div className="hidden lg:flex lg:w-1/2 flex-col justify-center items-center bg-[#B6CBE5] px-5 md:px-10 lg:px-20 rounded-lg h-full flex-grow">
          <Image src="/images/Group 80.png" alt="Illustration 1" width={300} height={300} className="max-w-full h-auto mb-4" />
          <Image src="/images/Group 81.png" alt="Illustration 2" width={300} height={300} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
