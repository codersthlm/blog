export class BlogEntry {
    title: string;
    description: string;
    content: string;
    imageUrl: string;

    constructor() {
        // Set this default to keep things simple
        // @Todo remove hardcoded image
        this.imageUrl = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png"
    }
} 