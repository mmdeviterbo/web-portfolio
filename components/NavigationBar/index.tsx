import React, { ReactElement } from 'react'
import Image from 'next/image';
import logo from './../../public/assets/logo.png'

export default function Nav() : ReactElement {
    return (
        <div id="nav-container" draggable={false}>
            <div id="nav-container-start">
                <Image src={logo} alt="Logo" height={40} width={40} id="logo" draggable={false}/>
                <p>DE VITERBO</p>
            </div>

            <div id="nav-container-end">
                <a className="contact" 
                    onClick={()=>document.querySelector('#project-text-id').scrollIntoView({ behavior : 'smooth' })}
                >
                    PROJECTS
                </a>
                <a className="contact"
                    onClick={()=>{
                        if(window.innerWidth <= 768) document.querySelector('#informationTabletMobile').scrollIntoView({ behavior : 'smooth' })
                        else document.querySelector('#informationDesktop').scrollIntoView({ behavior : 'smooth' })
                    }}
                        >
                    ABOUT
                </a>
                
                <a className="contact">
                    CONTACT
                </a>
                
                <div className="menu-icon-container">
                    <i className="fa fa-lg fa-bars"/>
                </div>
            </div>
        </div>
    )
}
