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

    export let selectedEntities;
    let active = false;
    let snackbar = false;
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Community detail
        </span>
        {#if selectedEntities.length === 1}
            <div>
                <div style="margin: auto; text-align: center">
                    <Avatar size={150}><img src="{`//picsum.photos/${54}`}" alt="profile"/></Avatar>
                </div>
                {selectedEntities[0].name}
            </div>
        {:else}
            <p class="text-subtitle-2">Select a community to view its details</p>
        {/if}
    </div>
</Card>