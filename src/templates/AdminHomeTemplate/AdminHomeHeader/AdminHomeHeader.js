/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logOutAction } from '../../../redux/actions/LogInAction'
import logo from '../../../assets/images/logo.png'

export default function HomeHeader() {

    const { navigate } = useSelector(state => state.NavigateReducer)
    
    const { user } = useSelector(state => state.UserReducer)

    const dispatch = useDispatch()

    return (
        <header className="text-gray-600 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="/adminhome" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
                <span className="w-36"><img className='scale-125 hover:scale-150 duration-500' src={logo} alt="logo" /></span>
                </Link>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { navigate("/adminhome", { replace: false }) }} className="font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                        </svg>
                        <span className="text-white text-xl">Hello <span className="font-bold">{user.name}!</span></span>
                    </button>
                    <button style={{backgroundColor: "#5a00b1"}} onClick={() => { dispatch(logOutAction()) }} className="font-semibold flex mr-3 space-x-3 items-center px-5 py-2 hover:scale-110 duration-500 rounded-full">
                        <span className="text-white text-xl">Log out</span>
                    </button>
                </nav>
            </div>
        </header>

    )
}
