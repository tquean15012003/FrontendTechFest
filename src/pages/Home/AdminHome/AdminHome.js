/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { approvedRequestAction, getRequestReceivedAction, getRequestSentAction, rejectRequestAction } from '../../../redux/actions/UserActions';
import _ from 'lodash';

export default function AdminHome() {

    const { user, requestReceivedList, requestSentList } = useSelector(state => state.UserReducer);

    console.log(requestReceivedList);
    console.log(requestSentList)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getRequestReceivedAction(user.id))
        dispatch(getRequestSentAction(user.id))
    }, [])

    const renderRequestHeader = (request) => {
        return (
            <h2 className="text-white text-2xl font-bold title-font mb-2">{_.capitalize(request.requestType)}</h2>
        )
    }

    const renderRequestInfo = (request) => {
        return Object.keys(JSON.parse(request.data)).map((item, index) => {
            if (item !== "issuer") {
                return (
                    <p className="leading-relaxed text-white" key={index}><span className="font-bold text-2xl">{_.capitalize(item)}:</span> <span className="text-xl">{JSON.parse(request.data)[item]}</span></p>
                )
            }
            return (<p key={index}></p>)
        })

    }

    const renderRequestReceived = () => {
        return requestReceivedList.slice(0).reverse().map((request, index) => {
            return (
                <div className="accordion-body py-4 px-5" key={index}>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                            {renderRequestHeader(request)}
                            {renderRequestInfo(request)}
                        </div>
                        {request.isdone === "false" ?
                            <>
                                <button onClick={() => {
                                    dispatch(approvedRequestAction(request))
                                }} className="flex space-x-3 mr-3 items-center px-5 py-5 bg-green-500 hover:bg-green-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                <button onClick={() => {
                                    dispatch(rejectRequestAction(request))
                                }} className="flex space-x-3 items-center px-5 py-5 bg-red-500 hover:bg-red-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </> : (request.claimID === "" ?
                                <button disabled className="flex space-x-3 items-center px-5 py-5 bg-red-500 hover:bg-red-800 rounded-full">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                                :
                                <a target="_blank" href={request.link} rel="noreferrer">
                                    <button className="flex space-x-3 items-center px-5 py-5 bg-green-500 hover:bg-green-800 rounded-full">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="white">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </button>
                                </a>
                            )}
                    </div>
                </div>
            )
        })
    }


    return (
        <div style={{minHeight: "70vh"}}>
            <h1 style={{ color: "#93b2f1" }} className="mt-10 mb-10 sm:text-4xl text-2xl font-bold title-font text-center">Requests Received</h1>
            {renderRequestReceived()}
        </div>
    )
}
