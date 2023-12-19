import { useEffect, useState } from "react";
import { A9GarageLevelInfoData, convertNumberToHumanReadable } from "../utils/garageLevel";



export default function A9GarageLevelInfo() {

    const [garageLevel, setGarageLevel] = useState(0);


    useEffect(() => {
        const listenStorageChange = () => {
            setGarageLevel(Number(localStorage.getItem('garageLevel')));
          };
          window.addEventListener("storage", listenStorageChange);
          return () => window.removeEventListener("storage", listenStorageChange);
    }, [garageLevel]);

    return (
        <>
            <button data-drawer-target="a9-sidebar" data-drawer-toggle="a9-sidebar" aria-controls="a9-sidebar" type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                <span className="sr-only">A9 Garage Level Info</span>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clipRule="evenodd" fillRule="evenodd"
                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z">
                    </path>
                </svg>
            </button>

            <aside id="a9-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
                aria-label="a9-sidebar">
                <div className="h-full  overflow-y-auto bg-gray-50 dark:bg-gray-800">
                    <div className="relative overflow-x-auto">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Garage Level
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Garage Value
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {Object.entries(A9GarageLevelInfoData).map(([key, value], index) => (
                                    <tr key={index} className={garageLevel === parseInt(key) ? "text-slate-950 bg-white" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700"}>
                                        <td scope="row" className="px-6 py-4 whitespace-nowrap">
                                            {key}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            {convertNumberToHumanReadable(value)}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </aside>
        </>
    );
}