import { ReactNode } from "react";
import { Link } from "react-router-dom";


export function AuthNavbar({children}: {children: ReactNode}) {
  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between bg-white border-b border-[#dbe2e6] py-3 px-6">
           <Link to={'/'}>
                <span className="flex items-center">
                    <img src="./Stytch_Logo.png" alt="Stytch logo" height={'30rem'} width={'30rem'}/>
                    <h1 className="text-2xl font-bold text-[#19303d] mb-1 ml-4">My Cloud</h1>
                </span>
           </Link>
            <div className="flex items-center justify-between gap-4">
               {children}
            </div>
        </nav>
  )
}