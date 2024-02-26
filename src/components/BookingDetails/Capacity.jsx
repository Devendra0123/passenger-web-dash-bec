import React from "react";

const Capacity = ({
  passenger_count,
  luggage_count,
  suitcase_count,
  baby_seat_count,
  baby_seats,
}) => {
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <img
          src="/asset/icons/capacity.svg"
          alt="vehicle-icon"
          className="w-[20px] h-[20px]"
        />
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Capacity</h2>
        <div className="w-[90%]">
          <table className="table w-full">
            <tbody>
              <tr>
                <td>
                  {/* passenger */}
                  <div className="flex items-start gap-[5px]">
                    <img
                      src="/asset/icons/account.svg"
                      alt=""
                      className="w-[15px] h-[15px] mt-[4px] "
                    />
                    <p>Passenger</p>
                  </div>
                </td>
                <td>
                  <span>{passenger_count}</span>
                </td>
              </tr>

              <tr>
                <td>
                  {/* luggage */}
                  <div className="flex items-start gap-[5px]">
                    <img
                      src="/asset/icons/luggage.svg"
                      alt=""
                      className="w-[15px] h-[15px] mt-[4px] "
                    />
                    <p>Luggage</p>
                  </div>
                </td>
                <td>
                  <span>{luggage_count}</span>
                </td>
              </tr>

              <tr>
                <td>
                  {/* hand luggage */}
                  <div className="flex items-start gap-[5px]">
                    <img
                      src="/asset/icons/luggage.svg"
                      alt=""
                      className="w-[15px] h-[15px] mt-[4px] "
                    />
                    <p className="text-start">Hand Luggage</p>
                  </div>
                </td>
                <td>
                  <span>1</span>
                </td>
              </tr>

              <tr className="">
                <td>
                  {/* Car Seat */}
                  <div className="flex items-start gap-[5px]">
                    <img
                      src="/asset/icons/seat.svg"
                      alt=""
                      className="w-[15px] h-[15px] mt-[4px] "
                    />
                    <p>Car Seat</p>
                  </div>
                </td>
                <td
                  style={{
                    border: "none",
                  }}
                  className=" flex flex-col items-center flex-wrap gap-[5px] text-[12px]"
                >
                  <p className="text-center">{baby_seat_count}</p>
                  {baby_seats?.length > 0 && (
                    <p>Rear facing, Forward facing, Booster</p>
                  )}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Capacity;
