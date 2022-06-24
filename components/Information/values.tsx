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
import chakraIcon from './../../public/assets/frameworksIcon/chakraIcon.png';
import figmaIcon from './../../public/assets/frameworksIcon/figmaIcon.png';
import restIcon from './../../public/assets/frameworksIcon/RESTIcon.png';
import githubIcon from './../../public/assets/frameworksIcon/githubIcon.png';
import materialIcon from './../../public/assets/frameworksIcon/materialIcon.png';
import gmailIcon from './../../public/assets/frameworksIcon/gmailIcon.png';
import linkedinIcon from './../../public/assets/frameworksIcon/linkedinIcon.png';

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
        { title : 'Typescript', icon : typescriptIcon } ,
        { title : 'NodeJS', icon : nodeJSIcon }, 
        { title : 'GraphQl', icon : apollographqlIcon } ,
        { title : 'REST', icon : restIcon } ,

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

export const otherTechStack: InformationTechStackArgs[] = [
  { 
    title : 'Others',
    value : [ 
        { title : 'Chakra', icon : chakraIcon },    //0
        { title : 'Figma', icon : figmaIcon },      //1
        { title : 'REST', icon : restIcon },    //2
        { title: 'Material', icon: materialIcon},   //3
        { title: 'LinkedIn', icon: linkedinIcon},   //4
        { title: 'GitHub', icon:githubIcon},        //5
        { title: 'Gmail', icon: gmailIcon},         //6
    ]
  }
]
