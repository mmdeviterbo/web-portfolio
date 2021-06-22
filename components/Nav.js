import React from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic'

import { loadAnimation } from "lottie-web";
import { defineLordIconElement } from "lord-icon-element";

// register lottie and define custom element
defineLordIconElement(loadAnimation);

const DynamicComponent = dynamic(() => import('lottie-web'))


export default function Nav() {
    return (
        <div id="nav-container">
            <div id="nav-container-end">
                <Link href="/">
                    <a className="concat">Contact</a>
                </Link>
                <div className="menu-icon-container">
                    <DynamicComponent/>
                    <script src="https://cdn.lordicon.com/libs/frhvbuzj/lord-icon-2.0.2.js"/>
                    <lord-icon
                        src="https://cdn.lordicon.com/wgwcqouc.json"
                        trigger="click"
                        colors="primary:#ffffff,secondary:#ffffff"                        
                        stroke="78"
                        delay="100">
                    </lord-icon>
                </div>
            </div>
        </div>
    )
}
