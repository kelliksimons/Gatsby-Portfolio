import React from 'react'
import {GiEarthAmerica} from 'react-icons/gi'
import {MdAirplanemodeActive, MdTimer, MdTitle} from 'react-icons/md'
import {FaMoneyCheck,FaLinkedin,FaGithubSquare} from 'react-icons/Fa'

export const StatsData = [
    {
        icon: (<GiEarthAmerica css={`color: #ff0000;`}/>),
        title: "Project Manager, Bank of America",
        desc: ""
    },
    {
        icon: (<MdTimer css={`color: #ffff00;`}/>),
        title: "Full Stack Engineer, Torch Developers",
        desc: ""
    },
    {
        icon: (<FaMoneyCheck css={`color: #3af576;`}/>),
        title: "Android Software Engineer, Xtern Software,Inc",
        desc: ""
    },
    {
        icon: (<FaGithubSquare css={`color: #FFF;`}/>),
        title: "Github Repository",
        link: "https://github.com/kelliksimons"
    },
    {
        icon: (<FaLinkedin css={`color: #0072b1;`}/>),
        title: "LinkedIn Profile",
        link: "https://www.linkedin.com/in/kelliksimons/"
    },
]