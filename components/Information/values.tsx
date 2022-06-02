import React, { ReactElement } from 'react'

export interface InformationPersonArgs{
  title : string,
  value : string,
  icon : ReactElement
}

export interface TechStackArgs{
  title : string,
  icon : any,    //image type
}

export interface InformationTechStackArgs{
  title : string,
  value : TechStackArgs[]
}

import FaceIcon from '@material-ui/icons/Face';
import SchoolIcon from '@material-ui/icons/School';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';

import apollographqlIcon  from './../../public/assets/frameworksIcon/apollographqlIcon.png';
import nextJSIcon  from './../../public/assets/frameworksIcon/nextJSIcon.png';
import nodeJSIcon  from './../../public/assets/frameworksIcon/nodeJSIcon.png';
import reactJSIcon from './../../public/assets/frameworksIcon/reactJSIcon.png';
import mongodbIcon from './../../public/assets/frameworksIcon/mongodbIcon.png';
import typescriptIcon from './../../public/assets/frameworksIcon/typescriptIcon.png';
import bootstrapIcon from './../../public/assets/frameworksIcon/bootstrapIcon.png';
import gsapIcon from './../../public/assets/frameworksIcon/gsapIcon.png';
import cssIcon from './../../public/assets/frameworksIcon/cssIcon.png';
import tailwindIcon from './../../public/assets/frameworksIcon/tailwindIcon.png';
import sassIcon from './../../public/assets/frameworksIcon/sassIcon.png';
import mysqlIcon from './../../public/assets/frameworksIcon/mysqlIcon.png';

export const informationPerson : InformationPersonArgs[] = [
  { 
    title : 'Name', 
    value : 'Marty de Viterbo', 
    icon : <FaceIcon fontSize={'large'} style={{color: 'white' }}/> 
  },
  { 
    title : 'Degree', 
    value : 'A Magna Cum Laude graduate of BS Computer Science', 
    icon : <SchoolIcon fontSize={'large'} style={{color: 'white' }}/> 
  },
  { 
    title : 'College',
    value : 'University of the Philippines Los Baños',
    icon : <AccountBalanceIcon fontSize={'large'} style={{color: 'white' }}/> 
  },
  { 
    title : 'Location',
    value : 'Manila, Philippines',
    icon : <HomeWorkIcon fontSize={'large'} style={{color: 'white' }}/> }
]

export const informationTechStack: InformationTechStackArgs[] = [
  { 
    title : 'Frontend',
    value : [ 
        { title : 'ReactJS', icon : reactJSIcon }, 
        { title : 'NextJS', icon : nextJSIcon } 
    ]
  },
  { 
    title : 'Backend',
    value : [ 
        { title : 'NodeJS', icon : nodeJSIcon }, 
        { title : 'Typescript', icon : typescriptIcon } ,
        { title : 'GraphQl', icon : apollographqlIcon } ,
    ]
  },
  { 
    title : 'Database',
    value : [ 
      { title : 'MongoDB', icon : mongodbIcon },
      { title : 'MySql', icon : mysqlIcon },
    ]
  },
  { 
    title : 'Style',
    value : [ 
        { title : 'CSS', icon : cssIcon },
        { title : 'Sass', icon : sassIcon },
        { title : 'Bootstrap', icon : bootstrapIcon },
        { title : 'Tailwind', icon : tailwindIcon },
        { title : 'Gsap', icon : gsapIcon },
    ]
  },
]