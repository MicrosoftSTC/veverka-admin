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
    import Avatar from 'svelte-materialify/src/components/Avatar/Avatar.svelte'

    export let selectedCommunity;
    let active = false;
    let snackbar = false;

    $:console.log(selectedCommunity);
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Community detail
        </span>
        {#if selectedCommunity}
            <div>
                <div style="margin: auto; text-align: center">
                    <Avatar size={150}><img src="{`//picsum.photos/${54}`}" alt="profile"/></Avatar>
                </div>
                <div class="text-h6 mt-3 mb-3" style="text-align: center">{selectedCommunity.name}</div>
                <div class="mt-3">
                    {#each Object.keys(selectedCommunity) as field}
                        <div class="d-flex justify-space-between mr-16">
                            <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1, field.length)}</p>
                            <p>{field === "since" ? selectedCommunity[field].toString().slice(0, 15) : selectedCommunity[field]}</p>
                        </div>
                    {/each}
                </div>
            </div>
        {:else}
            <p class="text-subtitle-2">Select a community to view its details</p>
        {/if}
    </div>
</Card>