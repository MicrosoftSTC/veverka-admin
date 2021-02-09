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

    import {FilterByRadio, FilterBySwitch, OrderType} from "../../utils/FilterScript";
    import type {FilterConstraints} from "../../utils/FilterScript"
    import FilterType from "./FilterType"
    import type FilterProps from "./FilterProps";

    export let props:FilterProps;

    let showFilter = false;

    const dispatch = createEventDispatcher();
    let initialMaxOnSlider = props.maxValueOnSlider;
    let initialMaxOnSecondSlider = props.maxValueOnSecondSlider;
    let initialValueOnSlider = [0, initialMaxOnSlider];
    let initialValueSecondOnSlider = [0, initialMaxOnSecondSlider];
    let selectedValue = OrderType.NONE;

    // internal state of filter
    let filterConstraints : FilterConstraints = {
        filterByRadio: props.filterType === FilterType.USERS ? FilterByRadio.USERS_SHOW_ALL : FilterByRadio.USERS_SHOW_ONLY_BANNED, // TODO: needs implementation
        filterBySwitch: FilterBySwitch.SHOW_ALL,
        order: [OrderType.NONE],
        pointsScale: [0, props.maxValueOnSlider],
        secondPointsScale: [0, props.maxValueOnSecondSlider],
        textInputValue: "",
        secondTextInputValue: "",
        secondInputValue: "",
    }

    // enums for labels
    enum TextInputLabel{
        SEARCH_BY_USERNAME = "Search by username"
    }

    enum SliderLabel{
        RESTRICT_POINTS = "Restrict points"
    }

    enum SwitchLabel{
        SHOW_ONLY_FOUNDERS = "Show only founders"
    }

    // set labels
    let textInputLabel:TextInputLabel;
    let secondTextInputLabel:SliderLabel;
    let sliderLabel:SliderLabel;
    let secondSliderLabel:string;
    let switchLabel:SwitchLabel;
    let radioLabels:string;
    let selectOptions:string;

    switch (props.filterType) {
        case FilterType.USERS:
            textInputLabel = TextInputLabel.SEARCH_BY_USERNAME;
            sliderLabel = SliderLabel.RESTRICT_POINTS;
            switchLabel = SwitchLabel.SHOW_ONLY_FOUNDERS;
            break;
        case FilterType.COMMUNITY:
            break;
        case FilterType.TEST:
            break;
        case FilterType.POST:
            break;
    }

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
        if(props.filterType === FilterType.USERS){
            console.log(filterConstraints.filterBySwitch);
            if(filterConstraints.filterBySwitch === FilterBySwitch.SHOW_ALL){
                filterConstraints.filterBySwitch = FilterBySwitch.SHOW_ONLY_FOUNDERS;
            } else {
                filterConstraints.filterBySwitch = FilterBySwitch.SHOW_ALL;
            }
        }
        filterEvent();
    }

    function filterByRadioValue(_:FilterByRadio){
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

    $:filterByRadioValue(filterConstraints.filterByRadio);



    // TODO: write logic which radio buttons to show depending on the FilterType
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
                <Switch on:change={filterBySwitchValue}>{switchLabel}</Switch>
            </Col>
            {/if}
        </Row>
        <Row>
            <Col cols="{6}">
                <div class="d-flex justify-space-around">
                    {#each Object.values(FilterByRadio) as option, index}
                        <Radio bind:group={filterConstraints.filterByRadio} value={option}>{option}</Radio>
                    {/each}
                </div>
            </Col>
            <Col cols="{3}">
                <Select solo bind:value={selectedValue} items="{selectAble}" class="mt-n3" placeholder="Sort by"/>
            </Col>
        </Row>
    </CardText>
    {/if}
</Card>