import React, { ReactElement } from 'react'
import Image from 'next/image'
import graphqlIcon from './../public/assets/graphqlIcon.png'

export default function GraphqlIcon() : ReactElement {
    return <Image src={graphqlIcon} alt="#"/>
}
