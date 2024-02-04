import { whitehatjr, ket, neu, sits } from "../assets/images";
import {
    contact,
    css,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    nodejs,
    react,
    redux,
    tailwindcss,
    c,
    eclipse,
    firebase,
    anaconda,
    intellij,
    java,
    mysql,
    python,
    r,
    rstudio,
    sqlite,
    vscode,
    androidstudio,
    meeting,
    teacher,
    vinyl,
    n, 
    twitter,
    typescript,
    logo,


} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },

    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },

    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },

    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: anaconda,
        name: "Anaconda Navigator",
        type: "Framework",
    },
    {
        imageUrl: c,
        name: "C++",
        type: "Backend",
    },
    {
        imageUrl: eclipse,
        name: "Eclipse IDE",
        type: "IDE",
    },
    {
        imageUrl: firebase,
        name: "Firebase",
        type: "Database",
    },
    {
        imageUrl: intellij,
        name: "IntelliJ IDE",
        type: "IDE",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Backend",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: r,
        name: "R",
        type: "Data Analysis",   
    },
    {
        imageUrl: rstudio,
        name: "RStudio IDE",
        type: "IDE",
    },
    {
        imageUrl: sqlite,
        name: "SQLite",
        type: "Database",
    },
    {
        imageUrl: vscode,
        name: "Visual Studio Code",
        type: "IDE",
    },
    {
        imageUrl: androidstudio,
        name: "Android Studio",
        type: "IDE",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },

];

export const experiences = [
    {
        title: "Coding Instructor",
        company_name: "WhiteHat Education Pvt. Ltd.",
        icon: whitehatjr,
        iconBg: "white",
        date: "Sept 2020 - July 2021",
        points: [
            "Teaching programming to over 1000+ international students between grades 4 to 6 with remote 1:1 classroom setting and group sessions.",
            "Imparting foundational coding knowledge with concepts like loops and control statements as well as advanced coding concepts.",
            "Igniting a passion for coding through exciting projects in JavaScript, HTML, CSS, App Development, Dialogflow, Firebase, MIT Scratch and Thunkable.",
            "Designing and developing curriculum and lesson plans, while also grading quizzes and project submissions.",
            "Maintaining a teacher rating of 5.0/5.0 with 97% attendance.",
        ],
    },
    {
        title: "Web Development Intern",
        company_name: "KET Infotech Pvt. Ltd.",
        icon: ket,
        iconBg: "white",
        date: "Sept 2019 - Oct 2019",
        points: [
            "Designing and developing three interactive websites for the company showcasing their services using web development frameworks.",
            "Developing and maintaining web applications using HTML, CSS, Bootstrap, JavaScript, AngularJS and Struts.",
            "Collaborating with cross-functional teams including other interns, senior developers, team leaders and managers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },

];

export const education = [
    {
        title: "M.S. Computer Science",
        uni_name: "Northeastern University",
        icon: neu,
        iconBg: "white",
        date: "Sept 2021 - Dec 2023",

    },
    {
        title: "B.E. Computer Science and Engineering",
        uni_name: "Sinhgad Institute of Technlogy and Science",
        icon: sits,
        iconBg: "white",
        date: "Sept 2016 - May 2020",

    },

];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ssaloni13',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/saloni-patil/',
    }
];

export const projects = [
    {
        iconUrl: logo,
        theme: 'btn-back-black',
        name: "Snapgram",
        description: 'Developed a full stack social media photo-sharing web application, with smooth and stylish UI. Similar to Instagram, users can upload a photo with caption, location and tags, as well as edit and delete the post. The users can also like/unlike and save/unsave posts. Users can follow other creators and see their posts on personal feed. Uses infinite scroll and refresh for better UX.',
        techstack: "TypeScript, React, Appwrite, HTML, Tailwind CSS, Vite",
        link: 'https://photogram-cxx8d7sps-ssaloni13s-projects.vercel.app/sign-in'
    },
    {
        iconUrl: vinyl,
        theme: 'btn-back-yellow',
        name: 'Vinyl Shop - Online Shopping Website',
        description: 'Developed a web application which allows the users to buy and sell vinyl records, as well as search for a record according to the song name, artist name, or genre. Also features add-to-cart and checkout, without payment getaway interface.',
        techstack: "HTML, CSS, JavaScript, React, NodeJS, Firebase",
        link: 'https://voluble-tanuki-375d22.netlify.app/home',
    },
    {
        iconUrl: twitter,
        theme: 'btn-back-blue',
        name: 'Full Stack Twitter Clone Website',
        description: 'Built a complete clone of Twitter, allowing users to share posts and follow others. Also features edit profile and following other users. Displays the feed with trending posts in a familiar social media environment.',
        techstack: "HTML, CSS, JavaScript, React, NodeJS",
        link: 'https://thunderous-seahorse-e91ca7.netlify.app/',
    },
    {
        iconUrl: n,
        theme: 'btn-back-red',
        name: 'NUvent Android App',
        description: 'Created an Android app for university clubs to post their upcoming events, with features like filtering by date, notificatoin for upcoming events, and location of the events. Has dual log-in feature for students to see the events and members to add their club events. Currently restricted to only Northeastern University, however the app can be modified to accomodate other schools, or even cities. Also features a past events section, past reviews and an option to sign up for the clubs mailing list.',
        techstack: "Java, Android Studio",
        link: 'https://github.com/ssaloni13/Mobile-finalproject',
    },
    {
        iconUrl: meeting,
        theme: 'btn-back-green',
        name: 'Smart Meeting Scheduling Android App',
        description: 'Designed and built a mobile app for remotely booking conference rooms. Notable features include 360° view of the room, navigation system, room recommendation based on Machine Learning and ChatBot. Features live Google location and review and rating system.',
        techstack: "Java, Android Studio, DialogFlow",
        link: "/projects",
    },
    {
        iconUrl: teacher,
        theme: 'btn-back-pink',
        name: 'TuitionMaster Android App',
        description: 'Created an app for students to view and book a class, and another app for tutors to add classes and modify the details. Students enter their current educational level and the app automatically displays the appropriate courses.',
        techstack: "Java, Android Studio",
        link: '/projects',
    },

];