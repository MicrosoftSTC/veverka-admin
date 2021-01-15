import User from "./User";
import Post from "./Post";

export default class Vote{
    id: number;
    value: boolean;
    user: User;
    post: Post;
}