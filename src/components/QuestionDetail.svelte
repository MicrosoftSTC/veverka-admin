<script>
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Chip from 'svelte-materialify/src/components/Chip';

    export let detailedQuestion;
</script>
<Card outlined style="min-width: 100%" class="mt-3">
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            Question Details
        </span>
        {#if detailedQuestion}
            <p class="text-subtitle-2">{detailedQuestion.content}</p>
                {#each detailedQuestion.answers as answer}
                    <div class="d-flex justify-space-between align-baseline">
                        <span class="mr-4">{answer.content}</span>
                        <Chip label class="{answer.correct ? 'ma-2 red accent-3 white-text' : 'ma-2 green accent-3 white-text'}">{answer.correct}</Chip>
                    </div>
                {/each}
            {:else}
            <p class="text-subtitle-2">Question details panel will show after question will be selected</p>
        {/if}
    </div>
</Card>