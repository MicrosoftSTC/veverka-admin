import {IsPositive} from "class-validator";
import type CommunityMembershipStatus from "../enums/CommunityMembershipStatus";
import type Community from "./Community";
import type Role from "../enums/Role";
import type User from "./User";

export default class CommunityMembership{
    private _id: number;
    private _since: Date;
    private _lastModified: Date;
    private _role: Role;
    private _status: CommunityMembershipStatus;
    private _member: User;
    private _community: Community;

    constructor(id: number, since: Date, lastModified: Date, role: Role, status: CommunityMembershipStatus, member: User, community: Community) {
        this._id = id;
        this._since = since;
        this._lastModified = lastModified;
        this._role = role;
        this._status = status;
        this._member = member;
        this._community = community;
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

    get role(): Role {
        return this._role;
    }

    set role(value: Role) {
        this._role = value;
    }

    get status(): CommunityMembershipStatus {
        return this._status;
    }

    set status(value: CommunityMembershipStatus) {
        this._status = value;
    }

    get member(): User {
        return this._member;
    }

    set member(value: User) {
        this._member = value;
    }

    get community(): Community {
        return this._community;
    }

    set community(value: Community) {
        this._community = value;
    }
}