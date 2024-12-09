import Link from "next/link";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { ImAppleinc } from "react-icons/im";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className=" bg-black">
        {/* Background Image */}
        <div
          className="h-[300px] md:h-[400px] lg:h-[500px] bg-cover bg-center"
          style={{ backgroundImage: "url('/heropic.png')" }}>



          {/* Centered Text */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold">LogIn page</h1>
            <p className="text-sm md:text-base lg:text-lg mt-2 flex items-center gap-2">
              <span className="text-white ">Home</span>
              <IoChevronForwardOutline />
              <span className="text-[#FF9F0D]">LogIn</span>
            </p>
          </div>
        </div>
      </header>

      {/* Signin Form */}
      <section className="py-16">
        <div className="container mx-auto max-w-md bg-white shadow-lg rounded-md p-8">
          <h3 className="text-2xl font-bold mb-6 text-center">Login</h3>
          <form>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Email</label>
              <input
                type="email"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 font-medium">Password</label>
              <input
                type="password"
                className="w-full border rounded px-3 py-2 focus:ring focus:ring-yellow-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2" />
              <span>Remember me?</span>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 rounded"
            >
              Sign In
            </button>
            <p className="text-center mt-4">
              <Link href="/forgot-password" className="text-yellow-500">Forgot password?</Link>
            </p>
          </form>

        </div>
      </section>

    </div>
  );
}