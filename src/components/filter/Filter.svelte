<script lang="ts">
    import {createEventDispatcher} from 'svelte';

    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import Slider from "svelte-materialify/src/components/Slider"
    import Switch from "svelte-materialify/src/components/Switch"
    import TextField from "svelte-materialify/src/components/TextField"
    import Radio from 'svelte-materialify/src/components/Radio';
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import Select from "svelte-materialify/src/components/Select/Select.svelte"

    import type {FilterByRadio, FilterBySwitch, FilterConstraints, Order} from "../../utils/FilterScript";
    import type {FilterType} from "./FilterType.ts";
    import type {FilterProps} from "./FilterProps";

    export let props:FilterProps;

    let showFilter = false;

    const dispatch = createEventDispatcher();
    let initialMaxOnSlider = props.maxValueOnSlider;
    let initialMaxOnSecondSlider = props.maxValueOnSecondSlider;
    let initialValueOnSlider = [0, initialMaxOnSlider];
    let initialValueSecondOnSlider = [0, initialMaxOnSecondSlider];
    let selectedValue;

    // internal state of filter
    let filterConstraints : FilterConstraints = {
        filterByRadio: props.filterType === FilterType.USERS ? FilterByRadio.USERS_SHOW_ALL : FilterByRadio.USERS_SHOW_ONLY_BANNED, // TODO: needs implementation
        filterBySwitch: FilterBySwitch.SHOW_ALL,
        order: [Order.NONE],
        pointsScale: [0, props.maxValueOnSlider],
        secondPointsScale: [0, props.maxValueOnSecondSlider],
        textInputValue: "",
        secondTextInputValue: "",
        secondInputValue: "",
    }

    // set labels
    let textInputLabel:TextInputLabel;
    let secondTextInputLabel:SliderLabel;
    let sliderLabel:SwitchLabel;
    let secondSliderLabel:string;
    let switchLabel:string;
    let radioLabels:string;
    let selectOptions:string;

    enum TextInputLabel{
        SEARCH_BY_USERNAME = "Search by username"
    }

    enum SliderLabel{
        RESTRICT_POINTS = "Restrict points"
    }

    enum SwitchLabel{
        SHOW_ONLY_FOUNDERS = "Show only founders"
    }

    switch (props.filterType) {
        case FilterType.USERS:
            textInputLabel = TextInputLabel.SEARCH_BY_USERNAME;
            sliderLabel = SwitchLabel.SHOW_ONLY_FOUNDERS;
            switchLabel = "Show only group founders";
            break;
        case FilterType.COMMUNITY:
            break;
        case FilterType.TEST:
            break;
        case FilterType.POST:
            break;
    }

    // switch(filterType){
    //     case "users":
    //         textInputLabel = "Search by username";
    //         sliderLabel = "Restrict points";
    //         switchLabel = "Show only group founders";
    //         radioLabels = ["Show only reported", "Show only non-reported", "Show all", "Show only banned"];
    //         selectOptions = [
    //             { name: 'Username Asc', value: 'Username Asc' },
    //             { name: 'Username Desc', value: 'Username Desc' },
    //             { name: 'Joined Oldest', value: 'Joined Oldest' },
    //             { name: 'Joined Newest', value: 'Joined Newest' },
    //             { name: "Points Acs", value: "Points Acs"},
    //             { name: "Points Desc", value: 'Points Desc'}
    //         ];
    //         break;
    //     case "communities":
    //         textInputLabel = "Search by community name";
    //         secondTextInputLabel = "Search by founder username";
    //         sliderLabel = "Restrict members";
    //         radioLabels = ["Show only investigated", "Show only non-investigated", "Show all", "Show only banned"];
    //         selectOptions = [
    //             { name: 'Name Asc', value: 'Name Asc' },
    //             { name: 'Name Desc', value: 'Name Desc' },
    //             { name: 'Since Oldest', value: 'Since Oldest' },
    //             { name: 'Since Newest', value: 'Since Newest' },
    //             { name: 'Members Asc', value: 'Members Asc' },
    //             { name: 'Members Desc', value: 'Members Desc' },
    //         ];
    //         break;
    //     case "tests":
    //         textInputLabel = "Search by test name";
    //         secondTextInputLabel = "Search by creator username";
    //         sliderLabel = "Restrict points";
    //         secondSliderLabel = "Restrict users completed";
    //         radioLabels = ["Show only investigated", "Show only non-investigated", "Show all", "Show only banned"];
    //         selectOptions = [
    //             { name: 'Name Asc', value: 'Name Asc' },
    //             { name: 'Name Desc', value: 'Name Desc' },
    //             { name: 'Created Oldest', value: 'Created Oldest' },
    //             { name: 'Created Newest', value: 'Created Newest' },
    //             { name: "Points Acs", value: "Points Acs"},
    //             { name: "Points Desc", value: 'Points Desc'},
    //             {name: "Questions Count Asc", value: "Questions Asc"},
    //             {name: "Questions Count Desc", value: "Questions Desc"},
    //         ];
    //         break;
    // }

    function filterEvent(){
        dispatch("filter-event", filterConstraints);
    }

    function filterByTextInputValue(){
        filterEvent();
    }

    function filterBySecondTextInputValue(){
        filterEvent();
    }

    function filterBySwitchValue(){
        // switch needs to happen
        if(props.filterType = FilterType.USERS){
            if(filterConstraints.filterBySwitch === FilterBySwitch.SHOW_ALL)
                filterConstraints.filterBySwitch = FilterBySwitch.SHOW_ONLY_FOUNDERS;
            else
                filterConstraints.filterBySwitch = FilterBySwitch.SHOW_ALL;
        }
        filterEvent();
    }

    function filterByRadioValue(reportsDependency){
        // filterEvent("filterByRadio", reportsDependency);
        if(props.filterType = FilterType.USERS){
            filterConstraints.filterByRadio = FilterByRadio.USERS_SHOW_ALL; // TODO: wtf is this
        }
        filterEvent();
    }

    function scaleFilter(){
        // filterEvent("pointsScale", initialValueOnSlider)
    }

    function scaleSecondFilter(){
        // filterEvent("secondPointsScale", initialValueSecondOnSlider)
    }

    function order(orderDependency){
        // filterEvent("order", orderDependency);
    }

    // $:filterByRadioValue(filterByRadio);
    // $:order(selectedValue);
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
                <TextField bind:value={filterConstraints.textInputValue} on:input={() => filterByTextInputValue()} filled>{textInputLabel}</TextField>
            </Col>
            {#if secondTextInputLabel}
            <Col>
                <TextField bind:value={filterConstraints.secondTextInputValue} on:input={() => filterBySecondTextInputValue()} filled>{secondTextInputLabel}</TextField>
            </Col>
            {/if}
            <Col cols="{props.filterType === FilterType.TEST ? 8 : 6}">
                <Row>
                    <Col>
                        <Slider on:update={() => scaleFilter()} min="{0}" max="{initialMaxOnSlider}" bind:value={initialValueOnSlider} thumb={[true, true]} persistentThumb>{sliderLabel}</Slider>
                    </Col>
                    {#if secondSliderLabel}
                        <Col>
                        <Slider on:update={() => scaleSecondFilter()} min="{0}" max="{initialMaxOnSecondSlider}" bind:value={initialValueSecondOnSlider} thumb={[true, true]} persistentThumb>{secondSliderLabel}</Slider>
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
                    {#each Object.values(FilterByRadio) as option, index}
                        <Radio bind:group={filterConstraints.filterByRadio} value={FilterByRadio[index]}>{option}</Radio>
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