<script>
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/Grid.svelte";

    import {mockedTests} from "../../stores/mockTests"
    import filter from "../../utils/FilterScript";

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import TestActions from "../../components/TestActions.svelte";



    let selectedEntity;
    let selectedEntitiesLength;
    let gridType = 'tests';

    let allTests = [];
    mockedTests.subscribe(t => {
        allTests = t;
    })

    let activeTestsInGrid = allTests;
    let maxPoints = Math.max(...allTests.map(c => c.points));
    let maxCompletedUsers = Math.max(...allTests.map(c => c.completedUsers.length));

    function filterHandler(event) {
        activeTestsInGrid = filter(allTests, event)
    }

    function handleEntitySelect(event) {
        selectedEntity = event.detail;
    }
</script>
<h3 class="text-h4">Tests administration</h3>
<Filter filterType="{'tests'}" on:filter-event={filterHandler} maxValueOnSlider="{maxPoints}" maxValueOnSecondSlider="{maxCompletedUsers}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} data="{activeTestsInGrid}" on:entity-selected={handleEntitySelect}/>
    </Col>
    <Col>
        <TestActions selectedTest="{selectedEntity}"/>
    </Col>
</Row>