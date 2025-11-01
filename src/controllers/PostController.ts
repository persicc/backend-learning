import {PostService} from "../services/PostService";
import {Post} from "../models/PostModel";

export class PostController {
     postService : PostService = new PostService();

    async getAll(req: Request, res: Response) : Promise<Post[]>  {
        const posts = this.postService.getAll()
        res.json(posts)
    }

}