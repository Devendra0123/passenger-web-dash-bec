import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SignIn from "./Pages/SignIn";
import GoogleMap from "./Pages/GoogleMap";

function App() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <div className="w-width_sm md:w-width_md lg:w-width_lg xl:w-width_xl min-h-[85vh] grid grid-cols-7 gap-[30px] mt-[50px]">
        <div className="col-span-2 h-full">
          <Sidebar />
        </div>
        <div className="col-span-5 h-full">
          <Header />
          <div className="mt-[30px] h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sign-in" element={<SignIn />} />
              {/* <Route path="/google-maps" element={<GoogleMap />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
