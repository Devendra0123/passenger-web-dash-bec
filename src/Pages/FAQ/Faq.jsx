import { FaBook } from "react-icons/fa6";
import { FaCircleInfo } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { faqData } from "../../consts/faqData";

const Faq = () => {
  return (
    <>
      <div className="bg-smoke min-h-[70vh] p-[15px] rounded-[15px]">
        <h1 className="text-titleColor text-titleSize mt-2 mb-4 font-titleFontWeight ">
          FAQs
        </h1>
        <div className="faq-section w-[60%] flex flex-col gap-2 ">
          {faqData?.length > 0 &&
            faqData.map((item, index) => (
              <Link to={`/faq/faq-details?category=${item.slug}`}>
                <div className="flex hover:bg-[#dfdfdf] items-center rounded-[10px] py-2 px-1 justify-between">
                  <div className="flex gap-2 justify-center items-center">
                    <img src={item.icon} alt={item.title} className="w-[20px] h-[20px] " />
                    <p>{item.title}</p>
                  </div>
                  <div>
                    <IoIosArrowForward />
                  </div>
                </div>
              </Link>
            ))}
        </div>
      </div>
    </>
  );
};

export default Faq;
