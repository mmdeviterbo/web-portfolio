export enum PROJECT_TYPE{
  DASHLABS = "DASHLABS",
  ANALYTICA = "ANALYTICA",
  ELBIDS = "ELBIDS",
  UPQUIZ = "UPQUIZ"
}
export interface ProjectArg{
  tags: string,
  title: string,
  learning: string,
  link: string,
}

const elbidsLearning: string = `
Originally, ElBids is actually a Facebook group with over 14, 300+ UPLB members. The members are not fully authenticated so a number of \‘bogus\’ buyers exist during transactions.  The Facebook group was only effective at a certain time, but because of the large number of members, recent posts could pile up and can cover the older posts easily. Overall, the Facebook group is not actually made for e-commerce systems such as buy-and-sell and bidding of items. This introduces me to create an official web application that has proper user interfaces, authentication of members, and transaction history.
<br/>
I (solo thesis project) used ReactJS-NextJS for better optimization on the client-side. I used Apollo-GrapQL to handle referenced data from many collections/tables, to avoid repeated/nested requests, and to only return the necessary data needed on the client-side; hence, it fasten the request-response from client-server and vice-versa. Honestly, I also used this tech stack to experience building a project from scratch so that I can understand the tools in-depth.
<br/>
In the development phase of this project, I experienced so many challenges. Specifically, the dynamic polling (e.g. pollInterval) or how the polling works if the variables changes depending on what the user needs to view such as viewing different items. I also used polling in creating the chat/messaging feature which for me was a little confusing to build at first. Moreover, I experienced working with image optimization to load faster or fasten the request time on the client-side since most cameras nowadays take more than two megabytes in size. So I lowered the image\’s resolution and compress the image quality from 100% to 10% to shrink the image size; hence, it lowers the payload size and becomes faster during request-response calls. After refactoring the image optimization, I noticed that it was still slow enough to use. I learned that in deploying the application, the regions in which the client (Vercel), server (Heroku), and database (MongoDB) are deployed should be close to each other for faster response time. In addition, in making this project, it was difficult to build since the system has three different perspectives to consider (auctioneer, bidder, and administrator) plus the time constraints. Overall, it was fun and challenging to experience that I created a web application that must actually be done by a team with different roles with enough given time.
`

const analyticaLearning: string = `
Our project in one of our major courses was to provide a system. The team was the entire class (15 students) consisted of a project manager, a front-end team, and a back-end team. The main goal is to provide online access to materials such as theses, books, and journals. <br/>

Because of my experience prior to this project, I am assigned to be the project manager of the class. I thought being a project manager is handling different teams, organizing our weekly sprints, handling documents, and doing minimal coding. What really happened here was I also did a huge coding part on both sides (front-end and back-end) since my teammates were not familiar with web development. Being a project manager here was a difficult responsibility since I am the face of the team during our weekly sprint presentations so I need to make sure that all features required weekly are met on time. So for every feature that is not working/finished before our sprint presentation on either front-end or back-end, I was the one who was trying to save those. Also, I did the Software Requirements Specification (SRS) for the system. The SRS defines what the system is all about such as the features, system specifications, use case diagrams, and database schema. I also did the Gantt Chart and discuss it with the team regularly to track our progress from time to time. <br/>

For the challenges, we experienced some difficulties in handling the codes/repositories using Git. Some people forgot to switch to their branch and push it directly without prior notice. Some were not totally familiar with using Git so the changes made by others were affected and sometimes became missing. Moreover, there were features that are dependent on the other so if one team was not still finished, then the others cannot proceed with their tasks. The preplanning such as creating wireframes and schemas had made the development process lighter. Overall, this was the most challenging role since this was my first time working with a team and in a remote environment setup.
`
const dashlabsLearning: string =`
Dashlabs is a US-based company that handles laboratory tests locally and internationally. Here in the Philippines, as far as I remember, they handle the majority of the laboratory tests related to COVID-19. Their innovation made the results of the COVID-19 tests faster to access only by using a smartphone or computer which helps the government and Filipino people battle the pandemic. For the roles I did as a software engineer intern, we did some rotations so that we can experience every team’s roles and responsibilities. I did front-end development, quality assurance (QA) using Jest, and debugging/maintenance. <br/>
`

const upquizLearning: string = `
This was a project in one of my major courses, to develop a system that simply solves a problem in our environment. This consisted of three members but was only given a week to think, plan, develop, and deploy.

The system was all about an online platform for both teachers and students. The problem we noticed was that students only read the summarized PPT version of the lecture videos; hence, this was a disappointment to the teacher’s effort to produce quality lecture videos. Our solution was to provide a pop-up quiz on every timestamp of every lecture video. In this way, the students have no choice but to watch the videos and answer the pop-up item questions. Lastly, the teacher can view the scores of the students. We all know that this was a simple solution but must not be used for all classes since not all students have equal access to the Internet at all times. 

For the challenges, we were new to using NextJS here so we read a lot of documentation to learn for only a week, plus a simplified Software Requirements Specification (SRS) document. I also learned to use ChakraUI as our CSS-component library rather than using the common which are Material-UI and Bootstrap. Overall, the development of this mini-project was a fun and interesting experience, and if ever, we could extend the project more soon.
`



const projectValues: ProjectArg[] = [
  {
    tags:'E-Commerce, Buy and Sell, Social Interaction',
    title: 'ElBids: Online Auction System for UPLB Stakeholders',
    learning: elbidsLearning,
    link:'https://elbids.vercel.app'
  },
  {
    tags:'Library System, Books, Publication',
    title: 'Analytica: Online Library System',
    learning: analyticaLearning,
    link:'https://analytica-library.vercel.app'
  },
  {
    tags:'Healthcare, COVID-19, Laboratory Tests',
    title: 'Dashlabs.ai | Simplifying Healthcare',
    learning: dashlabsLearning,
    link:'https://accounts.dashlabs.app/'
  },
  {
    tags:'Blended Learning Platform, Online Classroom, Assessment',
    title: 'UpQuiz: Online Lecture & Assessment Platform',
    learning: upquizLearning,
    link:'https://upquiz.vercel.app/'
  },
]
export default projectValues





