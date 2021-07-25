import React, { ReactElement } from 'react'
import Head from 'next/head'

export default function HomeTitle(): ReactElement {
    return (
        <>
            <Head><title> Portfolio </title></Head>
            <div className="gradient-circle"></div>
            <div className="home-title-container">
                <p>
                    Design-driven 
                    <br/>
                    <span> 
                        development of 
                    </span>
                    <br/> 
                    web products
                </p>
            </div>
        </>
    )
}
