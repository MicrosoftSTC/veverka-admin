<script>
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Chip from 'svelte-materialify/src/components/Chip';
    import Button from 'svelte-materialify/src/components/Button';

    export let detailedReport;

    function denyReportType(report){
        // console.log("Denying: " + report.content + " " + report.content);
    }
</script>
<Card outlined style="min-width: 100%" class="mt-3">
<div class="pl-4 pr-4 pt-3">
    <span class="text-overline">
        Report Details
    </span>
    {#if detailedReport}
        <div class="mt-4">
            {#each Object.keys(detailedReport.reporter) as field}
                <div class="d-flex justify-space-between mr-16">
                    <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1, field.length)}</p>
                    <p>{field === "joined" ? detailedReport.reporter[field].toString().slice(0, 15) : detailedReport.reporter[field]}</p>
                </div>
            {/each}
            <p class="text-h5 mb-n1">Test reports:</p>
            {#each detailedReport.reports as report (report.id)}
                <span class="mr-4">
                    <Chip close size="small" on:close={() => denyReportType(report)} label class="mt-2 orange accent-3 white-text">{report.content.toUpperCase()}</Chip>
                </span>
            {/each}
            <p class="text-h5">Report Comment:</p>
            {#if detailedReport.comment}
                <p>{detailedReport.comment}</p>
            {/if}
            <Button block class="green white-text">Approve</Button>
            <Button block class="red white-text">Deny</Button>
        </div>
    {:else}
        <p class="text-subtitle-2">Report details panel will show after report will be selected</p>
    {/if}
</div>
</Card>