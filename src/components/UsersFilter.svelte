<script>
    import { createEventDispatcher } from 'svelte';

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import Slider from "svelte-materialify/src/components/Slider"
    import Switch from "svelte-materialify/src/components/Switch"
    import TextField from "svelte-materialify/src/components/TextField"
    import Radio from 'svelte-materialify/src/components/Radio';
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import Select from "svelte-materialify/src/components/Select/Select.svelte"

    export let maxUserScore;

    const dispatch = createEventDispatcher();
    let min = 0;
    let max = 423423;
    let slider;
    let showFilter = false;
    let initialMaxOnSlider = maxUserScore;
    let value = [0, initialMaxOnSlider];

    const items = [
        { name: 'Username Asc', value: 'UsernameAsc' },
        { name: 'Username Desc', value: 'UsernameDesc' },
        { name: 'Joined Oldest', value: 'JoinedAsc' },
        { name: 'Joined Newest', value: 'JoinedDesc' },
        { name: "Points Acs", value: "PointsAcs"},
        { name: "Points Desc", value: 'PointsDesc'}
    ];

    let username = "";
    let filterByFounders = false;
    let filterByReports;
    let selectedValue;
    let filterConstraints = {"username": "", "filterByFounders": false, "filterByReports": 4, "order": "none", "pointsScale": [0, initialMaxOnSlider]};

    function filterEvent(fieldName, value){
        filterConstraints = {...filterConstraints, [fieldName]:value};
        dispatch("filter-event", filterConstraints);
    }

    function filterByUsername(_event){
        filterEvent("username", username);
    }

    function foundersFilter(){
        filterByFounders = !filterByFounders;
        filterEvent("filterByFounders", filterByFounders);
    }

    function reportsFilter(reportsDependency){
        filterEvent("filterByReports", reportsDependency);
    }

    function order(orderDependency){
        filterEvent("order", orderDependency);
    }

    function scaleFilter(){
        filterEvent("pointsScale", value)
    }

    $:reportsFilter(filterByReports);
    $:order(selectedValue);
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Filter
            <Switch on:change={() => showFilter = !showFilter}>Show</Switch>
        </span>
    </div>
    {#if showFilter}
    <CardText>
        <Row>
            <Col>
                <TextField bind:value={username} on:input={(event) => filterByUsername(event)} filled>Search by username</TextField>
            </Col>
            <Col cols="{6}">
                <Slider on:update={() => scaleFilter()} min="{0}" max="{initialMaxOnSlider}" bind:value={value} thumb={[true, true]} persistentThumb>Restrict points</Slider>
            </Col>
            <Col>
                <Switch on:change={() => foundersFilter()}>Show only group founders</Switch>
            </Col>
        </Row>
        <Row>
            <Col cols="{6}">
                <div class="d-flex justify-space-around">
                    <Radio bind:group={filterByReports} value={1}>Show only reported</Radio>
                    <Radio bind:group={filterByReports} value={2}>Show only non-reported</Radio>
                    <Radio bind:group={filterByReports} value={3}>Show all</Radio>
                    <Radio bind:group={filterByReports} value={4}>Show only banned</Radio>
                </div>
            </Col>
            <Col cols="{3}">
                <Select solo bind:value={selectedValue} {items} class="mt-n3" placeholder="Sort by"/>
            </Col>
        </Row>
    </CardText>
    {/if}
</Card>