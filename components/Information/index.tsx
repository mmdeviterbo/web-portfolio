import React, { ReactElement } from 'react'
import InformationDesktop from './informationDesktop'
import InformationTabletMobile from './informationTabletMobile'

export default function Information() : ReactElement {
  return(
    <>
      <div id={'informationDesktop'}> <InformationDesktop /> </div>
      <div id={'informationTabletMobile'}> <InformationTabletMobile /> </div>
    </>
  )
}
