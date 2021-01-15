import {IsPositive, Length} from "class-validator";
import Community from "./Community";
import Post from "./Post";
import User from "./User";

export default class Channel{
    @IsPositive()
    id: number;
    @Length(5, 20)
    name: string;
    community: Community;
    founder: User;
    posts: Post[];
}