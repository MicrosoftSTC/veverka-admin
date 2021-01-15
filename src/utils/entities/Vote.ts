import type User from "./User";
import type Post from "./Post";

export default class Vote{
    private _id: number;
    private _value: boolean;
    private _user: User;
    private _post: Post;

    constructor(id: number, value: boolean, user: User, post: Post) {
        this._id = id;
        this._value = value;
        this._user = user;
        this._post = post;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get value(): boolean {
        return this._value;
    }

    set value(value: boolean) {
        this._value = value;
    }

    get user(): User {
        return this._user;
    }

    set user(value: User) {
        this._user = value;
    }

    get post(): Post {
        return this._post;
    }

    set post(value: Post) {
        this._post = value;
    }
}