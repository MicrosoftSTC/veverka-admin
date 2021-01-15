import type User from "./User";
import type Post from "./Post";
import type Star from "./Star";

export default class Comment {
    private _id: number;
    private _content: string;
    private _created: Date;
    private _publisher: User;
    private _post: Post;
    private _stars : Star[];
    private _commentParent?: Comment;
}