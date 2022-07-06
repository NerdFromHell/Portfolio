export enum Pages {
    Home = 0,
    Profile = 1,
    Skills = 2,
    Projects = 3,
    ContactMe = 4
}

export const Pages_Names: { [page: number]: string } = {
    [Pages.Home]: 'home',
    [Pages.Profile]: 'profile',
    [Pages.Skills]: 'skills',
    [Pages.Projects]: 'projects',
    [Pages.ContactMe]: 'contact-me',
}

export const Skills_Learned = [
    { id: 1, name: 'angular', img: '../../../assets/skills images/angular.png' },
    { id: 2, name: 'TypeScript', img: '../../../assets/skills images/typescript.png' },
    { id: 3, name: 'Sass/CSS', img: '../../../assets/skills images/sass.png' },
    { id: 4, name: 'HTML', img: '../../../assets/skills images/html.png' },
    { id: 5, name: 'NodeJS', img: '../../../assets/skills images/nodeJS.png' },
    { id: 6, name: 'JAVA', img: '../../../assets/skills images/java.png' },
    { id: 7, name: 'C#', img: '../../../assets/skills images/csharp.png' },
    { id: 8, name: 'MySQL', img: '../../../assets/skills images/mysql.png' },
];

export const Skills_Learning = [
    { id: 1, name: 'MongoDB', img: '../../../assets/skills images/mongodb.png' }
];

//IconOptions type
export const Marker_Icon: any = {
    iconUrl: '../../../assets/map marker image/map-marker-icon.png',
    iconSize:     [30 , 30], // size of the icon
    iconAnchor:   [15, 40], // point of the icon which will correspond to marker's location
    popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
}
