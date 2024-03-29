
import ProfileData from "../../components/Sections/ProfileData";

const Account = ({data}) => {

  return (
    <div className=" bg-white/75 min-h-[70vh] backdrop-blur-sm w-full p-[15px] rounded-[15px]">
      <h2 className="text-titleSize font-titleFontWeight text-titleColor ">
        {" "}
        Profile{" "}
      </h2>

      <ProfileData data={data} />
    </div>
  );
};

export default Account;
