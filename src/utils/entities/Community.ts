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

export default class Community{
    id: number
}