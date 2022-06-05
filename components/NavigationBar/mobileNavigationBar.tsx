import React, { ReactElement, useState, Dispatch, SetStateAction } from 'react'
import Image from 'next/image';
import logo from './../../public/assets/logo.png'
import ContactDialog from './contactDialog';
import Dialog from '@material-ui/core/Dialog';
import { TransitionProps } from '@material-ui/core/transitions';
import Slide from '@material-ui/core/Slide';
import { Container } from '@material-ui/core';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function MobileNavigationBar({
  openMenu,
  setOpenMenu,
  open,
  setOpen,
}:{
  openMenu: boolean
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}) : ReactElement {
  return (
      <Dialog 
        fullScreen
        open={openMenu}
        onClose={()=>setOpenMenu(!openMenu)}
        TransitionComponent={Transition}
      >
        <div className="exit-button-container" onClick={()=>setOpenMenu(!openMenu)}>
          <i className="fa fa-times"/>
        </div>
        <Container maxWidth={false} className="mobile-nav-dialog">
          <p className="contact" 
              onClick={()=>{
                document.querySelector('#project-text-id').scrollIntoView({ behavior : 'smooth' })
                setOpenMenu(false)
              }
            }
          >
              PROJECTS
          </p>
          <p className="contact"
              onClick={()=>{
                  if(window.innerWidth <= 768) document.querySelector('#informationTabletMobile').scrollIntoView({ behavior : 'smooth' })
                  else document.querySelector('#informationDesktop').scrollIntoView({ behavior : 'smooth' })
                  setOpenMenu(false)
                }}
                  >
              ABOUT
          </p>
          
          <p className="contact" onClick={()=>setOpen(true)}>
              CONTACT
          </p>
        </Container>
      </Dialog>
    )
}
