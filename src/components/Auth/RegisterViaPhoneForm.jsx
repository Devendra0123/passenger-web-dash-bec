import React, { useRef, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

const RegisterViaPhoneForm = () => {
  const fileInputRef = useRef(null);

  const [file, setFile] = useState();
  const [uploadedImageUrl, setUploadedImageUrl] = useState(null);

  function handleFileChange(event) {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      setFile(selectedFile);

      const imageUrl = URL.createObjectURL(selectedFile);
      setUploadedImageUrl(imageUrl);
    }
  }

  return (
    <div>
      <form>
        <div className="w-full h-full flex flex-col justify-center items-center gap-[10px]">
          <FaCloudUploadAlt className="text-[35px]" />
          <label
            htmlFor="upload-resume"
            className="cursor-pointer bg-slate-600 text-white px-[20px] py-[8px] rounded-[13px] "
          >
            <p>Browse Files</p>
          </label>
          <input
            ref={fileInputRef}
            id="upload-resume"
            type="file"
            accept=".pdf,image/jpeg,image/png,image/jpg"
            placeholder="Attach Resume"
            onChange={handleFileChange}
            className="custom-file-input"
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterViaPhoneForm;
