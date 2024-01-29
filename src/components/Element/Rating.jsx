import React from "react";

const Rating = ({ ratingValue, NumberOfRating }) => {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div className="flex items-center">
      {/* Five Star */}
      <div className="flex items-center space-x-[5px]">
        {stars.map((value) => (
          <svg
            key={value}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 14"
            width="16"
            height="14"
          >
            <path
              fill={
                value <= ratingValue
                  ? "rgb(238, 189, 63)"
                  : value - 0.5 <= ratingValue
                  ? "rgb(238, 189, 63)" // Half-filled star
                  : "#c4c4c4"
              }
              d="M 6.98487 0.799211 C 7.29144 -0.106738 8.57278 -0.10674 8.87934 0.799208 L 9.92352 3.88488 C 10.061 4.29101 10.442 4.56434 10.8708 4.56434 H 14.1606 C 15.1391 4.56434 15.5353 5.82462 14.7327 6.38449 L 12.142 8.19178 C 11.7772 8.44627 11.6244 8.91113 11.7669 9.33247 L 12.7728 12.305 C 13.0822 13.2192 12.045 13.9979 11.2535 13.4457 L 8.50426 11.5278 C 8.16051 11.288 7.7037 11.288 7.35996 11.5278 L 4.61076 13.4457 C 3.81921 13.9979 2.78202 13.2192 3.09138 12.305 L 4.09727 9.33247 C 4.23985 8.91113 4.08699 8.44627 3.72218 8.19178 L 1.1315 6.38449 C 0.328959 5.82462 0.725119 4.56434 1.70365 4.56434 H 4.99347 C 5.42222 4.56434 5.80327 4.29101 5.9407 3.88488 L 6.98487 0.799211 Z"
            ></path>
          </svg>
        ))}
      </div>
      {NumberOfRating && (
        <p className="ml-[5px] text-[14px] text-black">{`(${NumberOfRating})`}</p>
      )}
    </div>
  );
};

export default Rating;
