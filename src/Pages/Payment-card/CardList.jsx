import React from 'react'

const CardList = () => {
    return (
        <>
            <div className="w-[500px] px-4 mb-3 py-2 rounded-[10px] shadow-md bg-slate-400 flex gap-2 flex-col justify-evenly h-max">
                <div className="flex w justify-between">
                    <p className="text-xl font-medium text-white">
                        xxxx-xxxx-xxxx-1111
                    </p>
                    <p className=" text-blue-500 text-fontSize_md font-medium">Verified</p>
                </div>
                <p className="text-white">23/03/2025</p>
                <span className="bg-green-700 w-max rounded-[20px] text-sm text-white py-1 px-3">
                    Active
                </span>
            </div>
        </>
    )
}

export default CardList