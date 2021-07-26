import React, { ReactElement } from 'react'

export default function HomeTitle(): ReactElement {
    return (
        <>
            <div className="gradient-circle"></div>
            <div className="home-title-container">
                <p draggable={false}>
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
