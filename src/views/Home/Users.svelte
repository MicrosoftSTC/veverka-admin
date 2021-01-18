<script lang="ts">
    import Grid from "../../components/grid/Grid.svelte";
    import Filter from "../../components/filter/Filter.svelte";
    import UserActions from "../../components/UserActions.svelte";

    import {filterEntities} from "../../utils/FilterScript"
    import {mockedUsers} from "../../stores/central"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import GridType from "../../utils/enums/GridType";
    import User from "../../utils/entities/User";
    import type GridProps from "../../components/grid/GridProps";
    import type FilterProps from "../../components/filter/FilterProps";
    import FilterType from "../../components/filter/FilterType";

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
        activeUsersInGrid = filterEntities<User>(allUsers,event.detail);
    }

    // props
    let gridProps:GridProps;
    let filterProps:FilterProps;

    $:gridProps = {
        gridType: GridType.USERS,
        data: activeUsersInGrid,
        label: "Users grid",
        disabled: false,
    }

    $:filterProps = {
        filterType:FilterType.USERS,
        maxValueOnSlider:122,
        maxValueOnSecondSlider:0
    }

</script>
<h3 class="text-h4">Users administration</h3>
<Filter props="{filterProps}" on:filter-event={filterHandler}/>
<Row>
    <Col cols="{8}">
        <Grid props="{gridProps}" on:entity-selected={handleEntitySelect}/>
    </Col>
    <Col cols="{4}">
<!--        <UserActions {selectedEntities}/>-->
    </Col>
</Row>