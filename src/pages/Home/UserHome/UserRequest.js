/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getRequestReceivedAction, getRequestSentAction } from '../../../redux/actions/UserActions';
import _ from 'lodash';

export default function UserRequest() {

    const { user, requestSentList } = useSelector(state => state.UserReducer);

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
                    <p className="text-white leading-relaxed text-xl" key={index}><span className="font-bold text-2xl"> {_.capitalize(item)}:</span> <span className="text-xl">{JSON.parse(request.data)[item]}</span></p>
                )
            }
            return (<p key={index}></p>)
        })

    }

    const renderRequestSent = () => {
        return requestSentList.slice(0).reverse().map((request, index) => {
            return (
                <div className="accordion-body py-4 px-5" key={index}>
                    <div className="flex items-center lg:w-4/5 mx-auto border-b pb-10 mb-10 border-gray-200 sm:flex-row flex-col">
                        <div className="w-3/5 sm:text-left text-center mt-6 sm:mt-0">
                            {renderRequestHeader(request)}
                            {renderRequestInfo(request)}
                        </div>
                        <div>
                            {request.isdone === "false" ? <h3 className="font-semibold text-lg text-yellow-500">Pending review</h3> : (request.claimID === "" ? <h3 className="font-semibold text-lg text-red-500">Rejected</h3> : <a href={request.link} target="_blank" className="font-semibold text-lg text-green-500" rel="noreferrer">Approved</a>)}
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div style={{minHeight: "55vh"}}>
            <h1 style={{ color: "#93b2f1" }} className="mt-10 mb-10 sm:text-4xl text-2xl font-bold title-font text-center">Requests Sent</h1>
            {renderRequestSent()}
        </div>
    )
}
