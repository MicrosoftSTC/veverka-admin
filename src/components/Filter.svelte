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
    export let maxValueOnSecondSlider;

    // filter-specific labels etc.
    let textInputLabel;
    let secondTextInputLabel;
    let sliderLabel;
    let secondSliderLabel;
    let switchLabel;
    let radioLabels;
    let selectOptions;

    const dispatch = createEventDispatcher();
    let showFilter = false;
    let initialMaxOnSlider = maxValueOnSlider;
    let initialMaxOnSecondSlider = maxValueOnSecondSlider;
    let initialValueOnSlider = [0, initialMaxOnSlider];
    let initialValueSecondOnSlider = [0, maxValueOnSecondSlider];
    let selectedValue;
    let textInputValue = "";
    let secondTextInputValue = "";
    let filterBySwitch = false;
    let filterByRadio = 3;
    let filterConstraints = {
        "textInputValue": "",
        "secondTextInputValue": "",
        "secondInputValue": "",
        "filterBySwitch": false,
        "filterByRadio": 3,
        "order": "none",
        "pointsScale": [0, initialMaxOnSlider],
        "secondPointsScale":[0, initialMaxOnSlider]
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
            secondTextInputLabel = "Search by founder username";
            sliderLabel = "Restrict members";
            radioLabels = ["Show only investigated", "Show only non-investigated", "Show all", "Show only banned"];
            selectOptions = [
                { name: 'Name Asc', value: 'Name Asc' },
                { name: 'Name Desc', value: 'Name Desc' },
                { name: 'Since Oldest', value: 'Since Oldest' },
                { name: 'Since Newest', value: 'Since Newest' },
                { name: 'Members Asc', value: 'Members Asc' },
                { name: 'Members Desc', value: 'Members Desc' },
            ];
            break;
        case "tests":
            textInputLabel = "Search by test name";
            secondTextInputLabel = "Search by creator username";
            sliderLabel = "Restrict points";
            secondSliderLabel = "Restrict users completed";
            radioLabels = ["Show only investigated", "Show only non-investigated", "Show all", "Show only banned"];
            selectOptions = [
                { name: 'Name Asc', value: 'Name Asc' },
                { name: 'Name Desc', value: 'Name Desc' },
                { name: 'Created Oldest', value: 'Created Oldest' },
                { name: 'Created Newest', value: 'Created Newest' },
                { name: "Points Acs", value: "Points Acs"},
                { name: "Points Desc", value: 'Points Desc'},
                {name: "Questions Count Asc", value: "Questions Asc"},
                {name: "Questions Count Desc", value: "Questions Desc"},
            ];
            break;
    }

    function filterEvent(fieldName, value){
        filterConstraints = {...filterConstraints, [fieldName]:value};
        dispatch("filter-event", filterConstraints);
    }

    function filterByTextInputValue(){
        filterEvent("textInputValue", textInputValue);
    }

    function filterBySecondTextInputValue(){
        filterEvent("secondTextInputValue", secondTextInputValue);
    }

    function filterBySwitchValue(){
        filterBySwitch = !filterBySwitch;
        filterEvent("filterBySwitch", filterBySwitch);
    }

    function filterByRadioValue(reportsDependency){
        filterEvent("filterByRadio", reportsDependency);
    }

    function scaleFilter(){
        filterEvent("pointsScale", initialValueOnSlider)
    }

    function scaleSecondFilter(){
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
                <TextField bind:value={textInputValue} on:input={() => filterByTextInputValue()} filled>{textInputLabel}</TextField>
            </Col>
            {#if secondTextInputLabel}
            <Col>
                <TextField bind:value={secondTextInputValue} on:input={() => filterBySecondTextInputValue()} filled>{secondTextInputLabel}</TextField>
            </Col>
            {/if}
            <Col cols="{filterType === 'tests' ? 8 : 6}">
                <Row>
                    <Col>
                        <Slider on:update={() => scaleFilter()} min="{0}" max="{initialMaxOnSlider}" bind:value={initialValueOnSlider} thumb={[true, true]} persistentThumb>{sliderLabel}</Slider>
                    </Col>
                    {#if secondSliderLabel}
                        <Col>
                        <Slider on:update={() => scaleFilter()} min="{0}" max="{initialMaxOnSecondSlider}" bind:value={initialValueSecondOnSlider} thumb={[true, true]} persistentThumb>{secondSliderLabel}</Slider>
                        </Col>
                    {/if}
                </Row>
            </Col>
            {#if switchLabel}
            <Col>
                <Switch on:change={() => filterBySwitchValue()}>{switchLabel}</Switch>
            </Col>
            {/if}
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