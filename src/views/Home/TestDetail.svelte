<script>
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/Grid.svelte";

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Avatar from 'svelte-materialify/src/components/Avatar/Avatar.svelte'
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    import {location} from 'svelte-spa-router'
    import {mockedTests} from "../../stores/mockTests";
    export let params = {};

    let allTests = [];
    let selectedTest;
    let selectedQuestion;

    mockedTests.subscribe(t => {
        allTests = t;
    })

    selectedTest = allTests.filter(t => t.id == params.id)[0];

    function handleEntitySelect(event){
        selectedQuestion = event.detail;
        console.log(selectedQuestion);
    }
</script>
<p>
    Test Detail page, {params.id}
</p>
<p>The current page is: {$location}</p>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Test detail
        </span>
        {#if selectedTest}
            <Row>
                <Col>
                    <div>
                        <div style="margin: auto; text-align: center">
                            <Avatar size={150}><img src="{`//picsum.photos/${selectedTest.id * Math.random().toString().slice(2, 5)}`}"/></Avatar>
                        </div>
                        <div class="text-h6 mt-3 mb-3" style="text-align: center">{selectedTest.name}</div>
                    </div>
                </Col>
                <Col>
                    <div class="mt-3">
                        {#each Object.keys(selectedTest) as field}
                            <div class="d-flex justify-space-between mr-16">
                                <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1, field.length)}</p>
                                {#if field === "created"}
                                    <p>{selectedTest[field].toString().slice(0, 15)}</p>
                                {:else if field === "completedUsers" || field === "questions"}
                                    <p>{selectedTest[field].length}</p>
                                {:else}
                                    <p>{selectedTest[field]}</p>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Grid gridType={"questions"} data="{selectedTest.questions}" on:entity-selected={handleEntitySelect}/>
                </Col>
                <Col>
                </Col>
            </Row>
        {:else}
            <p class="text-subtitle-2">Select a test to view its details</p>
        {/if}
    </div>
</Card>