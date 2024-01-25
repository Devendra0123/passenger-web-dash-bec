import { useState } from "react";
import { invoiceData } from "../../consts/invoiceData";
import { LuDownload } from "react-icons/lu";

const Invoice = () => {
  const [fromDate, setFromDate] = useState("2024-01-24");
  const [toDate, setToDate] = useState("2024-01-27");

  return (
    <>
      <div className="  bg-smoke min-h-[70vh] p-[15px] rounded-[15px]">
        <h1 className="text-titleColor text-titleSize font-titleFontWeight ">
          Invoices
        </h1>
        <div className="invoice-cards mt-[10px] flex flex-col gap-[20px] ">
          <div className="flex items-center gap-[30px]">
            <div>
              <label> Total Invoice </label>
              <div className="text-xl font-semibold text-primary"> $ 85.00</div>
            </div>
            <div>
              <label> Paid </label>
              <div className="text-lg font-semibold"> $ 65.00</div>
            </div>
            <div>
              <label> Unpaid </label>
              <div className="text-lg font-semibold"> $ 20.00</div>
            </div>
          </div>

          <div className="flex justify-start gap-[50px]">
            <div className="flex flex-col gap-[5px]">
              <label> From: </label>
              <input
                type="date"
                id="fromDateInput"
                name="fromDateInput"
                value={fromDate}
                onChange={(e) => setFromDate(e.target.value)}
                className=" bg-light_gray px-[15px] py-[8px] rounded-[5px] text-blue-500"
              />
            </div>
            <div className=" flex flex-col gap-[5px] text-start">
              <label> To: </label>
              <input
                type="date"
                id="toDateInput"
                name="toDateInput"
                value={toDate}
                onChange={(e) => setToDate(e.target.value)}
                className=" bg-light_gray px-[15px] py-[8px] rounded-[5px] text-blue-500"
              />
            </div>
          </div>
        </div>

        {/* ------for-table----- */}
        <div className="table-section mt-[50px] w-full">
          <table className="table-auto border-collapse border border-slate-400 w-full">
            <thead>
              <tr className="bg-light_gray text-[17px] font-semibold text-center">
                <td className="border border-slate-300 px-[5px] py-[10px]">Date</td>
                <td className="border border-slate-300 px-[5px] py-[10px]">Invoice Id</td>
                <td className="border border-slate-300 px-[5px] py-[10px]">Amount</td>
                <td className="border border-slate-300 px-[5px] py-[10px]">Status</td>
                <td className="border border-slate-300 px-[5px] py-[10px]">PDF</td>
              </tr>
            </thead>
            <tbody>
              {invoiceData?.length > 0 &&
                invoiceData.map((item, index) => (
                  <tr key={index} className="text-center">
                    <td className="border border-slate-300 px-[5px] py-[10px]">{item.date}</td>
                    <td className="border border-slate-300 px-[5px] py-[10px]">{item.invoiceId}</td>
                    <td className="border border-slate-300 px-[5px] py-[10px]">{item.amount}</td>
                    <td className="border border-slate-300 px-[5px] py-[10px]">{item.status}</td>
                    <td style={{}} className="text-center border border-slate-300 px-[5px] py-[10px]">
                      <div className="w-full h-full flex items-center justify-center text-primary cursor-pointer">
                        <LuDownload />
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Invoice;
