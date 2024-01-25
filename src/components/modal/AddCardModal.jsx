import { Box, Button, Modal, } from '@mui/material';
import { FaLock } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { IoCardOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { useState } from 'react';


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    minWidth: '600px',
    minHeight: '400px',
    bgcolor: 'background.paper',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

const AddCardModal = (props) => {
    const { handleClose, handleOpen, open } = props
    const [expiryDate, setExpiryDate] = useState("2018-06");



    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div className='' >
                        <h2 className="text-titleSize text-center font-titleFontWeight text-titleColor " >Add Cards </h2>
                        <button onClick={handleClose} className='absolute top-[20px] right-[20px]' ><FaTimes className='text-primary' size={20} /></button>
                        <div className='input-group flex mt-3 flex-col gap-4' >
                            <div className='relative' >
                                <input className=' w-full p-2  pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] ' placeholder='Enter Card Number' type="text" />
                                < IoCardOutline size={20} className='absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] ' />
                            </div>
                            <div className='flex relative  gap-2' >
                                <input className='w-[50%] p-2   border-[1px] border-gray-300 outline-none rounded-[8px] ' onChange={(e) => setExpiryDate(e.target.value)} value={expiryDate} type="month" />
                                <input className='w-[50%] p-2  pr-10 border-[1px] border-gray-300 outline-none rounded-[8px] ' placeholder='CVC' type="text" />
                                < IoInformationCircleOutline size={20} className='absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] ' />
                            </div>
                            <div className='relative'>
                                <input className='w-full p-2 pr-10  border-[1px] border-gray-300 outline-none rounded-[8px] ' placeholder='Name on Card' type="text" />
                                < FaUser size={20} className='absolute text-gray-500 right-[10px] top-[50%] translate-y-[-50%] ' />
                            </div>
                        </div>
                        <div className='flex mt-5 justify-center items-center gap-4' >
                            <FaLock className='text-green-500' />
                            <p className='text-fontSize_sm' > Your payment info will be stored securely</p>
                        </div>
                        <div className='my-5' >
                            <Button sx={{ width: '100%', }} variant='contained' >save</Button>
                        </div>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}

export default AddCardModal