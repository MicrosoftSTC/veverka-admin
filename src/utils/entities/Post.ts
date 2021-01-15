import {IsPositive} from "class-validator";
import PostType from "../enums/PostType";
import Channel from "./Channel";
import Vote from "./Vote";
import User from "./User";

export default class Post {
    @IsPositive()
    id: number;
    header: string;
    content: string;
    type: PostType;
    published: Date;
    author: User;
    channel: Channel;
    votes: Vote[]
}