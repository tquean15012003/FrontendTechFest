/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAction } from '../../../redux/actions/LogInAction'
import logo from '../../../assets/images/logo.png'

export default function CompanyHomeHeader() {

    const { navigate } = useSelector(state => state.NavigateReducer)

    const dispatch = useDispatch()

    return (
        <header className="text-white body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/companyhome" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <span className="w-36"><img className='scale-125 hover:scale-150 duration-500' src={logo} alt="logo" /></span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companymanagement", { replace: false }) }} className="text-xl font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-xl">Management</span>
                    </button>
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companyrecruitment", { replace: false }) }} className="text-xl font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd" />
                            <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z" />
                        </svg>
                        <span className="text-white text-xl">Recruitment</span>
                    </button>
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companyrequest", { replace: false }) }} className="text-xl font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-xl">View request</span>
                    </button>
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/companyprofile", { replace: false }) }} className="text-xl font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-xl">View profile</span>
                    </button>
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { dispatch(logOutAction())}} className="text-xl font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <span className="text-white text-xl">Log out</span>
                    </button>
                </nav>
            </div>
        </header>
    )
}
