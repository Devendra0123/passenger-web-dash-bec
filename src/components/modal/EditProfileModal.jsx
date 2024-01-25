import { Box, Button, IconButton, Modal, Tooltip } from "@mui/material";
import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegEdit, FaTimes, FaUser, } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    minWidth: "600px",
    Height: "max-content",
    bgcolor: "background.paper",
    borderRadius: "10px",
    boxShadow: 24,
    p: 4,
};

const EditProfileModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div className=" " >
            <Tooltip arrow={true} sx={{ zIndex: 0 }} leaveDelay={0} title="Edit Personal Information">
                <IconButton>
                    <button
                        className="bg-light_gray hover:bg-primary border-[0.5px] border-gray-400 hover:text-white text-black  h-max w-max  py-[10px] px-[10px] font-semibold text-sm rounded-[50%] flex justify-between items-center "
                        onClick={handleOpen}
                    >
                        <FaRegEdit className="cursor-pointer  text-gray-white " size={20} />
                    </button>
                </IconButton>
            </Tooltip>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"

            >
                <Box sx={style}>
                    <div className="">
                        <h2 className="text-titleSize text-center font-titleFontWeight text-titleColor ">
                            Edit Personal Informations{" "}
                        </h2>
                        <button
                            onClick={handleClose}
                            className="absolute top-[20px] right-[20px]"
                        >
                            <FaTimes className="text-primary" size={20} />
                        </button>
                        <div className="input-group flex mt-3 flex-col gap-4">
                            <div className="relative" >
                                <input
                                    className="w-full p-2 pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                                    placeholder="Enter Name"
                                    type="text"
                                />
                                <FaUser size={20} className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%]" />
                            </div>
                            <div className="relative" >
                                <input
                                    className="w-full p-2  pr-10   border-[1px] border-gray-300 outline-none rounded-[8px] "
                                    placeholder="Enter Email"
                                    type="email"
                                />
                                <IoMailOutline size={20} className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%]" />
                            </div>
                            <div className="relative" >

                                <input
                                    className="w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] "
                                    placeholder="Enter Phone Number"
                                    type="number"
                                />
                                <BsTelephone size={20} className="absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%]" />
                            </div>
                        </div>

                        <div className="my-5">
                            <Button sx={{ width: "100%" }} variant="contained">
                                save
                            </Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    );
};

export default EditProfileModal;
