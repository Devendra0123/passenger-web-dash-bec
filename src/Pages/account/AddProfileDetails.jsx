import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { useAuthContext } from "../../Context/AuthContext";
import {
  getProfileStatus,
  loginPassenger,
  registerPassenger,
} from "../../query/AuthQuery";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import StepWiseAuthenticationTab from "../../components/Tab/StepWiseAuthenticationTab";
import { navigateBasedOnStatus } from "../../utils/navigateBasedOnStatus";

const AddProfileDetails = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [searchParams] = useSearchParams();
  const { authToken, setFirebaseReferenceID, setIsAuthenticated } = useAuthContext();

  const loginType = searchParams.get("login-type");

  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [file, setFile] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
  });

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);
      setUploadedImageUrl(imageUrl);
    }
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle Add profile details
  const handleAddProfileDetails = async () => {
    setErrorMessage("");
    if (!formData?.first_name | !formData.last_name) return;
    const userCredential = {
      ...formData,
      mobile: enteredPhoneNumber,
      profile_image: file,
    };

    try {
      setIsPending(true);
      const apiResponse = await registerPassenger(userCredential, authToken);
      const {title,message,data} = apiResponse;
      if(title == "ValidationError"){
        setErrorMessage(message);
        setIsPending(false);
        return;
      }
      const status = await getProfileStatus(authToken);

      const { profile_status, firebase_reference } = status.data;
      setFirebaseReferenceID(firebase_reference);
      setIsPending(false);

      if (profile_status == "completed") {
        setIsAuthenticated(true);
      }
      
      navigateBasedOnStatus(profile_status, loginType, navigate);

    } catch (error) {
      setIsPending(false);
      const errorCode = error.code || "unknown";
      const errorMessage = error.message || "An error occurred";
      setErrorMessage(errorMessage);
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 w-screen h-screen flex flex-col items-center justify-center p-[20px]">
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

        <div className="col-span-2 h-full overflow-y-auto bg-smoke/75 flex flex-col items-center gap-[20px] p-[20px]">
          <StepWiseAuthenticationTab activeTab="new" />
          <h2 className="w-full text-start font-semibold text-[25px] mt-[50px] ">
            Add Profile Details
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddProfileDetails();
            }}
            className="w-full h-max flex flex-col gap-[15px]"
          >
            {/* Profile image upload */}
            <div className="relative">
              {file && uploadedImageUrl ? (
                <div className="w-[80px] h-[80px] relative ">
                  <div
                    onClick={() => {
                      setFile();
                      setUploadedImageUrl(null);
                    }}
                    className="z-10 cursor-pointer absolute top-[-0px] right-[-0px] w-[25px] h-[25px] bg-light_gray rounded-full border border-slate-800 flex items-center justify-center "
                  >
                    <RxCross2 className="text-[15px] font-bold" />
                  </div>
                  <img
                    src={uploadedImageUrl}
                    alt="UploadedImage"
                    className="w-full h-full rounded-full border object-cover"
                  />
                </div>
              ) : (
                <div className="w-max h-full flex items-center justify-center gap-[10px] cursor-pointer bg-light_gray px-[20px] py-[8px] rounded-[13px] border ">
                  <FaCloudUploadAlt className="text-[35px]" />
                  <label htmlFor="upload-image" className=" ">
                    <p>Upload profile image</p>
                  </label>
                  <input
                    ref={fileInputRef}
                    id="upload-image"
                    type="file"
                    accept=".pdf,image/jpeg,image/png,image/jpg"
                    placeholder="upload file"
                    onChange={handleFileChange}
                    className="custom-file-input"
                  />
                </div>
              )}
            </div>
            <div className="w-full grid grid-cols-2 gap-[20px]">
              <div className="flex flex-col gap-[5px]">
                <label>First Name:</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleOnChange}
                  className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
                />
              </div>
              <div className="flex flex-col gap-[5px]">
                <label>Last Name:</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleOnChange}
                  className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
                />
              </div>
            </div>
            {loginType != "mobile" && (
              <div className="flex flex-col gap-[5px]">
                <label>Phone Number:</label>
                <PhoneInput
                  defaultCountry="gb"
                  value={enteredPhoneNumber}
                  onChange={(phone) => setEnteredPhoneNumber(phone)}
                  className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
                  inputStyle={{
                    border: "none",
                    background: "transparent"
                  }}
                />
              </div>
            )}

            {loginType != "email" && (
              <div className="flex flex-col gap-[5px]">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleOnChange}
                  className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
                />
              </div>
            )}

            {errorMessage && (
              <p className="text-primary text-[15px] font-[500]">
                {errorMessage}
              </p>
            )}
            <button
              type="submit"
              disabled={isPending}
              className="mt-[20px] w-full px-[20px] py-[10px] bg-blue-500 text-white "
            >
              {isPending ? (
                <span className="flex items-center gap-[3px] justify-center ">
                  <svg
                    className="animate-spin h-5 w-5 mr-3 ..."
                    fill="#fff"
                    viewBox="0 0 24 24"
                  >
                    <path d="M0 11c.511-6.158 5.685-11 12-11s11.489 4.842 12 11h-2.009c-.506-5.046-4.793-9-9.991-9s-9.485 3.954-9.991 9h-2.009zm21.991 2c-.506 5.046-4.793 9-9.991 9s-9.485-3.954-9.991-9h-2.009c.511 6.158 5.685 11 12 11s11.489-4.842 12-11h-2.009z" />
                  </svg>
                  Processing...
                </span>
              ) : (
                "Submit"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProfileDetails;
