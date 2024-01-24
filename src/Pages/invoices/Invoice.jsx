const Invoice = () => {
  return (
    <>
      <div className="  bg-white  p-4 rounded-[10px]  mt-2">
        <h1 className="text-2xl mt-2 mb-4 font-semibold ">Invoices</h1>
        <div className="invoice-cards flex flex-col gap-4 ">
          <div>
            <label> Total Invoice </label>
            <div className="text-4xl font-semibold"> $ 0.00</div>
          </div>
          <div className="flex justify-between">
            <div>
              <label> Paid </label>
              <div className="text-xl font-bold" > $ 0.00</div>
            </div>
            <div>
              <label> Unpaid </label>
              <div className="text-xl font-bold" > $ 0.00</div>
            </div>
          </div>
          <div className="flex justify-between" >
            <div>
              <label> From </label>
              <div className="text-xl font-medium" >2024-01-22</div>
            </div>
            <div className="text-right" >
              <label  > To </label>
              <div className="text-xl font-medium" >2024-01-22</div>
            </div>
          </div>
        </div>

        {/* ------for-table----- */}
        <div className="table-section" >

        </div>
      </div>
    </>
  );
};

export default Invoice;
