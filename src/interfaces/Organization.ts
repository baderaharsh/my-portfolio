export default interface Organization {
    id?: string,
    name?: string,
    logoUrl?: string,
    from?: string,
    isPresent?: boolean,
    designation?: string,
    projects?: Project[],
    to?: string,
    overview?: string
    responsibilities?: string[]
}

export interface Project {
    client?: string,
    projectName?: string,
    overview?: string
}
