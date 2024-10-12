import { Route, Routes } from "react-router-dom"
import { ContextProvider } from "./context/ContextProvider";
import { Authenticate, Dashboard, SignIn, CompleteRegistration, SignUp } from "./pages";
import { Layout, Modal, ProtectedRoutes } from "./components";
import LandingPage from "./pages/LandingPage";

const ROUTES = {
  LANDINGPAGE: '/',
  DASHBOARD: '/dashboard',
  LOGIN: '/signin',
  SIGNUP: '/signup',
  AUTHENTICATE: '/authenticate',
  COMPLETE_REGISTRATION: '/complete-registration'
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
            <Route path={ROUTES.COMPLETE_REGISTRATION} element={<CompleteRegistration/>}/>
            <Route element={<Layout/>}>
              <Route path={ROUTES.DASHBOARD} element={<Dashboard/>}/>
            </Route>
          </Route>
        </Routes>
        <Modal/>
      </div>
    </ContextProvider>
  )
}

export default App