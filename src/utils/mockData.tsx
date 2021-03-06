import { createDefaultSocialLinks } from './socialLinksInfo';
import { UserData } from 'models/user.models';

export const initialUserDataState: UserData = {
  fullName: '',
  userName: '',
  isPublic: false,
  bio: 'Brag about yourself here',
  shortDescriptions: ['', ''],
  actionButtonText: 'Call to action for ineraction',
  countryOfResidence: 'Bulgaria',
  resumeUrl: 'http://ipv4.download.thinkbroadband.com/5MB.zip',
  imageURL: 'https://source.unsplash.com/random',
  social: createDefaultSocialLinks(),
  experiences: [],
  education: [],
  techSkills: [],
  softSkills: [],
  interests: [],
  testimonials: [],
  portfolio: [],
};

export const demoUserData: UserData = {
  ...initialUserDataState,
  isPublic: true,
  userName: 'peshko',
  fullName: 'Peshko In The House',
  bio:
    'Hi I am Akshay Saini, a 25 year old Web developer, YouTuber, and a Digital Marketer living in Hyderabad, India. I am a Computer Science Engineer, currently working with awesome folks at Uber. Have a look at my YouTube Channel, skills or just connect with me on LinkedIn. I am always excited to do business with like minded people, lets discuss over coffee.',
  shortDescriptions: ['I am unique', 'I am amazing', 'I am ... '],
  actionButtonText: 'Coffee with me',

  countryOfResidence: 'Bulgaria',

  social: {
    facebook: 'tim.baker.906',
    linkedin: 'tim-baker-8420009a/',
    instagram: 'tbakerx',
    'stack-overflow': '8553186/tim-baker',
    github: 'tbakerx',
  },

  experiences: [
    {
      id: 1,
      companyName: 'Shop Your Own Mortgage',
      jobTitle: 'Engineer',
      jobDescription:
        'full stack software engineer across the range of our products, as well being our lead security specialist',
      companyLogo: '.jpg',
      startDate: new Date(2021, 8),
      endDate: null,
    },
    {
      id: 2,
      companyName: 'City of Fort St. John',
      jobTitle: 'Utility Maintenance Technician 1 / Labourer ',
      startDate: new Date(2014, 4),
      endDate: new Date(2017, 9),
      companyLogo: '.',
      jobDescription:
        "Working for the City of Fort St. John has given me a solid understanding of a city's infrastructure system and what it takes to keep the things working that we take for granted every day. During my time here I have worked in all roles involved in the Water and Sewer Department, with the exception of equipment operating. I worked as a water meter technician programming the meters in people's homes. I worked in location, excavation, installation and repair of water and sewer lines. I learned how to install, dismantle, troubleshoot, and repair the most popular models of fire hydrants. \n\nWhile working for the Water Treatment and Distribution Department, and alongside one partner, we led the first Uni-Directional Flow program our city has done in years. This requires a thorough understanding of the city's water grid to selectively force excessive pressure through a water line in order to clean it. This must be done in a specific order for every line in the city.   ",
    },
  ],
  education: [
    {
      school: 'University of Victoria',
      degree: 'Bachelors in Computer Science, Software Engineering Option',
      graduated: 'Expected April 2018',
      description:
        'Under the recommendation and Guidance of the Head Coach of the UVIC soccer team, I transferred to the University of Victoria. Here I took my Bachelors of Computer Science with a Software Engineering Specialty and achieved a much more thorough education in the underlying theory, concepts, and science behind more complex programming. It was here that I discovered my passion for scalable application programming (web and mobile), the security behind computer and application systems, and found that I have a knack for understanding complex algorithms.',
    },
    {
      school: 'Grande Prairie Regional College',
      degree: 'Computer Systems Technology',
      graduated: 'April 2013',
      description:
        'I attended GPRC for my first 2 years of post-secondary on a scholarship for the college soccer team. While here, I studied Computer Systems Technology, a 2 year lead-in to a Bachelors of Computer Science. This was a very hands-on experience focused more on building projects than general theory. Here I built database structures for fictional companies, created small video games, hand-coded Space Invaders from scratch in Assembly Language, built and coded an Arduino Robot to navigate obstacle courses, a lot of Java and C++ programming for data structures, and much more.',
    },
  ],
  techSkills: [
    {
      id: 1,
      name: 'Git',
      description:
        'I use Git for all of my projects so far. I have used Git for version control in small teams and have toyed around with contributing to Open Source Projects.',
      level: 88,
    },
    {
      id: 2,
      name: 'Java',
      description:
        'Java was my first programming language that I started using in college years ago. It is by far the language I am most familiar with in terms of data-structure and algorithm programming.',
      level: 88,
    },
    {
      id: 3,
      name: 'React Js',
      description:
        'I am fairly new to React and really did not like it at first. It has grown on me though and I will continue to use it going forward. I have built a ReactJS based resume-website template (link below in portfolio) which I used as a starting point for this personal site.',
      level: 88,
    },
    {
      id: 4,
      name: 'Meteor JS',
      description:
        "I enjoy MeteorJS for it's ease of configuration and its ability to get a full stack prototype up and running quickly. I used MeteorJS in a team for a Startup Programming class in UVIC in conjunction with React to build the MVP for Smirkspace (below in portfolio)",
      level: 88,
    },

    {
      id: 5,
      name: 'Node JS',
      description:
        'Node JS is my server-side scripting language of choice. The bulk of my experience with it has been in conjunction with MeteorJS-based projects',
      level: 88,
    },
    {
      id: 6,
      name: 'Bootstrap 4',
      description:
        'I use Bootstrap more often than not when designing the layout for my sites. It is the framework I am most familiar with and can therefore design more quickly than with others.',
      level: 88,
    },
    {
      id: 7,
      name: 'MongoDB',
      description:
        'I have used many different database systems and am better educated and experienced with Relational Databases. However, for many applications, the ease of use of MongoDB better suits my needs and it is much more enjoyable to work with',
      level: 88,
    },
  ],
  softSkills: [
    {
      id: 1,
      name: 'Heroku',
      description:
        'I use Heroku as my hosting platform for most of my projects because so far they are all unpaid and their free tier is convenient. I also appreciate its integration with Github for such simple deployment.',
      level: 88,
    },
  ],
  interests: [
    { id: 1, name: 'Snowboarding', level: 100 },
    { id: 2, name: 'Driving', level: 98 },
    { id: 3, name: 'Football', level: 100 },
    { id: 4, name: 'React', level: 100 },
  ],
  portfolio: [
    {
      id: 1,
      title: 'Canadian Wanderlust',
      description: 'My Travel Blog for my post-university travels',
      imageUrl: 'canadian-wanderlust.jpg',
      projectUrl: 'https://www.canadianwanderlust.com',
    },
    {
      id: 2,
      title: 'Fury Fighting Gear',
      description: '(offline now) A fighting gear company I started',
      imageUrl: 'fury-fighting-gear.jpg',
      projectUrl: 'http://www.timbakerdev.com',
    },
    {
      id: 3,
      title: 'Original Thai Food',
      description: 'Website I built for a restaurant I like in Thailand',
      imageUrl: 'original-thai-food.jpg',
      projectUrl: 'https://original-thai-food.herokuapp.com/index.html',
    },
    {
      id: 4,
      title: 'Resume Website',
      description: 'A React based resume website template',
      imageUrl: 'resume-website.jpg',
      projectUrl: 'https://github.com/tbakerx/react-resume-template',
    },
    {
      id: 5,
      title: 'Smirkspace',
      description: '(MVP Only) A React and Meteor based chat University project.',
      imageUrl: 'smirkspace.jpg',
      projectUrl: 'http://www.smirkspace.com',
    },
  ],
  testimonials: [
    {
      text:
        'I have had the opportunity to work with Tim on multiple occasions which has always been a pleasure. He is driven and motivated with a consistently positive attitude. Tim excels at communicating with others and is always willing to work hard until he solves the problem at hand.',
      user: 'Alastair Beaumont - Web Developer at AppColony',
    },
  ],
};
