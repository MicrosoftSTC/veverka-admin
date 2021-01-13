<script>
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';

    export let detailedStar;

    function denyReportType(report){
        // console.log("Denying: " + report.content + " " + report.content);
    }
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
    <span class="text-overline">
        Star details
    </span>
        {#if detailedStar}
            <div class="mt-4">
                {#each Object.keys(detailedStar) as field}
                    <div class="d-flex justify-space-between mr-16">
                        <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1)}</p>
                        <p>{field === "given" ? detailedStar[field].toString().slice(0, 15) : detailedStar[field]}</p>
                    </div>
                {/each}
            </div>
        {:else}
            <p class="text-subtitle-2">Star details panel will show after star will be selected</p>
        {/if}
    </div>
</Card>