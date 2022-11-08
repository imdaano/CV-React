import Img1 from '../assets/pc-developer.jpg';
/* import Img2 from '../../../../../Dano/Personal/foto-carnet.jpg'
 */



export const dataBase = {
    hero: {
        name:"Daniel Sánchez",
        profession: "Full Stack Developer",
        city:"A Coruña",
        email:"danielsanchezvazquez5@gmail.com",
        birthDate: "18/03/1994",
        phone:"(+34) 666 00 22 55",
        image:('../../../../../Dano/Personal/foto-carnet.jpg'),
        gitHub:"https://github.com/imdaano",
        aboutMe: [
            {
                info:"I am Daniel Sánchez, student in Upgrade Hub. I´m looking for an opportunity to develop the knowledge learned and expand it in a good company. My main qualities are easy adaptation to groups and great teamwork."
            },
            {
                info:"Full Stack Developer student & Fashion Designer"
            },
            {
                info:"Friendly, creative, involved, hardworking, partner."
            },
        ],
    },
    curriculumSections:{
        education: [
            {
                name: "Full Stack Developer",
                date: "2022",
                where: "Upgrade Hub",
            },
            {
                name: "Fashion Designer",
                date: "2021",
                where: "Goymar Galicia",
            },
            {
                name: "Footbal trainner",
                date: "2019",
                where: "IES Universidade Laboral",
            },
            {
                name: "Administration and Finance",
                date: "2015",
                where: "IES Sabón",
            },
        ],
        experience: [
            {
                name: "Operario de almacén",
                date: "15/03/2022 – 12/07/2022",
                where: "JEVASO",
                description:
                    "receiving and placing merchandise and preparing orders for shipment.",
            },
            {
                name: "Telephone operator",
                date: "01/11/2020 – 01/03/2022",
                where: "Teleperformance",
                description:
                    "Teleoperador en Teleperformance para las campañas de Iberdrola (venta fría) y para Vodafone (Atención al cliente) ayudando y dando soporte telefónico",
            },
            {
                name: "Waiter",
                date: "01/10/2019 – 01/03/2021",
                where: "Le Tavernier",
                description:
                    "Waiter at Le Tavernier part-time, working both in the public service room, as well as inside the bar and receiving payment.",
            },
        ],
        languages: [
            {
                language: "Spanish",
                wrlevel: "Native",
                splevel: "Native",
            },
            {
                language: "Galician",
                wrlevel: "Native",
                splevel: "Native",
            },
            {
                language: "English",
                wrlevel: "High",
                splevel: "Medium-high",
            },
        ],
        skills: [
            "Active listening",
            "Affinity with technologies",
            "Conflict(s) resolution",
            "Attention to details",
            "Career progression",
            "Collaborative ",
            "Communication",
            "Eager ",
            "Hardworking",
        ],
    },
    portfolio: [
        {
            url: Img1,
            alt:"Ordenador"
        },
        {
            url:Img1,
            alt:"Ordenador"
        },
        {
            url:Img1,
            alt:"Ordenador"
        },
        {
            url:Img1,
            alt:"Ordenador"
        },
    ],
    footter: {
        info:"Happy hacking",
        linkedIn: "https://www.linkedin.com/daniel-sanchez-vazquez",
        email: "danielsanchezvazquez5@gmail.com"
    }
};