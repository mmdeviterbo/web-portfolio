import React, { ReactElement } from 'react'
import ElbidsProject from './elbids'
import AnalyticaProject from './analytica'
import UpQuizProject from './upquiz'
import DashlabsProject from './dashlabs'

export default function Projects(): ReactElement {
    return (
        <>
            <p className='project-text' id="project-text-id">Projects</p>
            <ElbidsProject/>
            <AnalyticaProject/>
            <DashlabsProject/>
            <UpQuizProject/>
        </>
    )
}
