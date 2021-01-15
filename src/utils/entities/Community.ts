import {MinLength} from "class-validator";
import type CommunityType from "../enums/CommunityType";
import type Subject from "../enums/Subject";
import type User from "./User";

export default class Community{
    private _id: number;
    @MinLength(5) private _name: string;
    @MinLength(5) private _description:string
    private _isPrivate: boolean;
    private _communityType: CommunityType;
    private _subject: Subject;
    private _founded: Date;
    private _founder: User;

    constructor(id: number, name: string, description: string, isPrivate: boolean, communityType: CommunityType, subject: Subject, founded: Date, founder: User) {
        this._id = id;
        this._name = name;
        this._description = description;
        this._isPrivate = isPrivate;
        this._communityType = communityType;
        this._subject = subject;
        this._founded = founded;
        this._founder = founder;
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

    get isPrivate(): boolean {
        return this._isPrivate;
    }

    set isPrivate(value: boolean) {
        this._isPrivate = value;
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
}