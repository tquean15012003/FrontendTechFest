import React from 'react'

export default function CompanyManagement() {
  return (
    <>
      <div>
        <h1 style={{ color: "#93b2f1" }} className="mt-10 mb-10 sm:text-4xl text-2xl font-medium title-font text-center">Management</h1>
        <ul className="nav nav-tabs mx-5 flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab" role="tablist">
          <li className="nav-item" role="presentation">
            <a style={{ color: "#93b2f1" }} href="#tabs-1" className="text-lg nav-link block font-semibold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:scale-125 duration-500 focus:border-transparent active" id="tabs-1-tab" data-bs-toggle="pill" data-bs-target="#tabs-1" role="tab" aria-controls="tabs-1" aria-selected="true">Program Department</a>
          </li>
          <li className="nav-item" role="presentation">
            <a style={{ color: "#93b2f1" }} href="#tabs-2" className="text-lg nav-link block font-semibold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:scale-125 duration-500 focus:border-transparent" id="tabs-2-tab" data-bs-toggle="pill" data-bs-target="#tabs-2" role="tab" aria-controls="tabs-2" aria-selected="false">Liaison Department</a>
          </li>
          <li className="nav-item" role="presentation">
            <a style={{ color: "#93b2f1" }} href="#tabs-messages" className="text-lg nav-link block font-semibold leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:scale-125 duration-500 focus:border-transparent" id="tabs-messages-tab" data-bs-toggle="pill" data-bs-target="#tabs-messages" role="tab" aria-controls="tabs-messages" aria-selected="false">Media Department</a>
          </li>
        </ul>
        <div className="tab-content mx-5" id="tabs-tabContent">
          <div className="tab-pane fade show active" id="tabs-1" role="tabpanel" aria-labelledby="tabs-1-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rosalia Northill</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Backend Intern</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$1000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Tran Que An</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Software Developer</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$7000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rakuten</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Business Development</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$8000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-2" role="tabpanel" aria-labelledby="tabs-2-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
            <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rosalia Northill</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Backend Intern</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$1000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Tran Que An</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Software Developer</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$7000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rakuten</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Business Development</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$8000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="tabs-messages" role="tabpanel" aria-labelledby="tabs-profile-tab">
            <div className="container px-5 py-5 mx-auto mt-10">
            <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rosalia Northill</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Backend Intern</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$1000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Tran Que An</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Software Developer</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$7000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
              <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                <div className="w-3/5 sm:text-left text-center ml-20 mt-6 sm:mt-0">
                  <h2 className="text-white text-xl title-font font-bold mb-2">Rakuten</h2>
                  <p className="leading-relaxed text-base"><ul>
                    <li className="text-white text-lg font-semibold">Position: <span className="font-normal">Business Development</span></li>
                    <li className="text-white text-lg font-semibold">Salary: <span className="font-normal">$8000</span></li>
                  </ul></p>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">View and Edit</button>
                </div>
                <div>
                  <button style={{ backgroundColor: "#bc76e6" }} type="button" className="font-semibold ml-5 inline-block px-6 py-2.5 text-white text-xs leading-tight uppercase rounded shadow-md hover:scale-110 duration-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg transition ease-in-out">Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}
