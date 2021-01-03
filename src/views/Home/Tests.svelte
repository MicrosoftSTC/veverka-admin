<script>
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/Grid.svelte";

    import {mockedTests} from "../../stores/mockTests"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    let selectedEntities = [];
    let gridType = 'tests';

    let allTests = [];
    mockedTests.subscribe(t => {
        allTests = t;
    })

    let activeTestsInGrid = allTests;
    let maxPoints = Math.max(...allTests.map(c => c.points));
    let maxCompletedUsers = Math.max(...allTests.map(c => c.completedUsers.length));

    function filterHandler() {

    }

    function handleEntitySelect(){

    }
</script>
<Filter filterType="{'tests'}" on:filter-event={filterHandler} maxValueOnSlider="{maxPoints}" maxValueOnSecondSlider="{maxCompletedUsers}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} data="{$mockedTests}" on:entity-selected={handleEntitySelect}/>
    </Col>
</Row>