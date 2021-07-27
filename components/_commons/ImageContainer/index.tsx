import React, { ReactElement } from 'react'
import Image from 'next/image'
export default function IconContainer({
    imageSrc,
    caption
} :{ 
    imageSrc : any
    caption : string 
}) : ReactElement {
    return (
        <div className="iconContainer">
            <div className="icon-content"> 
                <Image src={imageSrc} alt="#" />
            </div>
            <p> {caption} </p>
        </div>
    )
}
