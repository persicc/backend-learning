import {Post} from "../models/PostModel";


export class PostService {


    async getAll(): Post[] {
        const res = "SELECT * FROM posts";
        const data = res.data;
        return data;
    }

    async getById(id: number): Promise<Post> {

    }

    async addToSaved(postId: string): Promise<Post> {}
}