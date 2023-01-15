import { useFormik } from 'formik'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup';
import { createRequestAction, updateUserInfoAction } from '../../../../redux/actions/UserActions';
import avatar from '../../../../assets/images/avatar.png'

export default function UserInfo() {

    const { user, userInfo, adminList, requestSentList } = useSelector(state => state.UserReducer)

    const request = requestSentList.slice(0).reverse().find(request => request.requestType === "infomation")

    const dispatch = useDispatch()

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            name: user.name,
            contact: "",
            location: "",
            issuer: adminList[0]?.id,
        },
        validationSchema: Yup.object({
            name: Yup.string()
                .required('Required!'),
            contact: Yup.string()
                .required('Required!'),
            location: Yup.string()
                .required('Required!'),
            issuer: Yup.string()
                .required('Required!')
        }),
        onSubmit: async (values) => {
            await dispatch(updateUserInfoAction(values))
            await dispatch(createRequestAction("infomation", values))
            formik.setFieldValue("contact", "");
            formik.setFieldValue("location", "");
        }
    })

    return (
        <section className="m-5 text-gray-600 body-font px-8 py-5 flex flex-col place-self-center border-b">

            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <h2 className="mr-5 text-2xl font-bold title-font text-white">INFORMATION</h2>
                <button style={{ backgroundColor: "#5a00b1" }} className="flex space-x-3 items-center px-2 py-2 duration-500 hover:scale-110 rounded-full" data-bs-toggle="modal" data-bs-target="#infoModal">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                </button>
            </div>

            {/* Modal */}
            <form onSubmit={formik.handleSubmit} className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="infoModal" tabIndex={-1} aria-labelledby="exampleModalLongLabel" aria-hidden="true">
                <div className="modal-dialog relative w-auto pointer-events-none">
                    <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                        <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                            <h5 className="text-xl font-medium leading-normal text-gray-800" id="exampleModalLongLabel">
                                Edit information
                            </h5>
                            <button type="button" className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="relative mb-4 px-3">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                            <input onChange={formik.handleChange} value={formik.values.name} onBlur={formik.handleBlur} disabled type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.name && formik.errors.name ? (<div className="text-red-900"> {formik.errors.name}</div>) : null}
                        </div>
                        <div className="relative mb-4 px-3">
                            <label htmlFor="contact" className="leading-7 text-sm text-gray-600">Contact</label>
                            <input onChange={formik.handleChange} value={formik.values.contact} onBlur={formik.handleBlur} type="contact" id="contact" name="contact" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.contact && formik.errors.contact ? (<div className="text-red-900"> {formik.errors.contact}</div>) : null}
                        </div>
                        <div className="relative mb-4 px-3">
                            <label htmlFor="location" className="leading-7 text-sm text-gray-600">Location</label>
                            <input onChange={formik.handleChange} value={formik.values.location} onBlur={formik.handleBlur} type="text" id="location" name="location" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            {formik.touched.location && formik.errors.location ? (<div className="text-red-900"> {formik.errors.location}</div>) : null}
                        </div>
                        <div className="relative mb-4 px-3">
                            <label htmlFor="issuer" className="leading-7 text-sm text-gray-600">Issuer (admin)</label>
                            <select onChange={formik.handleChange} value={formik.values.issuer} onBlur={formik.handleBlur} name="issuer" id="issuer" className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out">
                                {adminList.map((admin, index) => {
                                    return (
                                        <option value={admin.id} key={index}>{admin.name}</option>
                                    )
                                })}
                            </select>
                            {formik.touched.issuer && formik.errors.issuer ? (<div className="text-red-900"> {formik.errors.issuer}</div>) : null}
                        </div>
                        <div className="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                            <button type="button" className="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1" data-bs-dismiss="modal">
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </form>
            <div className="container flex px-5 mx-auto justify-start">
                <div className="w-96">
                    <img className="" src={avatar} alt="avatar" />
                </div>
                <div className="px-12">
                    <div className="-my-8 divide-y-2 divide-gray-100">
                        <div className="py-8 flex flex-wrap md:flex-nowrap">
                            <div className="md:flex-grow">
                                <div className="mb-2">
                                    <h3 className="text-2xl text-white font-bold title-font mb">Name</h3>
                                    <p className="leading-relaxed text-base font-medium text-white">{(typeof userInfo.name === "undefined") ? `${user.name}` : `${userInfo?.name}`}</p>
                                </div>
                                <div className="mb-2">
                                    <h3 className="text-2xl text-white font-bold title-font mb">Contact</h3>
                                    <p className="leading-relaxed text-base font-medium text-white">{userInfo?.contact}</p>
                                </div>
                                <div>
                                    <h3 className="text-2xl text-white font-bold title-font mb">Location</h3>
                                    <p className="leading-relaxed text-base font-medium text-white">{userInfo?.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-8">
                    <span>{(typeof(request) === "undefined") ? <span className="text-lg font-semibold text-yellow-500">Pending Review</span> : request.isdone === "false" ? <span className="text-lg font-semibold text-yellow-500">Pending Review</span> : request.claimID === "" ? <span className="text-lg font-semibold text-red-500">Rejected</span> : <a href={request.link} target="_blank" className="text-lg font-semibold text-green-500" rel="noreferrer">Verified</a> }</span>
                </div>
            </div>

        </section>
    )
}
