import { useEffect, useState } from 'react';

import FormInput from './FormInput';
import { calculateGarageValue, convertNumberToHumanReadable } from '../utils/garageLevel';
import Image from 'next/image';

export default function A9Form() {

    const [garageValue, setGarageValue] = useState(0);
    const [totalGarageValue, setTotalGarageValue] = useState(0);
    const [playerId, setPlayerId] = useState('');

    const [garageLevel, setGarageLevel] = useState(0);

    useEffect(() => {
        if (typeof window !== "undefined" && window.localStorage) {
            localStorage.setItem('garageLevel', garageLevel.toString());
            window.dispatchEvent(new Event("storage"));
        }
    }, [garageLevel]);


    const handleCalculate = (event: any) => {
        event.preventDefault();
        const result = calculateGarageValue(garageLevel, garageValue);
        handleSubmit({ garageLevel, garageValue, playerId });
        incrementAnimation(result)
    };

    const incrementAnimation = (result: number) => {
        let i = 0;
        const interval = setInterval(() => {
            if (i < result) {
                setTotalGarageValue(i);
                i += Math.ceil(result / 100);
            } else {
                setTotalGarageValue(result);
                clearInterval(interval);
            }
        }, 1);
    }


    const handleSubmit = (values: {}) => {
        console.log(values);
    }
    return (
        <div className="sm:ml-64 ms-100 justify-center items-center mb-auto">
            <div className='mt-2 p-4 flex items-center justify-center'>
                <Image
                    src="/asphalt_9_legend.svg"
                    alt="Asphalt 9"
                    width={600}
                    height={400}
                    style={{ display: "flex !important" }}
                    loading="lazy" />
            </div>
            <div className='mt-2 flex items-center justify-center'>
                <div className='flex p-8 m-5 max-w-sm bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-100 dark:border-gray-100 dark:hover:bg-gray-100 '>

                    <form>
                        <div className="space-y-12">
                            <div className="border-b border-gray-900/10 pb-6">
                                <h1 className="text-base font-semibold leading-7 text-gray-900 underline">A9 Garage Value Calculator</h1>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <FormInput label="Player ID" value={playerId} onChange={e => setPlayerId(e.target.value)} />
                                    <FormInput label="Garage Level: 1 - 18" value={garageLevel} onChange={e => setGarageLevel(Number(e.target.value))} />
                                    <FormInput label="Garage Value" value={garageValue} onChange={(e) => setGarageValue(Number(e.target.value))} />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className='bg-blue-600 hover:bg-blue-700 duration-300 text-white shadow p-2 rounded-r'
                                onClick={handleCalculate}>
                                Calculate
                            </button>
                            <br />
                            <div className='text-gray-900'>
                                <h2>Total Garage Value:</h2>
                                <h1 className='text-2xl font-semibold'>
                                    {convertNumberToHumanReadable(totalGarageValue)}
                                </h1>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}