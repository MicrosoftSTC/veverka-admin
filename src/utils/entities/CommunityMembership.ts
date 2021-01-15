import {IsPositive} from "class-validator";
import CommunityMembershipStatus from "../enums/CommunityMembershipStatus";
import Community from "./Community";

export default class CommunityMembership{
    @IsPositive()
    id: number;
    since: Date;
    lastModified: Date;
    role: Role;
    status: CommunityMembershipStatus;
    member: User;
    community: Community;
}