import type GridType from "../../utils/enums/GridType";
import type User from "../../utils/entities/User";
import type Community from "../../utils/entities/Community";
import type Test from "../../utils/entities/Test";
import type Post from "../../utils/entities/Post";

export default interface GridProps {
    gridType: GridType;
    data: User[] | Community[] | Test[] | Post[];
    username?:string;
    reportType?:string;
    label:string;
    disabled:boolean;
}