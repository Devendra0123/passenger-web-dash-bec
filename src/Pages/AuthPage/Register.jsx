import React, { useEffect, useRef, useState, useTransition } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import RegisterViaEmail from "../../components/Auth/RegisterViaEmailForm";
import { IoChevronBackOutline } from "react-icons/io5";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/setup";
import { useToastContext } from "../../Context/ToastContext";
import RegisterViaPhoneForm from "../../components/Auth/RegisterViaPhoneForm";
import AddCardFields from "../../components/Auth/AddCardFields";

const Register = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const scrollableContainerRef = useRef(null);

  const { setShowToast, setToastMessage } = useToastContext();
  const registerVia = searchParams.get("registerVia");
  const step = searchParams.get("step");

  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [registerViaQuery, setRegisterViaQuery] = useState("");
  const [showAddCardFields, setShowAddCardFields] = useState(false);

  const [registerStatus, setRegisterStatus] = useState({
    pending: false
  })
  useEffect(() => {
    if (registerVia) {
      setRegisterViaQuery(registerVia);
    }
  }, [registerVia]);

  useEffect(() => {
    if (step == "add-card-details") {
      setShowAddCardFields(true);
    }
  }, [step]);

  useEffect(() => {
    if (step === "add-card-details" && scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  }, [step]);


  // Handle firebase User Register
  const handleFirebaseRegister = async (formData) => {
    const { email, password } = formData;
    setAuthErrorMessage("");
    setRegisterStatus({
      pending: true
    });
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          setRegisterStatus({
            pending: false
          });
          setAuthErrorMessage("");
          setShowToast(true);
          setToastMessage("User registered successfully.");
          navigate(`/register?registerVia=email&step=add-card-details`);
          // navigate("/login?loginWith=email");
        })
        .catch((error) => {
          setRegisterStatus({
            pending: false
          });
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          setAuthErrorMessage(errorMessage);
          // ..
        });
  };

  return (
    <div className="fixed top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] w-full min-h-[100vh] flex flex-col items-center">
      <div className="w-full h-screen flex flex-col items-center justify-center p-[20px]">
        <div className="w-[80%] h-[600px] grid grid-cols-3 shadow-md rounded-lg overflow-hidden ">
          <div className="z-10 col-span-1 h-[600px] bg-slate-200 flex flex-col items-center justify-center p-[20px]">
            <div className="flex flex-col items-center gap-[10px]">
              <img
                src="/asset/logo/BEC_ICON.png"
                alt="logo"
                className="w-[70px] object-contain"
              />
              <h2 className="text-[25px] font-[600]">
                British <span className="text-primary">Express</span> Cars
              </h2>
              <p className="text-center mt-[20px]">
                Offering the best reliable and safest transfer service
              </p>
            </div>
          </div>
          <div ref={scrollableContainerRef} className="relative col-span-2 h-full overflow-y-auto bg-smoke/75 flex flex-col items-center gap-[20px]">
            <div className="z-10 sticky top-[0px] w-full flex items-center justify-between p-[20px]">
              <div
                onClick={() => {
                  navigate("/login");
                }}
                className={`cursor-pointer flex items-center gap-[5px] bg-[#1BCD73] text-white px-[20px] py-[8px] rounded-[25px]`}
              >
                <IoChevronBackOutline />
                <p>Go Back</p>
              </div>
            </div>

            {/* Register form through Email*/}
            {!showAddCardFields && registerViaQuery == "email" && (
              <div className="w-full">
                <div
                  className={`pl-[50px] mt-[0px] flex flex-col min-w-full h-max p-[20px] pb-[30px]`}
                >
                  <h2 className="text-[25px] text-start font-semibold">
                    Register Account
                  </h2>
                  <p className="mt-[20px] text-[14px]">
                    Fill the details to register your account
                  </p>
                  <RegisterViaEmail
                    handleRegisterFormSubmit={(formData) => {
                      handleFirebaseRegister(formData);
                    }}
                    isPending={registerStatus.pending}
                    errorMessage={authErrorMessage}
                  />
                </div>
              </div>
            )}

            {/* Register via phone */}
            {!showAddCardFields && registerViaQuery == "phone" && (
              <div className="w-full">
                <div
                  className={`pl-[50px] mt-[0px] flex flex-col min-w-full h-max p-[20px] pb-[30px]`}
                >
                  <h2 className="text-[25px] text-start font-semibold">
                    Register Account
                  </h2>
                  <p className="mt-[20px] text-[14px]">
                    Fill the details to register your account
                  </p>
                  <RegisterViaPhoneForm
                    handleRegisterFormSubmit={(e) => {
                      e.preventDefault();
                      navigate(
                        `/register?registerVia=phone&step=add-card-details`
                      );
                      // setIsAuthenticated(true);
                      // navigate("/");
                    }}
                  />
                </div>
              </div>
            )}

            {showAddCardFields && (
              <div className="w-full min-h-full overflow-y-auto">
                <div
                  className={`pl-[50px] mt-[0px] flex flex-col min-w-full h-max p-[20px] pb-[30px]`}
                >
                  <h2 className="text-[25px] text-start font-semibold">
                    Add Card Details
                  </h2>
                  <AddCardFields />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
