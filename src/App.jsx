import "./App.css";

import { useEffect } from "react";

import { Routes, Route, useLocation, redirect, useNavigate } from "react-router-dom";
import {
  Account,
  Faq,
  FaqDetails,
  Home,
  Invoice,
  Login,
  Notice,
  Register,
  ScheduledBooking,
  ServiceDetails,
  ServiceHistory,
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
import Toast from "./components/Element/Toast";
import { useToastContext } from "./Context/ToastContext";

// Scroll to top on page navigation
function WindowScrollTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return null;
}

function App() {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuthContext();
  const { toastMessage } = useToastContext();

  useEffect(() => {
    if (!isAuthenticated) {
    navigate("/login");
    }
  }, [isAuthenticated])

  return (
    <div className="w-full min-h-[100vh] flex justify-center">
      <WindowScrollTop />
      <Toast message={toastMessage} />
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

              {/* Authentication route */}
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
