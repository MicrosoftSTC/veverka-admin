<script>
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Chip from 'svelte-materialify/src/components/Chip';
    import Button from 'svelte-materialify/src/components/Button';

    export let detailedPost;

    function denyReportType(report){
        // console.log("Denying: " + report.content + " " + report.content);
    }
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
    <span class="text-overline">
        Post Details
    </span>
        {#if detailedPost}
            <div class="mt-4">
                {#each Object.keys(detailedPost) as field}
                    <div class="d-flex justify-space-between mr-16">
                        <p class="text-subtitle-2">{field.toString().slice(0, 1).toUpperCase() + field.toString().slice(1)}</p>
                        <p>{field === "posted" ? detailedPost[field].toString().slice(0, 15) : field === "reports" ? detailedPost[field].length : detailedPost[field]}</p>
                    </div>
                {/each}
<!--                <p class="text-h5 mb-n1">Post reports:</p>-->
                <!--{#each detailedPost.reports as report (report.id)}-->
                <!--    {#each report.reports as violation (violation.id)}-->
                <!--        <span class="mr-4">-->
                <!--            <Chip close size="small" on:close={() => denyReportType(report)} label class="mt-2 orange accent-3 white-text">{violation.content.toUpperCase()}</Chip>-->
                <!--        </span>-->
                <!--    {/each}-->
                <!--{/each}-->
<!--                <p class="text-h5">Report Comment:</p>-->
<!--                {#if detailedPost.comment}-->
<!--                    <p>{detailedPost.comment}</p>-->
<!--                {/if}-->
<!--                <Button block class="green white-text">Approve</Button>-->
<!--                <Button block class="red white-text">Deny</Button>-->
            </div>
        {:else}
            <p class="text-subtitle-2">Report details panel will show after report will be selected</p>
        {/if}
    </div>
</Card>