import React, { ReactElement } from 'react'
import InformationDesktop from './informationDesktop'
import InformationTabletMobile from './informationTabletMobile'

export default function Information() : ReactElement {
  return(
    <>
      <div id={'informationTabletMobile'}> <InformationTabletMobile /> </div>
      <div id={'informationDesktop'}> <InformationDesktop /> </div>
    </>
  )
}
