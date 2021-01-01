<script>
    import Grid from "../../components/Grid.svelte";
    import Filter from "../../components/Filter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    import filter from "../../components/FilterScript";

    import {mockedUsers} from "../../stores/mockUsers"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    let actionAble = false;
    let gridType = "users";

    let allUsers = [];
    mockedUsers.subscribe(u => {
        allUsers = u;
    });


    let activeUsersInGrid = allUsers;

    let maxUserScoreIndex = 0;

    $:activeUsersInGrid.forEach((user, index) => {
        if(activeUsersInGrid[maxUserScoreIndex]){
            if(activeUsersInGrid[index].points > activeUsersInGrid[maxUserScoreIndex].points){
                maxUserScoreIndex = index;
            }
        }else{
            maxUserScoreIndex = 0;
        }
    })

    function handleActionAble(event) {
        actionAble = event.detail;
    }

    function filterHandler(event) {
        console.log(event);
        activeUsersInGrid = filter(allUsers,event);
    }

    // function filterHandler(event){
        // activeUsersInGrid = allUsers;
        // if(event.detail.textInputValue != ""){
        //     activeUsersInGrid = activeUsersInGrid.filter(user => user.username.startsWith(event.detail.textInputValue));
        // }
        // if(event.detail.filterBySwitch){
        //     activeUsersInGrid = activeUsersInGrid.filter(user => user.founder);
        // }
        // if(event.detail.filterByRadio !== 3){
        //     switch (event.detail.filterByReports) {
        //         case 1:
        //             activeUsersInGrid = activeUsersInGrid.filter(user => user.needsReview);
        //             break;
        //         case 2:
        //             activeUsersInGrid = activeUsersInGrid.filter(user => !user.needsReview);
        //             break;
        //         case 4:
        //             activeUsersInGrid = activeUsersInGrid.filter(user => user.banned);
        //             break;
        //     }
        // }
        // if(event.detail.order !== "none"){
        //     switch(event.detail.order){
        //         case "Username Asc":
        //             activeUsersInGrid.sort((a, b) => {
        //                 return a.username.localeCompare(b.username);
        //             });
        //             break;
        //         case "Username Desc":
        //             activeUsersInGrid.sort((a, b) => {
        //                 return b.username.localeCompare(a.username);
        //             })
        //             break;
        //         case "Joined Oldest":
        //             activeUsersInGrid.sort((a, b) => {
        //                 if(a.joined > b.joined) return 1;
        //                 else return -1;
        //             })
        //             break;
        //         case "Joined Newest":
        //             activeUsersInGrid.sort((a, b) => {
        //                 if(b.joined > a.joined) return 1;
        //                 else return -1;
        //             })
        //             break;
        //         case "Points Acs":
        //             activeUsersInGrid.sort((a,b) => {
        //                 return a.points - b.points
        //             })
        //             break;
        //         case "Points Desc":
        //             activeUsersInGrid.sort((a,b) => {
        //                 return b.points - a.points
        //             })
        //             break;
        //     }
        // }
        // if(activeUsersInGrid[maxUserScoreIndex] && (event.detail.pointsScale[0] != 0 || event.detail.pointsScale[1] != activeUsersInGrid[maxUserScoreIndex].points)){
        //     let min = event.detail.pointsScale[0];
        //     let max = event.detail.pointsScale[1];
        //
        //     activeUsersInGrid = activeUsersInGrid.filter(user => {
        //         return user.points >= min && user.points <= max;
        //     })
        // }
    // }
</script>
<h3 class="text-h4">Users administration</h3>
<Filter filterType="{'users'}" on:filter-event={filterHandler} maxValueOnSlider="{activeUsersInGrid[maxUserScoreIndex] ? activeUsersInGrid[maxUserScoreIndex].points : 99999999999}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} {actionAble} bind:data="{activeUsersInGrid}" on:item-selected={handleActionAble}/>
    </Col>
    <Col cols="{4}">
        <UserActions {actionAble}/>
    </Col>
</Row>