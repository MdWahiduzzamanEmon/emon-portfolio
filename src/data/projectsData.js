import eight from '../assets/svg/projects/eight.svg'
import five from '../assets/svg/projects/five.svg'
import four from '../assets/svg/projects/four.svg'
import one from '../assets/svg/projects/one.svg'
import seven from '../assets/svg/projects/seven.svg'
import six from '../assets/svg/projects/six.svg'
import three from '../assets/svg/projects/three.svg'
import two from '../assets/svg/projects/two.svg'

import Watchbox from '../assets/ProjectsImage/watchbox.png';
import scheduler from '../assets/ProjectsImage/scheduler.png';
import facelove from '../assets/ProjectsImage/fetchLove.png';
import gDesk from '../assets/ProjectsImage/GDesk.png';
import FTA from '../assets/ProjectsImage/FTA.png';
import volunter from '../assets/ProjectsImage/volunter.png';
import Elite from '../assets/ProjectsImage/Elite.png';
import Medics from '../assets/ProjectsImage/Medics.png';
import npm from '../assets/ProjectsImage/npm.png';


export const projectsData = [
    {
        id: 1,
        projectName: 'WatchBox',
        projectDesc: 'This project is a watch shop, Customer can be buy product and manage them and make payment.',
        tags: ["React js",
            "Material UI",
            "Axios",
            "JWT",
            "Firebase",
            "MongoDB Atlas",
            "Node js",
        ],
        code: 'https://github.com/MdWahiduzzamanEmon/WatchBox-client',
        demo: 'https://watch-box-eb445.web.app/',
        image: Watchbox,
        type: "Personal"
    },
    {
        id: 4,
        projectName: 'Ghorami Desk',
        projectDesc: 'This is a large scale project. This is a web application for a freelancer of Ghorami. This project is a full stack project. I have done this project from scratch in the frontend.',
        tags: ['React', "Material UI", "React Router", "Axios", "Socket.io", "DND"],
        code: null,
        demo: 'https://gdesk.ghorami.com/',
        image: gDesk,
        type: "Professional"
    },
    {
        id: 5,
        projectName: 'Foreign Trade Agreement (FTA)',
        projectDesc: 'This project is for the Ministry of Commerce. This project is a full stack project. I have done this project from scratch in the frontend.',
        tags: ['React', 'React Bootstrap', 'PHP', 'MySQL', 'Axios'],
        code: null,
        demo: 'https://fta.gov.bd/',
        image: FTA,
        type: "Professional"
    },
    {
        id: 2,
        projectName: 'Scheduler',
        projectDesc: 'This project is a scheduler, Customer can be book a service and manage them.',
        tags: ['React', 'Material Ui'],
        code: 'https://github.com/MdWahiduzzamanEmon/Scheduler-UI-R-R',
        demo: 'https://simple-firebase-authenti-63acb.web.app/',
        image: scheduler,
        type: "Personal"
    },
    {
        id: 8,
        projectName: 'MEDICS-100-pure-Pharmacy',
        projectDesc: 'This is a simple pharmacy project. User can by product and manage their product list.Also user can be manage their order list, hire doctor and manage their doctor list.',
        tags: ['React', 'React Bootstrap', 'Firebase'],
        code: 'https://github.com/MdWahiduzzamanEmon/MEDICS-100-pure-Pharmacy.-',
        demo: 'https://medics-fd9e7.web.app/',
        image: Medics,
        type: "Personal"

    },
    {
        id: 3,
        projectName: 'Fetch Love',
        projectDesc: 'This is a simple chatting app. User can be login with google and chat with other user.',
        tags: ['React',
            "React Bootstrap",
            "Web-Socket",
            "Firebase",
            "Node js",
            "Express js"],
        code: 'https://github.com/MdWahiduzzamanEmon/FetchLove-client',
        demo: 'https://fetchlove.web.app/',
        image: facelove,
        type: "Personal"
    },
    {
        id: 6,
        projectName: 'Volunteer Network',
        projectDesc: 'This is a volunteer network project. User can be register as a volunteer and can be manage their volunteer list.',
        tags: ['React', 'React Bootstrap', 'MongoDB', 'Node js', 'Express js'],
        code: 'https://github.com/MdWahiduzzamanEmon/volunteer-network',
        demo: 'https://vounteer-networks.web.app/',
        image: volunter,
        type: "Personal"
    },
    {
        id: 7,
        projectName: 'Elite Academy',
        projectDesc: 'This is a simple academy project. User can be register as a student and can be manage their course list.',
        tags: ['React', 'React Bootstrap'],
        code: 'https://github.com/MdWahiduzzamanEmon/Elite-Academy',
        demo: 'https://elite-academy-react-project.netlify.app/',
        image: Elite,
        type: "Personal"
    },
    {
        id: 9,
        projectName: 'Dymanic Nested Table',
        projectDesc: 'This is an open source project. This is a dynamic nested table to create a hight level table and filter column.',
        tags: ['React'],
        code: null,
        demo: 'https://www.npmjs.com/package/react_dynamic_nested_table',
        image: npm,
        type: "OpenSource"
    }   
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    code: '',
    demo: '',
    image: ''
}, 
*/