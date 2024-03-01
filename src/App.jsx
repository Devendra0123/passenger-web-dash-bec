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

import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import LoadingPage from "./components/LoadingPage";
import { db } from "./firebase/setup";
import { collection, doc, onSnapshot, query } from "firebase/firestore";

import "react-toastify/dist/ReactToastify.css";

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

  const { isAuthenticated, isLoading, firebaseReferenceID } = useAuthContext();

  const [data, setData] = useState();
  const [notificationData, setNotificationData] = useState();
  const [notificationCount, setNotificationCount] = useState();
  const [profileDataStatus, setProfileDataStatus] = useState({
    pending: true,
    error: "",
  });
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      navigate("/login");
    }
  }, [isAuthenticated, isLoading]);

  // Get Profile Data
  function getProfileData(referenceID) {
    try {
      const docRef = doc(db, "passengers", referenceID, "data", "profile");
      onSnapshot(docRef, (doc) => {
        setData(doc.data());
        setProfileDataStatus({ pending: false, error: "" });
      });

    } catch (error) {
      setProfileDataStatus({ pending: false, error: error.message });
    }
  }

  // Get Notification
  function getPassengerNotificationData() {
    try {
      const q = query(
        collection(
          db,
          "passengers",
          "8WcIlyU3ILZeqTpklPSfQKJNKoX2-42",
          "notifications"
        )
      );

      onSnapshot(q, (querySnapshot) => {
        const notifications = [];
        querySnapshot.forEach((doc) => {
          notifications.push(doc.data());
        });
        setNotificationData(notifications);
        setNotificationCount(notifications.length);
      });
    } catch (error) {
      console.error("Error fetching document:", error);
    }
  }

  useEffect(() => {
    if (firebaseReferenceID && isAuthenticated)
      getProfileData(firebaseReferenceID);
    // getPassengerNotificationData();
  }, [firebaseReferenceID, isAuthenticated]);

  if (isLoading) {
    return <LoadingPage />;
  }

  console.log(firebaseReferenceID, isAuthenticated);
  return (
    <Elements stripe={stripePromise}>
      <div className="w-full min-h-[100vh] flex justify-center">
        <WindowScrollTop />

        <div className="w-width_sm md:w-width_md lg:w-width_lg xl:w-width_xl min-h-[85vh] grid grid-cols-7 gap-[20px] mt-[30px]">
          <div className="col-span-2 h-full">
            <Sidebar />
          </div>
          <div className="col-span-5 h-full">
            <Header
              data={data}
              notificationCount={notificationCount}
              pending={profileDataStatus?.pending}
            />
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
                <Route
                  path="/notification"
                  element={<Notice data={notificationData} />}
                />
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
