import "./App.css";

import { useEffect } from "react";

import { Routes, Route, useLocation, redirect } from "react-router-dom";
import {
  Account,
  Faq,
  FaqDetails,
  Home,
  Invoice,
  Notice,
  ScheduledBooking,
  ServiceDetails,
  ServiceHistory,
  SignIn,
  Support,
  SupportDetails,
} from "./Pages";
import { useAuthContext } from "./Context/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Auth from "./components/Auth";
import { useOverlayContext } from "./Context/OverlayContext";
import TermsAndConditions from "./Pages/terms-and-conditions/TermsAndConditions";
import PrivacyAndPolicy from "./Pages/privacy-policy/PrivacyAndPolicy";
import ContactUs from "./Pages/ContactUs";
import PaymentCardList from "./Pages/Payment-card/CardList";

// Scroll to top on page navigation
function WindowScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const location = useLocation();
  const pathname = location.pathname;

  const { isAuthenticated } = useAuthContext();
  const { overlay } = useOverlayContext();

  if (
    !isAuthenticated &&
    (pathname == "/terms-and-conditions" || pathname == "/privacy-policy")
  ) {
    return (
      <Routes>
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
      </Routes>
    );
  } else if (!isAuthenticated) {
    return <Auth />;
  }

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
              <Route path="/account/cards" element={<PaymentCardList />} />
              <Route path="/support" element={<Support />} />
              <Route
                path="/support/support-details"
                element={<SupportDetails />}
              />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route
                path="/terms-and-conditions"
                element={<TermsAndConditions />}
              />
              <Route path="/privacy-policy" element={<PrivacyAndPolicy />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
