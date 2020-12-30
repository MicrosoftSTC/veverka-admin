<script>
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardTitle from 'svelte-materialify/src/components/Card/CardTitle.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import CardActions from 'svelte-materialify/src/components/Card/CardActions.svelte';
    import ExpansionPanels from 'svelte-materialify/src/components/ExpansionPanels';
    import ExpansionPanel from 'svelte-materialify/src/components/ExpansionPanels/ExpansionPanel.svelte';
    import Checkbox from 'svelte-materialify/src/components/Checkbox';
    import Button from 'svelte-materialify/src/components/Button';
    import Dialog from 'svelte-materialify/src/components/Dialog/Dialog.svelte'
    import Snackbar from 'svelte-materialify/src/components/Snackbar/Snackbar.svelte'

    export let actionAble = false;
    let active = false;
    let snackbar = false;
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            User actions
        </span>
        {#if actionAble}
            <ExpansionPanels multiple>
                <ExpansionPanel>
                    <span slot="header">Report user</span>
                    <div>
                        <Checkbox color="orange accent-3">Sexual harrasment</Checkbox>
                        <Checkbox color="orange accent-3">Trolling</Checkbox>
                        <Checkbox color="orange accent-3">Rasism</Checkbox>
                        <Checkbox color="orange accent-3">Insulting others</Checkbox>
                    </div>
                </ExpansionPanel>
                <ExpansionPanel>
                    <span slot="header">Review user</span>
                    <div>
                        <Checkbox indeterminate color="error">Sexual harrasment (32)</Checkbox>
                        <Checkbox color="error">Trolling (12)</Checkbox>
                        <Checkbox indeterminate color="error">Rasism (78)</Checkbox>
                        <Checkbox color="error">Insulting others (3)</Checkbox>
                    </div>
                </ExpansionPanel>
                <ExpansionPanel>
                    <span slot="header">More actions</span>
                    <Checkbox color="error">Ban this user forever</Checkbox>
                </ExpansionPanel>
            </ExpansionPanels>
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