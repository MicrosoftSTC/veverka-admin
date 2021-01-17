<script lang="ts">
    import Grid from "../../components/grid/Grid.svelte";
    import type GridProps from "../../components/grid/GridProps";
    import Filter from "../../components/Filter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    // import filter from "../../utils/FilterScript";/
    import {mockedUsers} from "../../stores/central"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import GridType from "../../utils/enums/GridType";
    import User from "../../utils/entities/User";

    // variable to hold state of entity selected in Grid component
    let selectedEntity;
    let gridType = "communities";
    let actionAble = false;
    let allUsers : User[];
    mockedUsers.subscribe(communities => {
        allUsers = communities;
    });
    let activeUsersInGrid = allUsers;
    let maxPoints : number = Math.max(...allUsers.map(user => user.points));

    function handleEntitySelect(event) {
        selectedEntity = event.detail;
    }

    function filterHandler(event) {
        console.log(event);
        // activeUsersInGrid = filter(allUsers,event);
    }

    let gridProps:GridProps = {
        gridType: GridType.USERS,
        data: activeUsersInGrid,
        label: "Users grid",
        disabled: false,
    };
</script>
<h3 class="text-h4">Users administration</h3>
<Filter filterType="{'users'}" on:filter-event={filterHandler} maxValueOnSlider="{maxPoints}"/>
<Row>
    <Col cols="{8}">
        <Grid props="{gridProps}" on:entity-selected={handleEntitySelect}/>
    </Col>
    <Col cols="{4}">
<!--        <UserActions {selectedEntities}/>-->
    </Col>
</Row>