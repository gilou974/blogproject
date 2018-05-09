export class Post {
    postTitle: string;
    postContent: string;
    postLoveIt: number;
    postCreatedDate: Date;
    
    constructor(title: string, content: string, loveit: number) {
        this.postTitle = title;
        this.postContent = content;
        this.postLoveIt = loveit;
        this.postCreatedDate = new Date();
    }
}