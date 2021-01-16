import {IsPositive} from "class-validator";
import type PostType from "../enums/PostType";
import type Channel from "./Channel";
import type Vote from "./Vote";
import type User from "./User";
import type Comment from "./Comment";

export default class Post {
    private _id: number;
    private _header?: string;
    private _content: string;
    private _type: PostType;
    private _published: Date;
    private _author: User;
    private _channel: Channel;
    private _votes: Vote[] = [];
    private _comments: Comment[] = [];


    constructor(id: number, header: string, content: string, type: PostType, published: Date, author: User, channel: Channel) {
        this._id = id;
        this._header = header;
        this._content = content;
        this._type = type;
        this._published = published;
        this._author = author;
        this._channel = channel;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get header(): string {
        return this._header;
    }

    set header(value: string) {
        this._header = value;
    }

    get content(): string {
        return this._content;
    }

    set content(value: string) {
        this._content = value;
    }

    get type(): PostType {
        return this._type;
    }

    set type(value: PostType) {
        this._type = value;
    }

    get published(): Date {
        return this._published;
    }

    set published(value: Date) {
        this._published = value;
    }

    get author(): User {
        return this._author;
    }

    set author(value: User) {
        this._author = value;
    }

    get channel(): Channel {
        return this._channel;
    }

    set channel(value: Channel) {
        this._channel = value;
    }

    get votes(): Vote[] {
        return this._votes;
    }

    set votes(value: Vote[]) {
        this._votes = value;
    }

    get comments(): Comment[] {
        return this._comments;
    }

    set comments(value: Comment[]) {
        this._comments = value;
    }
}