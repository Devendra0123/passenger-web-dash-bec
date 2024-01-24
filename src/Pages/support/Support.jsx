import { FaBook } from "react-icons/fa"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const Support = () => {
    return (
        <div className="  bg-white h-[80vh] pl-[50px] p-4 rounded-[10px]  mt-2">
            <h1 className="text-2xl mt-2 mb-4 font-semibold ">Support</h1>
            <div className="faq-section w-[60%] flex flex-col gap-2 ">

                <div className="flex hover:bg-[#dfdfdf] items-center rounded-[10px] py-2 px-1 justify-between">
                    <div className="flex gap-2 justify-center items-center">
                        <FaBook />
                        <p>Profile and Account</p>
                    </div>
                    <div>
                        <IoIosArrowForward />
                    </div>
                </div>





            </div>
        </div>
    )
}

export default Support