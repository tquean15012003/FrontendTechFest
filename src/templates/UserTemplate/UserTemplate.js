import React from 'react'
import Background from '../../assets/images/user_background.png';

export default function UserTemplate(props) {
    const { Component } = props
    return (
        <div style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }} className="w-screen h-screen">
            <div className="bg-black/20 w-screen h-screen">
                <Component />
            </div>
        </div>

    )
}
