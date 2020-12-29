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

    const dispatch = createEventDispatcher();

    let group = 3;
    let min = 0;
    let max = 423423;
    let slider;
    let showFilter = false;

    let value = [0, 3000];

    const items = [
        { name: 'Username Asc', value: 'Username Asc' },
        { name: 'Username Desc', value: 'Username Desc' },
        { name: 'Joined Asc', value: 'Joined Asc' },
        { name: 'Joined Desc', value: 'Joined Desc' },
        { name: "Points Acs", value: "Points Acs"},
        { name: "Points Desc", value: 'Points Desc'}
    ];

    function filterByUsername(event){
        let username = event.target.value;
        dispatch("filter-by-username", username);
    }
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
                <TextField on:input={(event) => filterByUsername(event)} filled>Search by username</TextField>
            </Col>
            <Col cols="{6}">
                <Slider min="{0}" max="{3000}" value={value} thumb={[true, true]} persistentThumb>Range</Slider>
            </Col>
            <Col>
                <Switch value="1">Show only group founders</Switch>
            </Col>
        </Row>
        <Row>
            <Col cols="{6}">
                <div class="d-flex justify-space-around">
                    <Radio bind:group value={1}>Show only reported</Radio>
                    <Radio bind:group value={2}>Show only non-reported</Radio>
                    <Radio bind:group value={3}>Show all</Radio>
                    <Radio bind:group value={4}>Show only banned</Radio>
                </div>
            </Col>
            <Col cols="{3}">
                <Select solo {items} class="mt-n3" placeholder="Sort by"/>
            </Col>
        </Row>
    </CardText>
    {/if}
</Card>