<script lang="ts">
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/grid/Grid.svelte";
    import CommunityDetail from "../../components/detail/CommunityDetail.svelte"

    import {mockedCommunities} from "../../stores/central"

    // import filter from "../../utils/FilterScript";

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    // variable to hold state of entity selected in Grid component
    let selectedEntity;
    let gridType = "communities";
    let actionAble = false;
    let allCommunities;
    mockedCommunities.subscribe(communities => {
        allCommunities = communities;
    });
    let activeCommunitiesInGrid = allCommunities;
    let maxMembers = Math.max(...allCommunities.map(c => c.members));

    function handleEntitySelect(event) {
        selectedEntity = event.detail;
    }

    function filterHandler(event) {
        // activeCommunitiesInGrid = filter(allCommunities,event);
    }
</script>
<h3 class="text-h4">Community administration</h3>
<Filter filterType="{'communities'}" on:filter-event={filterHandler} maxValueOnSlider="{maxMembers}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} data="{activeCommunitiesInGrid}" on:entity-selected={handleEntitySelect}/>
    </Col>
    <Col>
        <CommunityDetail selectedCommunity="{selectedEntity}"/>
    </Col>
</Row>