<script>
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/Grid.svelte";
    import CommunityDetail from "../../components/CommunityDetail.svelte"

    import {mockedCommunities} from "../../stores/mockCommunities"

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import filter from "../../utils/FilterScript";

    let gridType = "communities";
    let actionAble = false;
    let allCommunities;
    mockedCommunities.subscribe(communities => {
        allCommunities = communities;
    });
    let activeCommunitiesInGrid = allCommunities;
    let maxMembers = Math.max(...allCommunities.map(c => c.members));

    function handleActionAble(event) {
        if(event.detail){
            console.log("action");
        }
    }

    function filterHandler(event) {
        activeCommunitiesInGrid = filter(allCommunities,event);
    }
</script>
<h3 class="text-h4">Community administration</h3>
<Filter filterType="{'communities'}" on:filter-event={filterHandler} maxValueOnSlider="{maxMembers}"/>
<Row>
    <Col cols="{8}">
        <Grid {gridType} {actionAble} bind:data="{activeCommunitiesInGrid}" on:item-selected={handleActionAble}/>
    </Col>
    <Col>
        <CommunityDetail/>
    </Col>
</Row>