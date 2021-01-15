import {
    validate,
    validateOrReject,
    Contains,
    IsInt,
    Length,
    IsEmail,
    IsFQDN,
    IsDate,
    Min,
    Max, MinLength,
} from "class-validator";

import type EmailStatus from "../enums/EmailStatus";
import type Subject from "../enums/Subject";
import Country from "../enums/Country";

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
    favouriteSubject: Subject
    country: Country
    city: string;
}
// export default User;