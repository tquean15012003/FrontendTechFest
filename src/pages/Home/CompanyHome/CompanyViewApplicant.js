/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

export default function CompanyViewApplicant() {
    return (
        <div>
            <section name="topNav">
                <div className="flex-col py-3 items-center h-210px bg-gradient-to-r from-red-300 to-red-500 opacity-100 ">
                    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
                        <div className="container flex flex-wrap justify-between items-center mx-auto">
                            <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
                                <div className="flex flex-row">
                                    <h1 className="opacity-100 sm:text-3xl text-2xl font-medium title-font text-left text-white">
                                        Digital Marketer in Singapore
                                    </h1>
                                    <div className="px-3 pacity-100 sm:text-3xl text-2xl font-medium title-font text-left text-white">
                                        -
                                    </div>
                                    <h1 className="opacity-100 sm:text-3xl text-2xl font-medium title-font text-left text-white">
                                        Full Time
                                    </h1>
                                </div>
                                <ul className="flex flex-col mt-5 md:flex-row md:space-x-8 md:text-sm md:font-medium">
                                    <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Applicants</a>
                                    </li>
                                    {/* khong biet nua */}
                                    <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">History</a>
                                    </li>
                                    {/* company view detail cua job post xem co can edit g khong */}
                                    <li>
                                        <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" aria-current="page">Details</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </section>
            <section name="Applicants">
                <section className="text-gray-600 body-font mt-10 mx-5">
                    <div className="container mx-auto">
                        <div className="-my-10 divide-y-2 divide-gray-100">
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    {/* chac la can co avatar */}
                                    <span className=" text-gray-500 text-sm">Applied 10 hours ago</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-bold text-gray-900 title-font ">Rainbow
                                        Dash</h2>
                                    <div className="text-gray-400">Ponyville &amp; Cloudsdale - Project Manager at Ponyville</div>
                                    <p className="leading-relaxed">I can fly really fast and make a sonic boom. I like apples. I taught at Friendship School. I cauched the Wonderbolts at Cloudsdale.</p>
                                    <li>
                                        <a href="tel:+31620842105" className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline">
                                            <svg className="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z">
                                                </path>
                                            </svg>+65 9823 5673
                                        </a>
                                    </li>
                                    <li>
                                        <svg className="inline-block w-4 h-4 mr-3 opacity-40" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                                            </path>
                                        </svg>
                                        <a className="inline-block h-12 -my-4 xs:h-auto underline hover:no-underline" href="mailto:john@doe.com">rainbowD@pony.com</a>
                                    </li>
                                    <a className="text-indigo-500 inline-flex items-center mt-4">View Profile
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            {/* new 1 */}
                            <div className="py-8 flex flex-wrap md:flex-nowrap">
                                <div className="md:w-60 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    {/* chac la can co avatar */}
                                    <span className=" text-gray-500 text-sm">Applied 2 days ago</span>
                                </div>
                                <div className="md:flex-grow">
                                    <h2 className="text-2xl font-bold text-gray-900 title-font ">Twilight Sparkle</h2>
                                    <div className="text-gray-400">Ponyville &amp; - Princess of Equestria</div>
                                    <p className="leading-relaxed">After being Celestia's honoured student. I'm now the Princess of Friendship in Equestria. I also opened the School of Friendship to connect all creatures across Equestria and beyond. To understand human, I will apply to this Marketer job and share the message of friendship and love stronger than it ever be.</p>
                                    <a className="text-indigo-500 inline-flex items-center mt-4">View Profile
                                        <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M5 12h14" />
                                            <path d="M12 5l7 7-7 7" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section></div>

    )
}
