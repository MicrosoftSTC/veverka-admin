<script>
    import {pushTo} from "../utils/redirectService";

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Avatar from 'svelte-materialify/src/components/Avatar/Avatar.svelte'
    import Button from 'svelte-materialify/src/components/Button';

    export let selectedTest;

    function redirectToTestDetails(){
        pushTo(`/home/tests/${selectedTest.id}`);
    }
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Test actions
        </span>
        {#if selectedTest}
            <div>
                <div style="margin: auto; text-align: center">
                    <Avatar size={150}><img src="{`//picsum.photos/${selectedTest.id * Math.random().toString().slice(2, 5)}`}"/></Avatar>
                </div>
                <div class="text-h6 mt-3 mb-3" style="text-align: center">{selectedTest.name}</div>
                <div class="mt-3">
                    {#each Object.keys(selectedTest) as field}
                        <div class="d-flex justify-space-between mr-16">
                            <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1, field.length)}</p>
                            {#if field === "created"}
                                <p>{selectedTest[field].toString().slice(0, 15)}</p>
                            {:else if field === "completedUsers" || field === "questions" || field === "reports"}
                                <p>{selectedTest[field].length}</p>
                            {:else}
                                <p>{selectedTest[field]}</p>
                            {/if}
                        </div>
                    {/each}
                </div>
                <Button on:click={redirectToTestDetails} block class="pink accent-2 white-text" depressed>More details & administration</Button>
            </div>
            {:else}
            <p class="text-subtitle-2">Select a test to view its details</p>
        {/if}
    </div>
</Card>