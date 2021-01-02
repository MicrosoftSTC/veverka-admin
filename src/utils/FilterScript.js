export default function filter(data, event){
    let fields;

    let usersFields = {
        textField:"username",
        switchField:"founder",
        radioField: {
            1: "needsReview",
            2: "needsReview",
            4: "banned"
        },
        selectOptions : {
            nameAsc: 'Username Asc',
            nameDesc: 'Username Desc',
            sinceAsc: 'Joined Oldest',
            sinceDesc: 'Joined Newest',
            numericAsc: 'Points Acs',
            numericDesc: 'Points Desc'
        },
        orderFields: {
            name: "username",
            since: "joined",
            numeric: "points"
        }
    }

    let communityFields = {
        textField:"name",
        secondTextField: "founder",
        radioField: {
            1: "needsReview",
            2: "needsReview",
            4: "banned"
        },
        selectOptions : {
            nameAsc: 'Name Asc',
            nameDesc: 'Name Desc',
            sinceAsc: 'Since Oldest',
            sinceDesc: 'Since Newest',
            numericAsc: 'Members Asc',
            numericDesc: 'Members Desc'
        },
        orderFields: {
            name: "name",
            since: "since",
            numeric: "members"
        }

    }

    let objectKeys = Object.keys(data[0]);
    let filterConstraints = event.detail;
    
    if(objectKeys.includes("username")){
        // data is list of users
        fields = usersFields;
    }else if(objectKeys.includes("name")){
        // data is list of communities
        fields = communityFields;
    }else{
        throw new Error(`Data type not supported by function ${filter.name}`);
    }

    let maxNumericValueOnSlider = Math.max(...data.map(c => c[fields.orderFields.numeric]));

    if(filterConstraints.textInputValue !== ""){
        data = data.filter(entity => entity[fields.textField].startsWith(filterConstraints.textInputValue));
    }

    if(filterConstraints.secondTextInputValue !== ""){
        data = data.filter(entity => entity[fields.secondTextField].startsWith(filterConstraints.secondTextInputValue));
    }

    if(filterConstraints.filterBySwitch){
        data = data.filter(entity => entity[fields.switchField]);
    }
    if(filterConstraints.filterByRadio !== 3){
        if(filterConstraints.filterByRadio === 2){
            data = data.filter(entity => !(entity[fields.radioField[filterConstraints.filterByRadio]]));
        }else{
            data = data.filter(entity => entity[fields.radioField[filterConstraints.filterByRadio]]);
        }
    }
    if(filterConstraints.order !== "none"){
        switch(filterConstraints.order){
            case fields.selectOptions.nameAsc:
                data.sort((a, b) => {
                    return a[fields.orderFields.name].localeCompare(b[fields.orderFields.name]);
                })
                break;
            case fields.selectOptions.nameDesc:
                data.sort((a, b) => {
                    return b[fields.orderFields.name].localeCompare(a[fields.orderFields[name]]);
                })
                break;
            case fields.selectOptions.sinceAsc:
                data.sort((a, b) => {
                    return a[fields.orderFields.since] > b[fields.orderFields.since] ? 1:-1;
                })
                break;
            case fields.selectOptions.sinceDesc:
                data.sort((a, b) => {
                    return b[fields.orderFields.since] > a[fields.orderFields.since] ? 1:-1;
                })
                break;
            case fields.selectOptions.numericAsc:
                data.sort((a, b) => {
                    return a[fields.orderFields.numeric] - b[fields.orderFields.numeric];
                })
                break;
            case fields.selectOptions.numericDesc:
                data.sort((a, b) => {
                    return b[fields.orderFields.numeric] - a[fields.orderFields.numeric];
                })
                break;
        }
    }
    if(event.detail.pointsScale[0] !== 0 || event.detail.pointsScale[1] !== maxNumericValueOnSlider){
        let min = event.detail.pointsScale[0];
        let max = event.detail.pointsScale[1];

        data = data.filter(entity => {
            return entity[fields.orderFields.numeric] >= min && entity[fields.orderFields.numeric] <= max;
        })
    }

    return data;
}