import React from 'react'
import HomeFooter from './HomeFooter/HomeFooter'
import HomeHeader from './HomeHeader/HomeHeader'
import Background from '../../assets/images/user_background_2.png';

export default function HomeTemplate(props) {
    const { Component } = props
    
    return (
        <div style={{backgroundImage: `url('${Background}')`, backgroundSize: "cover"
}}>
            <HomeHeader/>
            <Component />
            <HomeFooter/>
        </div>

    )
}
