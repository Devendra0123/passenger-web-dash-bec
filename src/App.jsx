import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Pages/Home";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SignIn from "./Pages/SignIn";
import GoogleMap from "./Pages/GoogleMap";
import ServiceDetails from "./Pages/ServiceDetails";
import ScheduledBooking from "./Pages/scheduled-booking/ScheduledBooking";
import Notice from "./Pages/notice/Notice";
import Invoice from "./Pages/invoices/Invoice";
import ServiceHistory from "./Pages/service-history/ServiceHistory";
import Faq from "./Pages/FAQ/Faq";
import FaqDetails from "./Pages/FAQ-details/FaqDetails";
import Account from "./Pages/account/Account";
import PaymentCard from "./Pages/Payment-card/PaymentCard";
import Support from "./Pages/support/Support";
import { useEffect } from "react";
import SupportDetails from "./Pages/support-details/SupportDetails";

// Scroll to top on page navigation
function WindowScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <WindowScrollTop />
      <div className="w-width_sm md:w-width_md lg:w-width_lg xl:w-width_xl min-h-[85vh] grid grid-cols-7 gap-[20px] mt-[30px]">
        <div className="col-span-2 h-full">
          <Sidebar />
        </div>
        <div className="col-span-5 h-full">
          <Header />
          <div className="mt-[20px] h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/service-details/:slug"
                element={<ServiceDetails />}
              />
              <Route path="/scheduled-booking" element={<ScheduledBooking />} />
              <Route path="/notice" element={<Notice />} />
              <Route path="/invoice" element={<Invoice />} />
              <Route path="/service-history" element={<ServiceHistory />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/faq/faq-details" element={<FaqDetails />} />
              <Route path="/account" element={<Account />} />
              <Route path="/account/cards" element={<PaymentCard />} />
              <Route path="/support" element={<Support />} />
              <Route path="/support/support-details" element={<SupportDetails />} />
              {/* <Route path="/sign-in" element={<SignIn />} /> */}
              {/* <Route path="/google-maps" element={<GoogleMap />} /> */}
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
