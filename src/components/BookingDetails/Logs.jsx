import React from "react";

const Logs = () => {
  return (
    <div className="box h-[300px] bg-[#F2F2F2]/75 flex flex-col items-center border border-slate-300 p-[15px] rounded-[10px]">
      <div>
        <svg
          clipRule="evenodd"
          fillRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path
            d="m2.179 10.201c.055-.298.393-.734.934-.59.377.102.612.476.543.86-.077.529-.141.853-.141 1.529 0 4.47 3.601 8.495 8.502 8.495 2.173 0 4.241-.84 5.792-2.284l-1.251-.341c-.399-.107-.636-.519-.53-.919.108-.4.52-.637.919-.53l3.225.864c.399.108.637.519.53.919l-.875 3.241c-.107.399-.519.636-.919.53-.399-.107-.638-.518-.53-.918l.477-1.77c-1.829 1.711-4.27 2.708-6.838 2.708-5.849 0-9.968-4.8-10.002-9.93-.003-.473.027-1.119.164-1.864zm9.839 6.293c-.552 0-1-.449-1-1 0-.552.448-1 1-1s1 .448 1 1c0 .551-.448 1-1 1zm9.833-2.693c-.054.298-.392.734-.933.59-.378-.102-.614-.476-.543-.86.068-.48.139-.848.139-1.53 0-4.479-3.609-8.495-8.5-8.495-2.173 0-4.241.841-5.794 2.285l1.251.341c.4.107.638.518.531.918-.108.4-.519.637-.919.53l-3.225-.864c-.4-.107-.637-.518-.53-.918l.875-3.241c.107-.4.518-.638.918-.531.4.108.638.518.531.919l-.478 1.769c1.83-1.711 4.272-2.708 6.839-2.708 5.865 0 10.002 4.83 10.002 9.995 0 .724-.081 1.356-.164 1.8zm-9.836-.307c.414 0 .75-.337.75-.75v-4.992c0-.414-.336-.75-.75-.75s-.75.336-.75.75v4.992c0 .413.336.75.75.75z"
            fillRule="nonzero"
          />
        </svg>
      </div>
      <div className="w-full flex flex-col items-center gap-[10px] text-center">
        <h2 className="text-[17px] font-semibold">Logs</h2>
        <div className="w-[90%] flex flex-col items-center justify-between gap-[10px]">
          <div className="w-full flex items-center justify-between">
            <p>Cancelled at:</p>
            <span className="ml-auto text-fontSize_md font-medium text-slate-800">
              14/05/2023 12:30 pm
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <p>Refund Infoice at:</p>
            <span className="ml-auto text-fontSize_md font-medium text-slate-800">
              16/05/2023 09:22 pm
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logs;
