import type {FilterType} from "./FilterType";

interface FilterProps {
    filterType:FilterType,
    maxValueOnSlider:number,
    maxValueOnSecondSlider:number;
}

export type {FilterProps};