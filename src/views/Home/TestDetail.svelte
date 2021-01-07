<script>
    import Filter from "../../components/Filter.svelte";
    import Grid from "../../components/Grid.svelte";
    import QuestionDetail from "../../components/QuestionDetail.svelte";

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Avatar from 'svelte-materialify/src/components/Avatar/Avatar.svelte'
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import ExpansionPanels from 'svelte-materialify/src/components/ExpansionPanels';
    import ExpansionPanel from 'svelte-materialify/src/components/ExpansionPanels/ExpansionPanel.svelte';
    import Checkbox from 'svelte-materialify/src/components/Checkbox';
    import Radio from 'svelte-materialify/src/components/Radio'

    import {mockedTests} from "../../stores/mockTests";

    export let params = {};

    let allTests = [];
    let selectedTest;
    let selectedQuestion;
    let selectedUser;
    let selectedGrid = "questions";

    mockedTests.subscribe(t => {
        allTests = t;
    })

    selectedTest = allTests.filter(t => t.id == params.id)[0];

    function handleQuestionSelect(event) {
        selectedQuestion = event.detail;
        console.log(selectedQuestion);
    }

    function handleUserSelect(event){
        selectedUser = event.detail;
    }
</script>
<h3 class="text-h4">Test detail</h3>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        {#if selectedTest}
            <Row>
                <Col>
                    <div>
                        <div style="margin: auto; text-align: center">
                            <Avatar size={150}><img src="{`//picsum.photos/${selectedTest.id * Math.random().toString().slice(2, 5)}`}"/></Avatar>
                        </div>
                        <div class="text-h6 mt-3 mb-3" style="text-align: center">{selectedTest.name}</div>
                        <ExpansionPanels multiple accordion>
                            <ExpansionPanel>
                                <span slot="header">Report Test</span>
                                <div>
                                    <Checkbox color="orange accent-3">Sexual harrasment</Checkbox>
                                    <Checkbox color="orange accent-3">Trolling</Checkbox>
                                    <Checkbox color="orange accent-3">Rasism</Checkbox>
                                    <Checkbox color="orange accent-3">Insulting others</Checkbox>
                                </div>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <span slot="header">Review test</span>
                                <div>
                                    <Checkbox indeterminate color="error">Sexual harrasment (32)</Checkbox>
                                    <Checkbox color="error">Trolling (12)</Checkbox>
                                    <Checkbox indeterminate color="error">Rasism (78)</Checkbox>
                                    <Checkbox color="error">Insulting others (3)</Checkbox>
                                </div>
                            </ExpansionPanel>
                            <ExpansionPanel>
                                <span slot="header">More actions</span>
                                <Checkbox color="error">Ban this test</Checkbox>
                            </ExpansionPanel>
                        </ExpansionPanels>
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
                    <div class="d-flex justify-space-around">
                        <Radio bind:group={selectedGrid} value={"questions"}>Show questions</Radio>
                        <Radio bind:group={selectedGrid} value={"users"}>Show completed users</Radio>
                    </div>
                    {#if selectedGrid === "questions"}
                        <Grid label="{'questions board'}" gridType={"questions"} data="{selectedTest.questions}" on:entity-selected={handleQuestionSelect}/>
                        {:else}
                        <Grid label="{'completed users board'}" disabled="{true}" gridType={"users"} data="{selectedTest.completedUsers}" on:entity-selected={handleUserSelect}/>
                    {/if}
                </Col>
                <Col>
                    <QuestionDetail detailedQuestion="{selectedGrid === 'users' ? null : selectedQuestion}"/>
                </Col>
            </Row>
        {:else}
            <p class="text-subtitle-2">Select a test to view its details</p>
        {/if}
    </div>
</Card>