import React, { ReactElement, Fragment } from 'react'
import ImageContainer from '../_commons/ImageContainer'
import { otherTechStack } from '../Information/values'

export default function ContactSection(): ReactElement {
    const LINKEDIN_LINK: string = `https://www.linkedin.com/in/marty-de-viterbo-4561741bb`
    const GITHUB_LINK: string = `https://github.com/mmdeviterbo`
    const GMAIL_LINK: string = `https://mail.google.com/mail/u/0/?fs=1&to=mmdeviterbo@up.edu.ph&su=APPLICATION&body=Hello!&tf=cm`

    return (
        <div className="contact-section-container">
          <div onClick={()=>window.open(LINKEDIN_LINK, '_blank').focus()}>
            <ImageContainer imageSrc={otherTechStack[0].value[4].icon} caption={otherTechStack[0].value[4].title}/>
          </div>
  
          <div onClick={()=>window.open(GITHUB_LINK, '_blank').focus()}>
            <ImageContainer imageSrc={otherTechStack[0].value[5].icon} caption={otherTechStack[0].value[5].title}/>
          </div>

          <div onClick={()=>window.open(GMAIL_LINK, '_blank').focus()}>
            <ImageContainer imageSrc={otherTechStack[0].value[6].icon} caption={otherTechStack[0].value[6].title}/>
          </div>

        </div>
    )
}
