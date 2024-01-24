import { FaBook } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { supportData } from "../../consts/supportData";

const Support = () => {
  return (
    <>
      <div className="bg-smoke min-h-[70vh] p-[15px] rounded-[15px]">
        <h1 className="text-titleColor text-titleSize mt-2 mb-4 font-titleFontWeight ">
          Support
        </h1>
        <div className="faq-section w-[60%] flex flex-col gap-2 ">
          {supportData?.length > 0 &&
            supportData.map((item, index) => (
              <Link to={`/support/support-details?category=${item.slug}`}>
                <div className="flex hover:bg-[#dfdfdf] items-center rounded-[10px] py-2 px-1 justify-between">
                  <div className="flex gap-2 justify-center items-center">
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="w-[20px] h-[20px] "
                    />
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

export default Support;
