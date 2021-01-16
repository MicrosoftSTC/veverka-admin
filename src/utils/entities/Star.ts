import type User from "./User";
import type Comment from "./Comment";

export default class Star{
    private _id: number;
    private _starPublisher: User;
    private _published: Date;
    private _comment: Comment;

    constructor(id: number, starPublisher: User, published: Date, comment: Comment) {
        this._id = id;
        this._starPublisher = starPublisher;
        this._published = published;
        this._comment = comment;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get starPublisher(): User {
        return this._starPublisher;
    }

    set starPublisher(value: User) {
        this._starPublisher = value;
    }

    get published(): Date {
        return this._published;
    }

    set published(value: Date) {
        this._published = value;
    }

    get comment(): Comment {
        return this._comment;
    }

    set comment(value: Comment) {
        this._comment = value;
    }
}