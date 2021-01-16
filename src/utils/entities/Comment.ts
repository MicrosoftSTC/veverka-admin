import type User from "./User";
import type Post from "./Post";
import type Star from "./Star";

export default class Comment {
    private _id: number;
    private _content: string;
    private _created: Date;
    private _publisher: User;
    private _post: Post;
    private _stars : Star[] = [];
    private _commentParent?: Comment;


    constructor(id: number, content: string, created: Date, publisher: User, post: Post, commentParent: Comment) {
        this._id = id;
        this._content = content;
        this._created = created;
        this._publisher = publisher;
        this._post = post;
        this._commentParent = commentParent;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get created(): Date {
        return this._created;
    }

    set created(value: Date) {
        this._created = value;
    }

    get publisher(): User {
        return this._publisher;
    }

    set publisher(value: User) {
        this._publisher = value;
    }

    get post(): Post {
        return this._post;
    }

    set post(value: Post) {
        this._post = value;
    }

    get stars(): Star[] {
        return this._stars;
    }

    set stars(value: Star[]) {
        this._stars = value;
    }

    get commentParent(): Comment {
        return this._commentParent;
    }

    set commentParent(value: Comment) {
        this._commentParent = value;
    }
}