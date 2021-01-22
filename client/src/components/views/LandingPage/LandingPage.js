import React from 'react'
import Img from './chat.png'

function LandingPage() {
    return (
        <>
        <div className="app">
            <img src={Img} style={{ fontSize: '4rem' }} /><br />
            <span style={{ fontSize: '2rem' }}>Sistema de Mensajería</span>
        </div>
        <div style={{ float:'right' }}></div>
        </>
    )
}

export default LandingPage
