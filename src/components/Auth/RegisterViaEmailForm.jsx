import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";


const RegisterViaEmail = ({ handleRegisterFormSubmit, errorMessage }) => {
  const [showPassword, setShowPassword] = useState(false);

  const fileInputRef = useRef(null);

  const [file, setFile] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
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

  return (
    <div className="w-[75%] mt-[20px] pb-[100px]">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleRegisterFormSubmit(formData);
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
          <div className="flex flex-col gap-[5px]">
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleOnChange}
              className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
            />
          </div>
          <div className="flex flex-col gap-[5px]">
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleOnChange}
              className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
            />
          </div>
        </div>

        <div className="flex flex-col gap-[5px]">
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleOnChange}
            className="bg-light_gray px-[14px] py-[8px] rounded-[5px] border "
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
        {errorMessage && (
          <p className="text-primary text-[15px] font-[500]">{errorMessage}</p>
        )}
        <button
          type="submit"
          className="mt-[20px] w-full px-[20px] py-[10px] bg-blue-500 text-white "
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default RegisterViaEmail;
