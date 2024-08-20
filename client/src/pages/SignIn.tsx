import { StytchB2B, useStytchMemberSession } from "@stytch/react/b2b";
import { AuthFlowType, B2BProducts, StytchB2BUIConfig } from "@stytch/vanilla-js";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { AuthNavbar } from "../components";

export const SignIn = () => {
  const { session, fromCache } = useStytchMemberSession();
  const navigate = useNavigate();

  useEffect(() => {
    if (session && fromCache) {
      navigate("/");
    }
  }, [fromCache, session, navigate]);

  const config: StytchB2BUIConfig = {
      products: [B2BProducts.emailMagicLinks],
      emailMagicLinksOptions: {
        discoveryRedirectURL: `${window.location.origin}/authenticate`
      },
      sessionOptions: { sessionDurationMinutes: 60 },
      authFlowType: AuthFlowType.Discovery,
  };

  const style = {
    hideHeaderText: true
  };
  
    return (
    <div>
        <AuthNavbar>
          <Link to={'/signup'}>
            <button className=" mt-auto px-6 py-2 bg-[#19303d] text-white font-normal rounded-md shadow-sm hover:bg-[#0fe5c0] transition duration-300 ease-in-out flex items-center justify-between">
                Sign Up
            </button>
          </Link>
        </AuthNavbar>
        <div className="flex items-center justify-center h-screen">
            <div>
              <h2 className="text-center text-3xl font-bold text-[#19303d] mb-6">Sign In</h2>
              <StytchB2B config={config} styles={style} />
            </div>
        </div>
        <footer className="mt-auto w-full border-t border-[#dbe2e6] px-6 py-2 text-center">
            &copy; 2024 My Cloud. All Rights Reserved.
        </footer>
    </div>
    );
};