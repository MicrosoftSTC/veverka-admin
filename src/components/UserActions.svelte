<script>
    import Reports from "./Reports.svelte";

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardTitle from 'svelte-materialify/src/components/Card/CardTitle.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import CardActions from 'svelte-materialify/src/components/Card/CardActions.svelte';
    import Button from 'svelte-materialify/src/components/Button';
    import Dialog from 'svelte-materialify/src/components/Dialog/Dialog.svelte'
    import Snackbar from 'svelte-materialify/src/components/Snackbar/Snackbar.svelte'

    export let selectedEntities;
    let active = false;
    let snackbar = false;
    let reportsType = "user";
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            User actions
        </span>
        {#if selectedEntities.length > 0}
            <Reports {reportsType}/>
            <Button on:click={() => active = true} block class="red white-text mt-3 mb-3">Confirm</Button>
            <Dialog persistent bind:active>
                <Card>
                    <CardTitle>Are you sure about your actions?</CardTitle>
                    <CardText>
                        Actions in admin console can not be reverted
                    </CardText>
                    <CardActions>
                        <Button on:click={() => {active = false; snackbar=true}} text class="red-text mr-5">Yes</Button>
                        <Button on:click={() => active = false} text class="green white-text">Hell no</Button>
                    </CardActions>
                </Card>
            </Dialog>
            <Snackbar class="flex-column" bind:active={snackbar} bottom center timeout={3000}>
                Luci4er has been banned for 3 months
            </Snackbar>
        {:else}
            <p class="text-subtitle-2">User actions panel will show after user will be selected</p>
        {/if}
    </div>
</Card>