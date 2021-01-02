<script>
    import Grid from "../../components/Grid.svelte";
    import Filter from "../../components/Filter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    import filter from "../../utils/FilterScript";

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