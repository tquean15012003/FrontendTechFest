/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useSelector } from 'react-redux'

export default function CompanyRecruitment() {

  const { navigate } = useSelector(state => state.NavigateReducer)

  return (
    <div>
      {/* add job posting */}
      <div className="container mx-auto mt-20 mb-0 flex justify-center flex-row items-center">
        <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companyaddjob", { replace: false }) }} className="hover:scale-110 duration-500  flex mr-3 space-x-3 items-center px-5 py-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-white text-xl">Add job post</span>
        </button>
      </div>
      <section className="text-white body-font">
        <div className="container px-5 py-12 mx-auto">
          <div className="flex items-center md:w-2/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-white text-xl text-center title-font font-semibold mb-2">Business Development</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-md justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$5000-$6000</div>
              </div>
              <div class="flex justify-center">
                <button className="text-white hover:scale-110 duration-500 font-semibold flex mr-3 space-x-3 items-center px-5 py-2">
                  <span className="text-white text-sm">View Applicants</span>
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-2/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-white text-xl text-center title-font font-semibold mb-2">Digital Marketer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-md justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$3500-$4000</div>
              </div>
              <div class="flex justify-center">
                <button className="text-white hover:scale-110 duration-500 font-semibold flex mr-3 space-x-3 items-center px-5 py-2">
                  <span className="text-white text-sm">View Applicants</span>
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-2/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-white text-xl text-center title-font font-semibold mb-2">Software Developer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-md justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$6000-$7000</div>
              </div>
              <div class="flex justify-center">
                <button className="text-white hover:scale-110 duration-500 font-semibold flex mr-3 space-x-3 items-center px-5 py-2">
                  <span className="text-white text-sm">View Applicants</span>
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-2/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-white text-xl text-center title-font font-semibold mb-2">Data Scientist</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-md justify-center">
                <div>Part Time</div>
                <div>Singapore</div>
                <div>$3000-$4000</div>
              </div>
              <div class="flex justify-center">
                <button className="text-white hover:scale-110 duration-500 font-semibold flex mr-3 space-x-3 items-center px-5 py-2">
                  <span className="text-white text-sm">View Applicants</span>
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center md:w-2/5 mx-auto border-b pb-5 mb-10 border-gray-200 sm:flex-row flex-col">
            <div className="flex-grow sm:text-left text-center mt-6 sm:mt-0 justify-center items-center">
              <h2 className="text-white text-xl text-center title-font font-semibold mb-2">Digital Marketer</h2>
              <div className="flex flex-row gap-3 eading-relaxed text-md justify-center">
                <div>Full Time</div>
                <div>Singapore</div>
                <div>$3500-$4000</div>
              </div>
              <div class="flex justify-center">
                <button className="text-white hover:scale-110 duration-500 font-semibold flex mr-3 space-x-3 items-center px-5 py-2">
                  <span className="text-white text-sm">View Applicants</span>
                  <svg fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
