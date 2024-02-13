import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const RegisterViaEmail = ({
  handleRegisterFormSubmit,
  errorMessage,
  isPending,
}) => {

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
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

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="w-[75%] mt-[20px] pb-[100px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterFormSubmit(formData);
        }}
        className="flex flex-col gap-[15px]"
      >
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

        <div className="flex flex-col gap-[5px]">
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            required
            value={formData.confirmPassword}
            onChange={handleOnChange}
            className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
          />
        </div>
        {errorMessage && (
          <p className="text-primary text-[15px] font-[500]">{errorMessage}</p>
        )}
        <button
          type="submit"
          disabled={isPending}
          className="mt-[20px] w-full px-[20px] py-[10px] bg-blue-500 text-white "
        >
          {isPending ? (
            <span className="flex items-center gap-[3px] justify-center ">
              <svg class="animate-spin h-5 w-5 mr-3 ..." fill="#fff" viewBox="0 0 24 24">
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
