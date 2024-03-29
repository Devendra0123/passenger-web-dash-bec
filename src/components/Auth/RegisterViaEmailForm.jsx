import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/setup";
import { useAuthContext } from "../../Context/AuthContext";
import {
  getProfileStatus,
  loginPassenger,
  postSession,
  registerPassenger,
} from "../../query/AuthQuery";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useNavigate } from "react-router";
import { navigateBasedOnStatus } from "../../utils/navigateBasedOnStatus";

const RegisterViaEmail = () => {
  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const { setIsAuthenticated, setAuthToken, setUid, setFirebaseReferenceID } =
    useAuthContext();

  const [file, setFile] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [authErrorMessage, setAuthErrorMessage] = useState("");
  const [registerStatus, setRegisterStatus] = useState({
    pending: false,
  });
  const [enteredPhoneNumber, setEnteredPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    mobile: "",
  });
  // const {first_name,last_name, profile_image, mobile } = passengerInfo;
  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);
      setUploadedImageUrl(imageUrl);
    }
  }

  // Handle on change
  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // Handle firebase User Register
  const handleFirebaseRegister = async () => {
    const { email, password, first_name, last_name } = formData;

    setAuthErrorMessage("");
    setRegisterStatus({
      pending: true,
    });
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      const user = userCredential.user;

      const credential = {
        uid: user.uid,
        email,
      };

      const res = await loginPassenger(credential);

      const { auth_token } = res.data;

      setUid(user.uid);
      setAuthToken(auth_token);
      localStorage.setItem("auth_Token", auth_token);

      const passengerInfo = {
        first_name,
        last_name,
        mobile: enteredPhoneNumber,
        profile_image: file,
      };

      await registerPassenger(passengerInfo, auth_token).then(async (res) => {
        // Session post
        await postSession(credential, auth_token);
        // Get Profile Status
        const status = await getProfileStatus(auth_token);
        const { profile_status, firebase_reference } = status.data;

        setFirebaseReferenceID(firebase_reference);
        if (profile_status == "completed") {
          setIsAuthenticated(true);
        }
        navigateBasedOnStatus(profile_status, navigate);
      });

      navigate(`/account/add-card-details`);

      setRegisterStatus({
        pending: false,
      });
    } catch (error) {
      setRegisterStatus({
        pending: false,
      });
      const errorCode = error.code;
      const errorMessage = error.message;

      setAuthErrorMessage(errorMessage);
    }
  };

  return (
    <div className="w-[75%] mt-[20px] pb-[100px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleFirebaseRegister();
        }}
        className="flex flex-col gap-[15px]"
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
          <div className="col-span-1 flex flex-col gap-[5px]">
            <label>First Name:</label>
            <input
              type="text"
              name="first_name"
              required
              value={formData.first_name}
              onChange={handleOnChange}
              className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
            />
          </div>

          <div className="col-span-1 flex flex-col gap-[5px]">
            <label>Last Name:</label>
            <input
              type="text"
              name="last_name"
              required
              value={formData.last_name}
              onChange={handleOnChange}
              className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px]">
          <label>Enter your phone number:</label>
          <PhoneInput
            defaultCountry="gb"
            value={enteredPhoneNumber}
            onChange={(phone) => setEnteredPhoneNumber(phone)}
            className="w-full mt-[5px] rounded-[4px] bg-light_gray"
            inputStyle={{
              border: "none",
              background: "#E2E2E2",
            }}
          />
        </div>

        <div className="flex flex-col gap-[5px]">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleOnChange}
            className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
          />
        </div>

        <div className="flex flex-col gap-[5px]">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={formData.password}
            onChange={handleOnChange}
            className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
          />
        </div>
        {authErrorMessage && (
          <p className="text-primary text-[15px] font-[500]">
            {authErrorMessage}
          </p>
        )}
        <button
          type="submit"
          disabled={registerStatus.pending}
          className={`mt-[20px] w-full px-[20px] py-[10px] ${
            registerStatus.pending ? "bg-blue-500/50" : "bg-blue-500"
          } text-white `}
        >
          {registerStatus.pending ? (
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
  );
};

export default RegisterViaEmail;
