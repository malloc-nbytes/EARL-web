import React from "react";

const EARLTable = ({ columns, data, className = "" }) => {
    return (
        <div className={`overflow-x-auto ${className}`}>
            <table className="table-auto w-full max-w-4xl mx-auto border-collapse border border-gray-600 shadow-md">
                <thead>
                    <tr className="bg-slate-900 text-white">
                        {columns.map((col, index) => (
                            <th
                                key={index}
                                className="px-6 py-3 text-left text-sm md:text-base font-semibold"
                            >
                                {col}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, index) => (
                        <tr
                            key={index}
                            className={`${
                                index % 2 === 0 ? "bg-slate-700" : "bg-slate-600"
                            } border-b border-gray-500 hover:bg-slate-500 transition-colors duration-200`}
                        >
                            {Object.values(row).map((value, idx) => (
                                <td key={idx} className="px-6 py-3 text-sm md:text-base text-white">
                                    {value}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default EARLTable;
