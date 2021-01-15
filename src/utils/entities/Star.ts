import type User from "./User";
import type Comment from "./Comment";

export default class Star{
    id: number;
    starPublisher: User;
    published: Date;
    comment: Comment;
}