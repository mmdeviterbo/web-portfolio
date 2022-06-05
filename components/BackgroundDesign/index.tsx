import React, { ReactElement, useEffect } from 'react'
import gsap from 'gsap'

export default function BackgroundDesign() : ReactElement {
  
  const randomIntFromInterval=(min, max)=> { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  useEffect(()=>{
    for(let i=0;i<10;i++){
      gsap.to(`#fly-logos-${i}`,{
        x: randomIntFromInterval(-10, 700) * randomIntFromInterval(-1, 1),
        y: randomIntFromInterval(-10, 1400) * randomIntFromInterval(-1, 1),
        duration: 200,
        repeat: -1
      })
    }
  },[])

  const randomStyle=()=>{
    return{
      top: randomIntFromInterval(10, 500),
      left: randomIntFromInterval(20, 1000),
    }
  }

  return(
    <div className="bgd-main">
      {Array.from(Array(10).keys()).map((index: number)=><img key={index} src="/assets/logo.png" id={`fly-logos-${index}`} style={randomStyle()}/>)}
    </div>
  )
}
