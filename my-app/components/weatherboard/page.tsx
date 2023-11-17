import React from 'react'

const weatherboard = () => {
    return (

        <div className="container mx-auto p-4">
            {/* <!-- Outer container --> */}
            <div className="flex space-x-4 overflow-x-hidden">
                {/* <!-- Weather container for today --> */}
                <div className="w-72 bg-white p-4 rounded-md shadow-md overflow-hidden">
                    {/* <!-- Content for today's weather --> */}
                    <h2 className="text-lg font-semibold mb-4">Today's Weather</h2>
                    {/* <!-- Add your weather information here --> */}
                </div>

                {/* <!-- Weather container for next 3 days --> */}
                <div className="w-72 bg-white p-4 rounded-md shadow-md overflow-hidden">
                    {/* <!-- Content for the next 3 days --> */}
                    <h2 className="text-lg font-semibold mb-4">Next 3 Days</h2>
                    {/* <!-- Add your weather information here --> */}
                </div>

                {/* <!-- Add more containers as needed --> */}
                {/* <!-- Example: --> */}
                {/* <!-- <div className="w-72 bg-white p-4 rounded-md shadow-md overflow-hidden"> */}
                {/* <h2 className="text-lg font-semibold mb-4">Day 3</h2> */}
                {/* <!-- Add your weather information here --> */}
                {/* <!-- </div> --> */}
            </div>
        </div>

    )
}

export default weatherboard