import React, { ReactElement } from 'react'
import InformationDesktop from './informationDesktop'
import InformationTabletMobile from './informationTabletMobile'

// information.tsx style is in "styles" directory
// informationTabletMobile.tsx style is in "styles.ts" in the current directory
// informationDesktop.tsx style is in "styles.ts" in the current directory

export default function Information() : ReactElement {
  return(
    <>
      <div id={'informationTabletMobile'}> <InformationTabletMobile /> </div>
      <div id={'informationDesktop'}> <InformationDesktop /> </div>
    </>
  )
}
