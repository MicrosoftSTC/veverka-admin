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

    export let filterType; // users or communities
    export let maxValueOnSlider;

    // filter-specific labels etc.
    let textInputLabel;
    let sliderLabel;
    let switchLabel;
    let radioLabels;
    let selectOptions;

    const dispatch = createEventDispatcher();
    let showFilter = false;
    let initialMaxOnSlider = maxValueOnSlider;
    let initialValueOnSlider = [0, initialMaxOnSlider];
    let selectedValue;
    let textInputValue = "";
    let filterBySwitch = false;
    let filterByRadio = 3;
    let filterConstraints = {
        "textInputValue": "",
        "filterBySwitch": false,
        "filterByRadio": 4,
        "order": "none",
        "pointsScale": [0, initialMaxOnSlider]
    };

    switch(filterType){
        case "users":
            textInputLabel = "Search by username";
            sliderLabel = "Restrict points";
            switchLabel = "Show only group founders";
            radioLabels = ["Show only reported", "Show only non-reported", "Show all", "Show only banned"];
            selectOptions = [
                { name: 'Username Asc', value: 'Username Asc' },
                { name: 'Username Desc', value: 'Username Desc' },
                { name: 'Joined Oldest', value: 'Joined Oldest' },
                { name: 'Joined Newest', value: 'Joined Newest' },
                { name: "Points Acs", value: "Points Acs"},
                { name: "Points Desc", value: 'Points Desc'}
            ];
            break;
        case "communities":
            textInputLabel = "Search by community name";
            sliderLabel = "Restrict members";
            radioLabels = ["Show only banned", "Show only investigated", "Show all"];
            selectOptions = [
                { name: 'Community name Asc', value: 'Community name Asc' },
                { name: 'Community name Desc', value: 'Community name Desc' },
                { name: 'Founded Oldest', value: 'Founded Oldest' },
                { name: 'Founded Newest', value: 'Founded Newest' },
                { name: 'Members Asc', value: 'Members Asc' },
                { name: 'Members Desc', value: 'Members Desc' },
            ];
            break;
    }

    function filterEvent(fieldName, value){
        filterConstraints = {...filterConstraints, [fieldName]:value};
        dispatch("filter-event", filterConstraints);
    }

    function filterByTextInputValue(_event){
        filterEvent("textInputValue", textInputValue);
    }

    function filterBySwitchValue(){
        filterBySwitch = !filterBySwitch;
        filterEvent("filterBySwitch", filterBySwitch);
    }

    function filterByRadioValue(reportsDependency){
        filterEvent("filterByReports", reportsDependency);
    }

    function scaleFilter(){
        filterEvent("pointsScale", initialValueOnSlider)
    }

    function order(orderDependency){
        filterEvent("order", orderDependency);
    }

    $:filterByRadioValue(filterByRadio);
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
                <TextField bind:value={textInputValue} on:input={(event) => filterByTextInputValue(event)} filled>{textInputLabel}</TextField>
            </Col>
            <Col cols="{6}">
                <Slider on:update={() => scaleFilter()} min="{0}" max="{initialMaxOnSlider}" bind:value={initialValueOnSlider} thumb={[true, true]} persistentThumb>{sliderLabel}</Slider>
            </Col>
            <Col>
                {#if switchLabel}
                    <Switch on:change={() => filterBySwitchValue()}>{switchLabel}</Switch>
                {/if}
            </Col>
        </Row>
        <Row>
            <Col cols="{6}">
                <div class="d-flex justify-space-around">
                    {#each radioLabels as label, index}
                        <Radio bind:group={filterByRadio} value={++index}>{label}</Radio>
                    {/each}
                </div>
            </Col>
            <Col cols="{3}">
                <Select solo bind:value={selectedValue} items="{selectOptions}" class="mt-n3" placeholder="Sort by"/>
            </Col>
        </Row>
    </CardText>
    {/if}
</Card>