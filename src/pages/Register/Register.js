/* eslint-disable no-unused-vars */
import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signUpAction } from '../../redux/actions/LogInAction';

export default function Register() {

  const { navigate } = useSelector(state => state.NavigateReducer)

  const dispatch = useDispatch();

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      username: "",
      password: "",
      passwordConfirmation: "",
      type: "user",
      name: ""
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .required('Required!')
        .max(50, 'Username must contain at most 8 characters!'),
      password: Yup.string()
        .required('Required!'),
      passwordConfirmation: Yup.string()
        .required('Required!')
        .oneOf([Yup.ref('password'), null], 'Password must match'),
      type: Yup.string()
        .required('Required!'),
      name: Yup.string()
        .required('Required!')
        .max(50, 'Name must contain at most 50 characters!!')
    }),
    onSubmit: (values) => {
      dispatch(signUpAction(values))
    }
  })

  return (
    <form className="w-full h-full" onSubmit={formik.handleSubmit}>
      <section className="text-gray-600 body-font h-full w-full">
        <div className="h-full w-full container mx-auto flex px-5 justify-between items-center">
          <div className="lg:w-2/5 rounded-lg px-8 flex flex-col place-self-center border-r-2 border-black">

          </div>

          <div style={{ width: "1px" }} className='bg-white h-2/3 opacity-50'>

          </div>

          <div className="lg:w-2/5 rounded-lg px-4 flex flex-col place-self-center">
            <h1 className="text-3xl text-white font-bold mb-8">SIGN UP TO CONNTECH!</h1>
            {/* Sign Up */}
            <div className="relative mb-4">
            <label htmlFor="username" className="text-white leading-6 text-2xl font-bold">USERNAME</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.username} onBlur={formik.handleBlur} type="username" id="username" name="username" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.username && formik.errors.username ? (<div className="text-red-900"> {formik.errors.username}</div>) : null}
            </div>
            <div className="relative mb-4">
            <label htmlFor="password" className="text-white leading-6 text-2xl font-bold">PASSWORD</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} type="password" id="password" name="password" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.password && formik.errors.password ? (<div className="text-red-900"> {formik.errors.password}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="passwordConfirmation" className="text-white leading-6 text-2xl font-bold">PASSWORD CONFIRMATION</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.passwordConfirmation} onBlur={formik.handleBlur} type="password" id="passwordConfirmation" name="passwordConfirmation" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.passwordConfirmation && formik.errors.passwordConfirmation ? (<div className="text-red-900"> {formik.errors.passwordConfirmation}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="type" className="text-white leading-6 text-2xl font-bold">DOMAIN</label>
              <select style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.type} onBlur={formik.handleBlur} name="type" id="type" className="mt-2 border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out">
                <option value="user">User</option>
                <option value="company">Company</option>
                <option value="admin">Admin</option>
              </select>
              {formik.touched.type && formik.errors.type ? (<div className="text-red-900"> {formik.errors.type}</div>) : null}
            </div>
            <div className="relative mb-4">
              <label htmlFor="name" className="text-white leading-6 text-2xl font-bold">Name</label>
              <input style={{borderColor: "#8e6ebf"}} onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} type="name" id="name" name="name" className="border-b placeholder-white/50 w-full text-white text-xl !bg-transparent outline-none py-1 leading-8 transition-colors duration-200 ease-in-out" />
              {formik.touched.name && formik.errors.name ? (<div className="text-red-900"> {formik.errors.name}</div>) : null}
            </div>
            <button type="submit" className="text-white border-0 py-2 px-8 focus:outline-none rounded-2xl text-xl font-bold" style={{backgroundColor: "#8e6ebf"}}>Sign up</button>
            {/*Back To Log in*/}
            <p  className="text-xl text-gray-500 mt-3 mb-2 text-center"><i>Already have an account? </i><b onClick={() => {
              navigate("/login", { replace: false })
            }} className="text-white cursor-pointer">Sign in</b></p>
            
          </div>
        </div>
      </section>
    </form >
  )
}
