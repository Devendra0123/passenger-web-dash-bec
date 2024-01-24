import { useSearchParams } from "react-router-dom";

const FaqDetails = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const title =
    category == "profile-and-account"
      ? "Profile and Account"
      : category == "bookings"
      ? "Bookings"
      : category == "policies-and-other-info"
      ? "Policies and other info"
      : null;

  return (
    <div className="  bg-smoke h-[70vh] p-[15px] rounded-[15px]">
      {title && (
        <h1 className="text-titleSize text-titleColor font-titleFontWeight ">
          {title}
        </h1>
      )}

      <div className="mt-[20px]">
        <p>If you have got any kind of queries then contact us.</p>
      </div>
    </div>
  );
};

export default FaqDetails;
