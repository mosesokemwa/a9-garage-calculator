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
        <div id="sidebar" className="scroll-smooth focus:scroll-auto fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
            <div className="h-full p-3 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <div className="md:relative md:overflow-x-auto">
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
        </div>
    );
}