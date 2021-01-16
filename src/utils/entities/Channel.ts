import {IsPositive, Length} from "class-validator";
import type Community from "./Community";
import type Post from "./Post";
import type User from "./User";
import type ChannelMembership from "./ChannelMembership";

export default class Channel{
    private _id: number;
    @Length(5, 20) private _name: string;
    private _community: Community;
    private _founder: User;
    private _approver: User;
    private _posts: Post[];
    private _memberships: ChannelMembership[];

    constructor(id: number, name: string, community: Community, founder: User, approver: User) {
        this._id = id;
        this._name = name;
        this._community = community;
        this._founder = founder;
        this._approver = approver;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get community(): Community {
        return this._community;
    }

    set community(value: Community) {
        this._community = value;
    }

    get founder(): User {
        return this._founder;
    }

    set founder(value: User) {
        this._founder = value;
    }

    get approver(): User {
        return this._approver;
    }

    set approver(value: User) {
        this._approver = value;
    }

    get posts(): Post[] {
        return this._posts;
    }

    set posts(value: Post[]) {
        this._posts = value;
    }

    get memberships(): ChannelMembership[] {
        return this._memberships;
    }

    set memberships(value: ChannelMembership[]) {
        this._memberships = value;
    }
}