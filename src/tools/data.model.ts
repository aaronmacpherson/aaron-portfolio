export interface Project {
    name: string;
    description: string;
    preview: Preview;
    demo: string;
    techStack: TechStack[];
}

export interface Preview {
    src: string;
    alt: string;
}

export interface TechStack {
    name: string;
    src: string;
}