import React from 'react'
import AdminHomeFooter from './AdminHomeFooter/AdminHomeFooter'
import AdminHomeHeader from './AdminHomeHeader/AdminHomeHeader'
import Background from '../../assets/images/user_background_2.png';

export default function AdminHomeTemplate(props) {
    const { Component } = props

    return (
        <div style={{
            backgroundImage: `url('${Background}')`, backgroundSize: "cover"
        }}>
            <AdminHomeHeader />
            <Component />
            <AdminHomeFooter />
        </div>
    )
}