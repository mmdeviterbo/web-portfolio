import React, { ReactElement, useState } from 'react'
import Image from 'next/image';
import logo from './../../public/assets/logo.png'
import ContactDialog from './contactDialog';
import MobileNavigationBar from './mobileNavigationBar';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';

export default function Nav() : ReactElement {
    const [open, setOpen] = useState(false)
    
    //mobile
    const [openMenu, setOpenMenu] = useState(false)

    return (
        <>
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
                    
                    <a className="contact" onClick={()=>setOpen(true)}>
                        CONTACT
                    </a>

                    <IconButton 
                        className="menu-icon-container" onClick={()=>setOpenMenu(true)}
                    >
                        <MenuIcon />
                    </IconButton>
                </div>
            </div>
            <ContactDialog open={open} setOpen={setOpen}/>
            <MobileNavigationBar openMenu={openMenu} 
                setOpenMenu={setOpenMenu}
                open={open}
                setOpen={setOpen}
            />

        </>
    )
}
