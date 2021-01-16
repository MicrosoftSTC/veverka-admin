import type SocialSiteMembership from "./SocialSiteMembership";

export default class SocialSite{
    private _id:number;
    private _name:string;
    private _url:string;
    private _memberships:SocialSiteMembership[] = [];

    constructor(id: number, name: string, url: string) {
        this._id = id;
        this._name = name;
        this._url = url;
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

    get url(): string {
        return this._url;
    }

    set url(value: string) {
        this._url = value;
    }

    get memberships(): SocialSiteMembership[] {
        return this._memberships;
    }

    set memberships(value: SocialSiteMembership[]) {
        this._memberships = value;
    }
}