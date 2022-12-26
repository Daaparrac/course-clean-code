import { PostService } from './05-dependency-b';
import { JsonDatabaseService, LocalDataBaseService, WebApiService } from './05-dependency-c';


// Main
(async () => {

    // const provider = new JsonDatabaseService();
    const provider = new WebApiService();
    // const provider = new LocalDataBaseService();
    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts })


})();