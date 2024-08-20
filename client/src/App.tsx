import { Route, Routes } from "react-router-dom"
import { ContextProvider } from "./context/ContextProvider";
import { Authenticate, Home, SignIn, NotFound, Register, SignUp } from "./pages";
import { Layout, Modal, ProtectedRoutes } from "./components";
import LandingPage from "./pages/LandingPage";

// Route constants
const ROUTES = {
  LANDINGPAGE: '/',
  HOME: '/home',
  LOGIN: '/signin',
  SIGNUP: '/signup',
  AUTHENTICATE: '/authenticate',
  REGISTER: '/register'
};

function App() {

  return (
    <ContextProvider>
      <div className="relative">
        <Routes>
          <Route path={ROUTES.LANDINGPAGE} element={<LandingPage/>}/>
          <Route path={ROUTES.LOGIN} element={<SignIn/>}/>
          <Route path={ROUTES.SIGNUP} element={<SignUp/>}/> 
          <Route path={ROUTES.AUTHENTICATE} element={<Authenticate/>}/>
          <Route element={<ProtectedRoutes/>}>
            <Route path={ROUTES.REGISTER} element={<Register/>}/>
            <Route element={<Layout/>}>
              <Route path={ROUTES.HOME} element={<Home/>}/>
            </Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Modal/>
      </div>
    </ContextProvider>
  )
}

export default App