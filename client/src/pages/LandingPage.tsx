import { Link } from "react-router-dom";
import { AuthNavbar } from "../components";

export default function LandingPage() {
  return (
    <div>
        <AuthNavbar>
            <div className="flex items-center justify-between gap-4">
                <Link to={'/signin'}>
                    <button className=" mt-auto px-2 w-fit py-1 text[#19303d] font-medium hover:text-[#0fe5c0] hover:font-medium transition duration-300 ease-in-out flex items-center justify-center">
                        Sign In
                    </button>
                </Link>
                <Link to={'/signup'}>
                    <button className=" mt-auto px-6 py-2 bg-[#19303d] text-white font-normal rounded-md shadow-sm hover:bg-[#0fe5c0] transition duration-300 ease-in-out flex items-center justify-center">
                        Sign Up
                    </button>
                </Link>
            </div>
        </AuthNavbar>
        <section className="mx-36 my-8">
            <div className="text-center pt-20">
                <h1 className="text-5xl font-medium text-[#19303d] my-4 leading-tight">Busy work happens everywhere, but productive work happens in one shared Cloud</h1>
                <p className="text-xl font-light text-[#19303d] mx-6 leading-snug mt-6">Centralize all your docs, files, to-dos, discussions, and folders in the same shared space where everyone can access them. You don't have to download and share everything, every day!</p>
            </div>
        </section>
        <section className="my-8 mx-20 border-8 border-[#1e3542] rounded-lg bg-[#1e3542]">
            <img src="/home.png" alt="hero image" width={'100%'} className="rounded-lg"/>
        </section>
        <footer className="mt-auto w-full border-t border-[#dbe2e6] px-6 py-2 text-center">
            &copy; 2024 My Cloud. All Rights Reserved.
        </footer>
    </div>
  )
}