import React, { ReactElement } from 'react'
import Link from 'next/link';
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
                <Link href="/">
                    <a className="contact">Contact</a>
                </Link>
                <div className="menu-icon-container">
                    <i className="fa fa-lg fa-bars"></i>
                </div>
            </div>
        </div>
    )
}
