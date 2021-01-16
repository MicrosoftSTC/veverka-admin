import type User from "./User";
import type SocialSite from "./SocialSite";

export default class SocialSiteMembership {
    private _id:number;
    private _member:User;
    private _site:SocialSite;
    private _username:string;

    constructor(id: number, member: User, site: SocialSite, username: string) {
        this._id = id;
        this._member = member;
        this._site = site;
        this._username = username;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get member(): User {
        return this._member;
    }

    set member(value: User) {
        this._member = value;
    }

    get site(): SocialSite {
        return this._site;
    }

    set site(value: SocialSite) {
        this._site = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }
}