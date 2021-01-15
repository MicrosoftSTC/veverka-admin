import {MinLength} from "class-validator";
import CommunityType from "../enums/CommunityType";
import Subject from "../enums/Subject";
import User from "./User";

export default class Community{
    id: number;
    @MinLength(5)
    name: string;
    @MinLength(5)
    description:string
    isPrivate: boolean;
    communityType: CommunityType;
    subject: Subject;
    founded: Date;
    founder: User;
}