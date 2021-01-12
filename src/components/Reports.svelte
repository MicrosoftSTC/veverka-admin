<script>
    import ExpansionPanels from 'svelte-materialify/src/components/ExpansionPanels';
    import ExpansionPanel from 'svelte-materialify/src/components/ExpansionPanels/ExpansionPanel.svelte';
    import Checkbox from 'svelte-materialify/src/components/Checkbox';
    import Button from 'svelte-materialify/src/components/Button';
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';

    export let reportsType;
</script>
<Card>
    <div class="pl-4 pr-4 pt-3">
        <span class="text-overline">
            {reportsType} Reports
        </span>
    </div>
    <CardText>
        <ExpansionPanels multiple accordion>
            <ExpansionPanel>
                <span slot="header">Report {reportsType}</span>
                <div>
                    <Checkbox color="orange accent-3">Sexual harrasment</Checkbox>
                    <Checkbox color="orange accent-3">Trolling</Checkbox>
                    <Checkbox color="orange accent-3">Rasism</Checkbox>
                    <Checkbox color="orange accent-3">Insulting others</Checkbox>
                </div>
            </ExpansionPanel>
            <ExpansionPanel>
                <span slot="header">Review {reportsType}</span>
                <div>
                    <Checkbox indeterminate color="error">Sexual harrasment (32)</Checkbox>
                    <Checkbox color="error">Trolling (12)</Checkbox>
                    <Checkbox indeterminate color="error">Rasism (78)</Checkbox>
                    <Checkbox color="error">Insulting others (3)</Checkbox>
                </div>
            </ExpansionPanel>
            <ExpansionPanel>
                <span slot="header">More actions</span>
                <Checkbox color="error">Ban this {reportsType}</Checkbox>
            </ExpansionPanel>
        </ExpansionPanels>
        <Button block class="red white-text mt-3 mb-3">Confirm</Button>
    </CardText>
</Card>