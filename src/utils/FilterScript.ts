import User from "./entities/User";
import Community from "./entities/Community";
import Test from "./entities/Test";
import type Post from "./entities/Post";

interface FilterConstraints{
    filterByRadio: number,
    filterBySwitch: boolean,
    order: User[],
    pointsScale: number[],
    secondPointsScale: number[],
    textInputValue: string,
    secondTextInputValue: string,
    secondInputValue: string, // no idea what this is at the moment
}

export default function filter(data:User[] | Community[] | Test[] | Post[], event:CustomEvent){

    let filterConstraints:FilterConstraints = event.detail;

    // decide which entity to filter
    if(data[0] instanceof User){

    }else if(data[0] instanceof Community){

    }else if(data[0] instanceof Test){

    }

    // let fields;

    // let usersFields = {
    //     textField:"username",
    //     switchField:"founder",
    //     radioField: {
    //         1: "needsReview",
    //         2: "needsReview",
    //         4: "banned"
    //     },
    //     selectOptions : {
    //         nameAsc: 'Username Asc',
    //         nameDesc: 'Username Desc',
    //         sinceAsc: 'Joined Oldest',
    //         sinceDesc: 'Joined Newest',
    //         numericAsc: 'Points Acs',
    //         numericDesc: 'Points Desc'
    //     },
    //     orderFields: {
    //         name: "username",
    //         since: "joined",
    //         numeric: "points"
    //     },
    //     sliderFields : {
    //         firstValue: "points",
    //     }
    // }
    //
    // let communityFields = {
    //     textField:"name",
    //     secondTextField: "founder",
    //     radioField: {
    //         1: "needsReview",
    //         2: "needsReview",
    //         4: "banned"
    //     },
    //     selectOptions : {
    //         nameAsc: 'Name Asc',
    //         nameDesc: 'Name Desc',
    //         sinceAsc: 'Since Oldest',
    //         sinceDesc: 'Since Newest',
    //         numericAsc: 'Members Asc',
    //         numericDesc: 'Members Desc'
    //     },
    //     orderFields: {
    //         name: "name",
    //         since: "since",
    //         numeric: "members"
    //     },
    //     sliderFields : {
    //         firstValue: "members",
    //     }
    //
    // }
    //
    // let testFields = {
    //     textField:"name",
    //     secondTextField: "creatorUsername",
    //     radioField: {
    //         1: "needsReview",
    //         2: "needsReview",
    //         4: "banned"
    //     },
    //     selectOptions : {
    //         nameAsc: 'Name Asc',
    //         nameDesc: 'Name Desc',
    //         sinceAsc: 'Created Oldest',
    //         sinceDesc: 'Created Newest',
    //         numericAsc: 'Points Acs',
    //         numericDesc: 'Points Desc',
    //         secondNumericAsc: "Questions Asc",
    //         secondNumericDesc: "Questions Desc",
    //     },
    //     orderFields: {
    //         name: "name",
    //         since: "created",
    //         numeric: "points",
    //         numericSecond: "questions"
    //     },
    //     sliderFields : {
    //         firstValue: "points",
    //         secondValue: "completedUsers"
    //     }
    // }
    //
    // let objectKeys = Object.keys(data[0]);
    // let filterConstraints = event.detail;
    //
    // if(objectKeys.includes("username")){
    //     // data is list of users
    //     fields = usersFields;
    // } else if(objectKeys.includes("creatorUsername")){
    //     fields = testFields;
    // } else if(objectKeys.includes("name")){
    //     // data is list of communities
    //     fields = communityFields;
    // } else{
    //     throw new Error(`Data type not supported by function ${filter.name}`);
    // }
    //
    // let maxNumericValueOnSlider = Math.max(...data.map(c => c[fields.orderFields.numeric]));
    //
    // let maxNumericValueOnSecondSlider;
    //
    // // if an entity is filterable by this value
    // if(fields.sliderFields.secondValue){
    //     maxNumericValueOnSecondSlider = Math.max(...data.map(c => c[fields.sliderFields.secondValue].length));
    // }
    //
    // if(filterConstraints.textInputValue !== ""){
    //     data = data.filter(entity => entity[fields.textField].startsWith(filterConstraints.textInputValue));
    // }
    //
    // if(filterConstraints.secondTextInputValue !== ""){
    //     data = data.filter(entity => entity[fields.secondTextField].startsWith(filterConstraints.secondTextInputValue));
    // }
    //
    // if(filterConstraints.filterBySwitch){
    //     data = data.filter(entity => entity[fields.switchField]);
    // }
    // if(filterConstraints.filterByRadio !== 3){
    //     if(filterConstraints.filterByRadio === 2){
    //         data = data.filter(entity => !(entity[fields.radioField[filterConstraints.filterByRadio]]));
    //     }else{
    //         data = data.filter(entity => entity[fields.radioField[filterConstraints.filterByRadio]]);
    //     }
    // }
    // if(filterConstraints.order !== "none"){
    //     switch(filterConstraints.order){
    //         case fields.selectOptions.nameAsc:
    //             data.sort((a, b) => {
    //                 return a[fields.orderFields.name].localeCompare(b[fields.orderFields.name]);
    //             })
    //             break;
    //         case fields.selectOptions.nameDesc:
    //             data.sort((a, b) => {
    //                 return b[fields.orderFields.name].localeCompare(a[fields.orderFields[name]]);
    //             })
    //             break;
    //         case fields.selectOptions.sinceAsc:
    //             data.sort((a, b) => {
    //                 return a[fields.orderFields.since] > b[fields.orderFields.since] ? 1:-1;
    //             })
    //             break;
    //         case fields.selectOptions.sinceDesc:
    //             data.sort((a, b) => {
    //                 return b[fields.orderFields.since] > a[fields.orderFields.since] ? 1:-1;
    //             })
    //             break;
    //         case fields.selectOptions.numericAsc:
    //             data.sort((a, b) => {
    //                 return a[fields.orderFields.numeric] - b[fields.orderFields.numeric];
    //             })
    //             break;
    //         case fields.selectOptions.numericDesc:
    //             data.sort((a, b) => {
    //                 return b[fields.orderFields.numeric] - a[fields.orderFields.numeric];
    //             })
    //             break;
    //         case fields.selectOptions.secondNumericAsc:
    //             data.sort((a, b) => {
    //                 if(objectKeys.includes("creatorUsername")){
    //                     return a[fields.orderFields.numericSecond].length - b[fields.orderFields.numericSecond].length;
    //                 }
    //                 return a[fields.orderFields.numericSecond] - b[fields.orderFields.numericSecond];
    //             })
    //             break;
    //         case fields.selectOptions.secondNumericDesc:
    //             data.sort((a, b) => {
    //                 if(objectKeys.includes("creatorUsername")){
    //                     return b[fields.orderFields.numericSecond].length - a[fields.orderFields.numericSecond].length;
    //                 }
    //                 return b[fields.orderFields.numericSecond] - a[fields.orderFields.numericSecond];
    //             })
    //             break;
    //     }
    // }
    // if(filterConstraints.pointsScale[0] !== 0 || filterConstraints.pointsScale[1] !== maxNumericValueOnSlider){
    //     let min = filterConstraints.pointsScale[0];
    //     let max = filterConstraints.pointsScale[1];
    //
    //     data = data.filter(entity => {
    //         return entity[fields.sliderFields.firstValue] >= min && entity[fields.sliderFields.firstValue] <= max;
    //     })
    // }
    //
    // if(maxNumericValueOnSecondSlider && (filterConstraints.secondPointsScale[0] !== 0 || filterConstraints.secondPointsScale[1] !== maxNumericValueOnSecondSlider)){
    //     let min = filterConstraints.secondPointsScale[0];
    //     let max = filterConstraints.secondPointsScale[1];
    //
    //     data = data.filter(entity => {
    //         return entity[fields.sliderFields.secondValue].length >= min && entity[fields.sliderFields.secondValue].length <= max;
    //     })
    // }
    //
    // return data;
}