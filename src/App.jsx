import "./App.css";

import { useEffect, useState } from "react";

import {
  Routes,
  Route,
  useLocation,
  redirect,
  useNavigate,
} from "react-router-dom";
import {
  Account,
  AddCardDetails,
  AddProfileDetails,
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
import TermsAndConditions from "./Pages/terms-and-conditions/TermsAndConditions";
import PrivacyAndPolicy from "./Pages/privacy-policy/PrivacyAndPolicy";
import ContactUs from "./Pages/ContactUs";
import PaymentCardList from "./Pages/Payment-card/CardList";
import Toast from "./components/Element/Toast";
import { useToastContext } from "./Context/ToastContext";

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import LoadingPage from "./components/LoadingPage";
import {
  getPassengerNotificationData,
  getPassengerProfileData,
} from "./query/FirestoreQuery";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

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

  const { isAuthenticated, authToken, isLoading } = useAuthContext();
  const { toastMessage } = useToastContext();

  const [data, setData] = useState();
  const [notificationData, setNotificationData] = useState();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading]);

  useEffect(() => {
    // Get profile data
    getPassengerProfileData().then((res) => {
      setData(res);
    });

    // Get notification data
    getPassengerNotificationData().then((res) => {
      setNotificationData(res);
    });
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <Elements stripe={stripePromise}>
      <div className="w-full min-h-[100vh] flex justify-center">
        <WindowScrollTop />
        <Toast message={toastMessage} />
        <div className="w-width_sm md:w-width_md lg:w-width_lg xl:w-width_xl min-h-[85vh] grid grid-cols-7 gap-[20px] mt-[30px]">
          <div className="col-span-2 h-full">
            <Sidebar />
          </div>
          <div className="col-span-5 h-full">
            <Header data={data} />
            <div className="mt-[20px] h-full">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/service-details/:slug"
                  element={<ServiceDetails />}
                />
                <Route
                  path="/scheduled-booking"
                  element={<ScheduledBooking />}
                />
                <Route path="/notice" element={<Notice />} />
                <Route path="/invoice" element={<Invoice />} />
                <Route path="/service-history" element={<ServiceHistory />} />
                <Route path="/faq" element={<Faq />} />
                <Route path="/faq/faq-details" element={<FaqDetails />} />
                <Route path="/account" element={<Account data={data} />} />
                <Route path="/account/cards" element={<PaymentCardList />} />
                <Route
                  path="/account/add-profile-details"
                  element={<AddProfileDetails />}
                />
                <Route
                  path="/account/add-card-details"
                  element={<AddCardDetails />}
                />
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
    </Elements>
  );
}

export default App;
