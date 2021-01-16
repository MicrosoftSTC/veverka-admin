import {IsPositive} from "class-validator";
import type ChannelM from "../enums/CommunityMembershipStatus";
import type Community from "./Community";
import type Role from "../enums/Role";
import type User from "./User";
import type ChannelMembershipStatus from "../enums/ChannelMembershipStatus";
import type Channel from "./Channel";

export default class ChannelMembership{
    private _id: number;
    private _since: Date;
    private _lastModified: Date;
    private _status: ChannelMembershipStatus;
    private _member: User;
    private _channel: Channel;

    constructor(id: number, since: Date, lastModified: Date, status: ChannelMembershipStatus, member: User, channel: Channel) {
        this._id = id;
        this._since = since;
        this._lastModified = lastModified;
        this._status = status;
        this._member = member;
        this._channel = channel;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get since(): Date {
        return this._since;
    }

    set since(value: Date) {
        this._since = value;
    }

    get lastModified(): Date {
        return this._lastModified;
    }

    set lastModified(value: Date) {
        this._lastModified = value;
    }

    get status(): ChannelMembershipStatus {
        return this._status;
    }

    set status(value: ChannelMembershipStatus) {
        this._status = value;
    }

    get member(): User {
        return this._member;
    }

    set member(value: User) {
        this._member = value;
    }

    get channel(): Channel {
        return this._channel;
    }

    set channel(value: Channel) {
        this._channel = value;
    }
}