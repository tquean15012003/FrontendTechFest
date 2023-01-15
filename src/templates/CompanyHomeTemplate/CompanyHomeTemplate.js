import React from 'react'
import CompanyHomeFooter from './CompanyHomeFooter/CompanyHomeFooter'
import CompanyHomeHeader from './CompanyHomeHeader/CompanyHomeHeader'
import Background from '../../assets/images/user_background_2.png';

export default function CompanyHomeTemplate(props) {
    const { Component } = props

    return (
        <div style={{
            backgroundImage: `url('${Background}')`, backgroundSize: "cover"
        }}>
            <CompanyHomeHeader />
            <Component />
            <CompanyHomeFooter />
        </div>

    )
}
