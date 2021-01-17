import {Length, IsEmail, IsDate, MinLength, IsPositive} from "class-validator";

import type EmailStatus from "../enums/EmailStatus";
import type Subject from "../enums/Subject";
import type Country from "../enums/Country";
import type CommunityMembership from "./CommunityMembership";
import type Community from "./Community";
import type Channel from "./Channel";
import type ChannelMembership from "./ChannelMembership";
import type Star from "./Star";
import type Post from "./Post";
import type SocialSiteMembership from "./SocialSiteMembership";
import type Test from "./Test";

export default class User{
    private _id: number;
    @MinLength(20) private _username: string;
    @IsEmail() private _email: string;
    private _emailStatus: EmailStatus;
    @MinLength(20) private _firstName: string;
    @MinLength(20) private _lastName: string;
    @IsDate() private _joined: Date;
    @IsDate() private _lastModified: Date;
    @Length(0, 100) private _bio: string;
    private _favouriteSubject: Subject;
    private _country: Country
    private _city: string;
    private _needsReview: boolean;
    private _banned: boolean;
    private _foundedCommunities: Community[] = [];
    private _activeCommunityMemberships: CommunityMembership[] = [];
    private _foundedChannels: Channel[] = [];
    private _activeChannelMemberships: ChannelMembership[] = [];
    private _posts: Post[] = [];
    private _starsGiven: Star[] = [];
    private _socialSiteMemberships: SocialSiteMembership[] = [];
    private _createdTest: Test[] = [];
    @IsPositive()
    private _points:number;

    constructor(id: number, username: string, email: string, emailStatus: EmailStatus, firstName: string, lastName: string, joined: Date, lastModified: Date, bio: string, favouriteSubject: Subject, country: Country, city: string, needsReview: boolean, banned: boolean, points:number) {
        this._id = id;
        this._username = username;
        this._email = email;
        this._emailStatus = emailStatus;
        this._firstName = firstName;
        this._lastName = lastName;
        this._joined = joined;
        this._lastModified = lastModified;
        this._bio = bio;
        this._favouriteSubject = favouriteSubject;
        this._country = country;
        this._city = city;
        this._needsReview = needsReview;
        this._banned = banned;
        this._points = points;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get emailStatus(): EmailStatus {
        return this._emailStatus;
    }

    set emailStatus(value: EmailStatus) {
        this._emailStatus = value;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get joined(): Date {
        return this._joined;
    }

    set joined(value: Date) {
        this._joined = value;
    }

    get lastModified(): Date {
        return this._lastModified;
    }

    set lastModified(value: Date) {
        this._lastModified = value;
    }

    get bio(): string {
        return this._bio;
    }

    set bio(value: string) {
        this._bio = value;
    }

    get favouriteSubject(): Subject {
        return this._favouriteSubject;
    }

    set favouriteSubject(value: Subject) {
        this._favouriteSubject = value;
    }

    get country(): Country {
        return this._country;
    }

    set country(value: Country) {
        this._country = value;
    }

    get city(): string {
        return this._city;
    }

    set city(value: string) {
        this._city = value;
    }

    get needsReview(): boolean {
        return this._needsReview;
    }

    set needsReview(value: boolean) {
        this._needsReview = value;
    }

    get banned(): boolean {
        return this._banned;
    }

    set banned(value: boolean) {
        this._banned = value;
    }

    get foundedCommunities(): Community[] {
        return this._foundedCommunities;
    }

    set foundedCommunities(value: Community[]) {
        this._foundedCommunities = value;
    }

    get activeCommunityMemberships(): CommunityMembership[] {
        return this._activeCommunityMemberships;
    }

    set activeCommunityMemberships(value: CommunityMembership[]) {
        this._activeCommunityMemberships = value;
    }

    get foundedChannels(): Channel[] {
        return this._foundedChannels;
    }

    set foundedChannels(value: Channel[]) {
        this._foundedChannels = value;
    }

    get activeChannelMemberships(): ChannelMembership[] {
        return this._activeChannelMemberships;
    }

    set activeChannelMemberships(value: ChannelMembership[]) {
        this._activeChannelMemberships = value;
    }

    get starsGiven(): Star[] {
        return this._starsGiven;
    }

    set starsGiven(value: Star[]) {
        this._starsGiven = value;
    }

    get posts(): Post[] {
        return this._posts;
    }

    set posts(value: Post[]) {
        this._posts = value;
    }

    get socialSiteMemberships(): SocialSiteMembership[] {
        return this._socialSiteMemberships;
    }

    set socialSiteMemberships(value: SocialSiteMembership[]) {
        this._socialSiteMemberships = value;
    }

    get createdTest(): Test[] {
        return this._createdTest;
    }

    set createdTest(value: Test[]) {
        this._createdTest = value;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points = value;
    }
}