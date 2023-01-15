/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAction } from '../../../redux/actions/LogInAction'
import logo from '../../../assets/images/logo.png'

export default function HomeHeader() {

  const dispatch = useDispatch()

  const { navigate } = useSelector(state => state.NavigateReducer)

  const { user } = useSelector(state => state.UserReducer)

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/userhome" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
          <span className="w-36"><img className='scale-125 hover:scale-150 duration-500' src={logo} alt="logo" /></span>
        </Link>
        <input type="text" placeholder="Search company, job, people..." className="text-black w-1/4 ml-5 mr-2 bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none font-medium py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
        <button style={{backgroundColor: "#5a00b1"}} className="flex space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
          <svg className="fill-white" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={20} height={20} viewBox="0 0 30 30">
            <path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z">
            </path>
          </svg>
          <span className="text-white text-xl font-semibold">Search</span>
        </button>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <button onClick={() => { navigate(`/userrequest/${user.id}`, { replace: false }) }} style={{backgroundColor: "#5a00b1"}} className="hover:scale-110 duration-500 flex mr-3 space-x-3 items-center px-5 py-2 bg-blue-500 hover:bg-blue-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-xl font-semibold">View request</span>
          </button>
          <button onClick={() => { navigate(`/userprofile/${user.id}`, { replace: false }) }} style={{backgroundColor: "#5a00b1"}} className="hover:scale-110 duration-500 flex mr-3 space-x-3 items-center px-5 py-2 bg-blue-500 hover:bg-blue-800 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
            </svg>
            <span className="text-white text-xl font-semibold">View profile</span>
          </button>
          <button onClick={() => { dispatch(logOutAction()) }} style={{backgroundColor: "#5a00b1"}} className="hover:scale-110 duration-500 flex mr-3 space-x-3 items-center px-5 py-2 bg-blue-500 hover:bg-blue-800 rounded-full">
            <span className="text-white text-xl font-semibold">Log out</span>
          </button>
        </nav>
      </div>
    </header>

  )
}
