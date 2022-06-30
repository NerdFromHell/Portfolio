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