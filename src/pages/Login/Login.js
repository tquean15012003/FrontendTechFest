/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { logInInAction } from '../../redux/actions/LogInAction';
import logo from '../../assets/images/logo.png'

export default function Login() {

  const { navigate } = useSelector(state => state.NavigateReducer)

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      type: "user",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required!'),
      password: Yup.string()
        .required('Required!'),
      type: Yup.string()
        .required('Required!')
    }),
    onSubmit: (values) => {
      dispatch(logInInAction(values))
    }
  })

  useEffect(() => {
  }, [])

  return (
    <form className="w-full h-full" onSubmit={formik.handleSubmit}>
      <section className="text-gray-600 body-font h-full w-full">
        <div className="h-full w-full container mx-auto flex px-5 justify-between items-center">
          <div className="lg:w-2/5 rounded-lg px-8 flex flex-col place-self-center">
           
            <img className='scale-150' src={logo} alt="logo" />
            <p className="text-2xl text-white font-bold">BOOST YOUR CAREER WITH CONNTECH</p>
          </div>

          <div style={{ width: "1px"}} className='bg-white h-2/3 opacity-50'>
            
          </div>

          <div className="lg:w-2/5 rounded-lg px-4 flex flex-col place-self-center">
            <h1 className="text-3xl text-white font-bold mb-8">WELCOME TO CONNTECH!</h1>
            {/* Log In */}
            <div className="relative mb-4">
              <label htmlFor="username" className="text-white leading-6 text-2xl font-bold">USERNAME</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} placeholder="username" type="username" id="username" name="username" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.username && formik.errors.username ? (<div className="text-red-400"> {formik.errors.username}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="password" className="text-white leading-6 text-2xl font-bold">PASSWORD</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} placeholder="********" type="password" id="password" name="password" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.password && formik.errors.password ? (<div className="text-red-400"> {formik.errors.password}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="type" className="text-white leading-6 text-2xl font-bold">DOMAIN</label>
              <select style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.type} onBlur={formik.handleBlur} name="type" id="type" className="mt-2 border-b placeholder-white/50 w-full text-white text-xl bg-transparent outline-hidden py-1 leading-8 transition-colors duration-200 ease-in-out">
                <option className="bg-transparent outline-hidden" value="user">User</option>
                <option className="bg-transparent outline-hidden" value="company">Company</option>
                <option className="bg-transparent outline-hidden" value="admin">Admin</option>
                <option className="bg-transparent outline-hidden" value="mentor">Mentor</option>
              </select>
              {formik.touched.type && formik.errors.type ? (<div className="text-red-400"> {formik.errors.type}</div>) : null}
            </div>
            <button type="submit" className="text-white border-0 py-2 px-8 focus:outline-none rounded-2xl text-xl font-bold" style={{backgroundColor: "#8e6ebf"}}>Sign in</button>
            {/* Sign up */}
            <p  className="text-xl text-gray-500 mt-3 mb-2 text-center"><i>Not registered?</i><b onClick={() => {
              navigate("/register", { replace: false })
            }} className="text-white cursor-pointer"> Sign up</b></p>
            <div />
            
          </div>
        </div>
      </section>
    </form>
  )
}
