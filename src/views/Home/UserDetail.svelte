<script>
    import {mockedUsers} from "../../stores/mockUsers";
    import Reports from "../../components/Reports.svelte";
    import Grid from "../../components/Grid.svelte";

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import Radio from 'svelte-materialify/src/components/Radio';
    import Avatar from 'svelte-materialify/src/components/Avatar/Avatar.svelte'
    import ReportDetail from "../../components/detail/ReportDetail.svelte";
    import PostDetail from "../../components/detail/PostDetail.svelte";
    import StarDetail from "../../components/detail/StarDetail.svelte";

    export let params = {};
    let selectedUser;
    let gridOptions = ["posts", "stars", "reportsGiven", "reportsReceived", "communities", "activity"];
    let selectedGrid = gridOptions[0];

    let reportsType = "user";

    let detailedReport = null;
    let detailedPost = null;
    let detailedStar = null;

    mockedUsers.subscribe(u => {
        selectedUser = u.filter(user => user.id == params.id)[0]
    })

    function handleUserSelect(event) {
        if (selectedGrid === gridOptions[2] || selectedGrid === gridOptions[3]) {
            detailedReport = event.detail;
        } else if (selectedGrid === gridOptions[0]) {
            detailedPost = event.detail;
        } else if (selectedGrid === gridOptions[1]){
            console.log(event);
            detailedStar = event.detail;
        }
    }

    // when moving onto other tab in the mini grid
    function unSelectSelectableProperties(_) {
        detailedReport = null;
    }

    $:unSelectSelectableProperties(selectedGrid);
</script>
<h3 class="text-h4">User detail</h3>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        {#if selectedUser}
            <Row>
                <Col>
                    <div>
                        <div style="margin: auto; text-align: center">
                            <Avatar size={150}><img src="{`//picsum.photos/${selectedUser.id * Math.random().toString().slice(2, 5)}`}"/></Avatar>
                        </div>
                        <div class="text-h6 mt-3 mb-3" style="text-align: center">{selectedUser.username}</div>
                        <Reports {reportsType}/>
                    </div>
                </Col>
                <Col>
                    <div class="mt-3">
                        {#each Object.keys(selectedUser) as field}
                            <div class="d-flex justify-space-between mr-16">
                                <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1, field.length)}</p>
                                {#if field === "joined"}
                                    <p>{selectedUser[field].toString().slice(0, 15)}</p>
                                {:else if field === "completedUsers" || field === "questions" || field === "reports" || field === "posts" || field === "reportsGiven" || field === "reportsReceived" || field === "stars" || field === "communities"}
                                    <p>{selectedUser[field].length}</p>
                                {:else}
                                    <p>{selectedUser[field]}</p>
                                {/if}
                            </div>
                        {/each}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="d-flex justify-space-around">
                        {#each gridOptions as option}
                            <Radio bind:group={selectedGrid} value={option}>{option.charAt(0).toUpperCase() + option.slice(1)}</Radio>
                        {/each}
                    </div>
                    <Grid on:entity-selected={handleUserSelect} label="{selectedGrid}" username="{selectedUser.username}" disabled="{true}" gridType={selectedGrid === gridOptions[2] || selectedGrid === gridOptions[3] ? "reports" : selectedGrid} data="{selectedUser[selectedGrid]}"/>
                </Col>
                <Col>
                    <div class="mt-9">
                        {#if selectedGrid === gridOptions[0]}
                            <PostDetail {detailedReport}/>
                        {:else if selectedGrid === gridOptions[2] || selectedGrid === gridOptions[3]}
                            <ReportDetail {detailedReport}/>
                        {:else if selectedGrid === gridOptions[1]}
                            <StarDetail {detailedStar}/>
                        {/if}
                    </div>
                </Col>
            </Row>
        {/if}
    </div>
</Card>