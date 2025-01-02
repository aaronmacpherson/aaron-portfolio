import { Project } from "./data.model";

export async function getProjects() {
    let projects:Project[] = require('./projects.json');
    return projects;
}