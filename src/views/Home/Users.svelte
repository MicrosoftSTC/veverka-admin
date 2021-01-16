<script lang="ts">
    import Grid from "../../components/Grid.svelte";
    import Filter from "../../components/Filter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    import filter from "../../utils/FilterScript";
    import {mockedUsers} from "../../stores/central"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    // variable to hold state of entities selected in Grid component
    let selectedEntities = [];
    let gridType : string = "users";

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

    function handleEntitySelect(event) {
        selectedEntities = event.detail;
    }

    function filterHandler(event) {
        activeUsersInGrid = filter(allUsers,event);
    }

    $:console.log(selectedEntities);
</script>
<h3 class="text-h4">Users administration</h3>
<Filter filterType="{'users'}" on:filter-event={filterHandler} maxValueOnSlider="{activeUsersInGrid[maxUserScoreIndex] ? activeUsersInGrid[maxUserScoreIndex].points : 99999999999}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} data="{activeUsersInGrid}" on:entity-selected={handleEntitySelect}/>
    </Col>
    <Col cols="{4}">
        <UserActions {selectedEntities}/>
    </Col>
</Row>