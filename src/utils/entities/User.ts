import {Length, IsEmail, IsDate, MinLength} from "class-validator";

import type EmailStatus from "../enums/EmailStatus";
import type Subject from "../enums/Subject";
import Country from "../enums/Country";
import CommunityMembership from "./CommunityMembership";
import Community from "./Community";

export default class User{
    id: number;
    @MinLength(20)
    username: string;
    @IsEmail()
    email: string;
    emailStatus: EmailStatus;
    @MinLength(20)
    firstName: string;
    @MinLength(20)
    lastName: string;
    @IsDate()
    joined: Date;
    @IsDate()
    lastModified: Date;
    @Length(0, 100)
    bio: string;
    favouriteSubject: Subject;
    country: Country
    city: string;
    foundedCommunities: Set<Community>;
    activeCommunityMemberships: Set<CommunityMembership>;
    foundedChannels: Set<Chann>
    needsReview: boolean;
    banned: boolean;
}
// export default User;