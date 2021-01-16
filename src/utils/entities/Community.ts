import {IsPositive, Length, MinLength} from "class-validator";
import type CommunityType from "../enums/CommunityType";
import type Subject from "../enums/Subject";
import type User from "./User";
import type Post from "./Post";
import type Channel from "./Channel";
import type CommunityPrivacyPolicy from "../enums/CommunityPrivacyPolicy";
import type CommunityMembership from "./CommunityMembership";

export default class Community{
    private _id: number;
    @Length(5,30) private _name: string;
    @Length(5, 30) private _description:string
    private _privacyPolicy: CommunityPrivacyPolicy;
    private _communityType: CommunityType;
    private _subject: Subject;
    private _founded: Date;
    private _founder: User;
    private _members: User[];
    private _channels: Channel[];
    private _memberships: CommunityMembership[] = [];

    constructor(id: number, name: string, description: string, _privacyPolicy: CommunityPrivacyPolicy, communityType: CommunityType, subject: Subject, founded: Date, founder: User) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._privacyPolicy = _privacyPolicy;
        this._communityType = communityType;
        this._subject = subject;
        this._founded = founded;
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

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get privacyPolicy(): CommunityPrivacyPolicy {
        return this._privacyPolicy;
    }

    set privacyPolicy(value: CommunityPrivacyPolicy) {
        this._privacyPolicy = value;
    }

    get communityType(): CommunityType {
        return this._communityType;
    }

    set communityType(value: CommunityType) {
        this._communityType = value;
    }

    get subject(): Subject {
        return this._subject;
    }

    set subject(value: Subject) {
        this._subject = value;
    }

    get founded(): Date {
        return this._founded;
    }

    set founded(value: Date) {
        this._founded = value;
    }

    get founder(): User {
        return this._founder;
    }

    set founder(value: User) {
        this._founder = value;
    }

    get channels(): Channel[] {
        return this._channels;
    }

    set channels(value: Channel[]) {
        this._channels = value;
    }


    get members(): User[] {
        return this._members;
    }

    set members(value: User[]) {
        this._members = value;
    }

    get memberships(): CommunityMembership[] {
        return this._memberships;
    }

    set memberships(value: CommunityMembership[]) {
        this._memberships = value;
    }


}