/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Neel Shah",
  title: "Hi Everyone, Neel here!",
  subTitle: emoji(
    "A passionate AI/ML enthusiast 🧠 with a strong foundation in Python, NLP, and Deep Learning along with knowledge of Full Stack development using Angular, Reactjs, etc , driven by a love for building intelligent systems and pushing the boundaries of technology through innovative projects and research."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1dwEMdyU0aGVcFMmzovXPsIYwOjIurir9/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Neel-Shah-29",
  linkedin: "https://www.linkedin.com/in/neel-shah-209997212/",
  gmail: "neelshah29042002@gmail.com",
  gitlab: "https://gitlab.com/neelshah29042002",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "A COMBO OF CRAZY MACHINE LEARNING ENGINEER WHO EXPLORES ALL THE PROBLEMS FROM DEEP LEARNING TO NLP SPACE AND FULL STACK DEVELOPER WHO IS CONTINUOUSLY LEARNING NEW TECHNOLOGIES !",
  skills: [
    emoji(
      "⚡ Develop highly optimised solutions to real life problems, rather it be linguistic problems, model optimization problems or development problems"
    ),
    emoji("⚡ Using Machine learning and generative AI to develop solutions in various datathons, do extensive research and try new solutions"),
    emoji("⚡ Progressive Web Applications using various reactive components and latest development tools."),
    emoji("⚡ Integration of third party services such as Firebase and AWS."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      "skillName": "Python",
      "fontAwesomeClassname": "fab fa-python"
    },
    {
      "skillName": "C++",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "Java",
      "fontAwesomeClassname": "fab fa-java"
    },
    {
      "skillName": "NumPy",
      "fontAwesomeClassname": "fas fa-square-root-alt"
    },
    {
      "skillName": "Matplotlib",
      "fontAwesomeClassname": "fas fa-chart-line"
    },
    {
      "skillName": "Pandas",
      "fontAwesomeClassname": "fas fa-database"
    },
    {
      "skillName": "TensorFlow",
      "fontAwesomeClassname": "fas fa-brain"
    },
    {
      "skillName": "PyTorch",
      "fontAwesomeClassname": "fas fa-brain"
    },
    {
      "skillName": "Keras",
      "fontAwesomeClassname": "fas fa-brain"
    },
    {
      "skillName": "GCP",
      "fontAwesomeClassname": "fab fa-google"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Angular",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Django",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "Flask",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Mongo-DB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Veermata Jijabai Technological Institute(VJTI), Mumbai",
      logo: require("./assets/images/VjtiLogo.png"),
      subHeader: "Bachelor of Technology in Computer Science",
      duration: "June 2020 - June 2024",
      desc: "Completed by Bachelor of Technology and participated in the research under machine learning, NLP and Explainable AI.",
      descBullets: [
        "Done several research projects independently and in a group resulting in several wins in hackathons and datathons.",
        "Mentored a team of juniors under society of Robotics and Automation.",
      ]
    },
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Machine Learning", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    
    {
      Stack: "Natural Language Processing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Testing and Automation",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Developer",
      company: "Bank Of New York",
      companylogo: require("./assets/images/bnyLogo.jpeg"),
      date: "Aug 2024 – Present",
      desc: "Building interesting technological solutions for bank.",
      descBullets: [
        "Working with Mellon IT distribution services team to enhance the Distribution Request Tracker windows application to Angular.",
        "Working with Private Site team to resolve the vulnerabilities faced by customers on compliance site."
      ]
    },
    {
      role: "Summer@EPFL Research Intern",
      company: "EPFL",
      companylogo: require("./assets/images/epflLogo.jpeg"),
      date: "May 2024 – Present",
      desc: "Selected among 75 fellows through Summer@EPFL program with acceptance rate of 1.5%",
      descBullets: [
        "1. Working on Aiflows: https://github.com/epfl-dlab/aiflows. Specifically implemented code for running flows on your own local server.",
        "2. Research Question: Would doing reward conditioning/critique generation before the model response improve the training results?",
        "3. Will competitive programming questions benefit from reward conditioning before training? Can we use the critique as the feedback for code debug flow?"
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Gloroots",
      companylogo: require("./assets/images/glorootsLogo.png"),
      date: "Jan 2024 – Jul 2024",
      desc: "",
      descBullets: [
      "Develop and refine components of job and resume parsers using LLMs and NLP techniques. Develop recommendation algorithms/engines to find ideal jobs for candidates & vice versa.",
      "Develop production APIs to deploy your AI/ML models in Python (Flask/Django/FastAPI). Participate in the full software development life cycle, from design to deployment."
      ]
    },
    {
      role: "Open Source Developer",
      company: "CERN",
      companylogo: require("./assets/images/CERNlogo.png"),
      date: "May 2022 – Oct 2023",
      desc: "Selected as google summer of code contributer",
      descBullets: [
      "Development of a fast inference system in TMVA, called SOFIE, that takes ONNX model as input and produces compilation-ready standalone C++ scripts as output.",
      "Focuses on development of some missing deep learning operations which will allow to build more complex networks within TMVA and also to write the corresponding unit tests need to validate the written code."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
      {
        title: "Google Summer of Code",
        subtitle:
          "Google Summer Of Code Open Source Contributer in 2022 and 2023 under CERN HSF.",
        image: require("./assets/images/GsocLogo.png"),
        imageAlt: "Google Code-In Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://drive.google.com/file/d/1AS-67Ko3jmojtqboztCdV8nW8qK5EXzF/view?usp=sharing"
          },
          {
            name: "Project Information",
            url: "https://summerofcode.withgoogle.com/archive/2022/projects/vEuHzl6G"
          }
        ]
      },
    {
      title: "Summer@EPFL",
      subtitle:
        "Conducted extensive research at Data science laboratory and Machine Learning for Education Laboratory.",
      image: require("./assets/images/Summerepfl.jpeg"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "ML4ED",
          url: "https://www.epfl.ch/labs/ml4ed/"
        },
        {
          name: "Dlab",
          url: "https://dlab.epfl.ch/"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://gist.github.com/Neel-Shah-29/b2c22b07025c72496fe3dbe1fb0b1cbb",
      title: "GSOC 2023",
      description:
        "Describes my work under Google Summer Of Code 2023."
    },
    {
      url: "https://gist.github.com/Neel-Shah-29/d41472a568f9e8430da0ca1249777bf6",
      title: "How to run AIFlows library on your local server",
      description:
        "Making calls to Aiflows using Litellm on your server!."
    },
    {
      url: "https://gist.github.com/Neel-Shah-29/ea1efde4dd5a51522f4aeb77b7e1fe12",
      title: "GSOC 2022",
      description:
        "Describes my work under Google Summer Of Code 2022."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Presentation at EPFL",
      subtitle: "Major Slides about my research",
      slides_url: "https://docs.google.com/presentation/d/1TQ0BpIJ07XvgSYjVnLrKgxYaxeBVcRRi/edit?usp=sharing&ouid=109497452191403493045&rtpof=true&sd=true",
    },
    {
      title: "Presentation at CERN",
      subtitle: "Major Slides about my contribution",
      slides_url: "https://docs.google.com/presentation/d/1joPFbHil4pI5N9Azk1lfNMvFwNdJB6H95Ihhni1jGw0/edit?usp=sharing",
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-0000000000",
  email_address: "saadpasta70@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
