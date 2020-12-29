<script>
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';
    import Button from 'svelte-materialify/src/components/Button';
    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import CardText from 'svelte-materialify/src/components/Card/CardText.svelte';
    import Icon from "svelte-materialify/src/components/Icon"
    import TextField from 'svelte-materialify/src/components/TextField';
    import {mdiLock, mdiLockOpen} from "@mdi/js"

    let show = false;
    let active = true;
    let username = null;
    let password = null;

    const usernameRules = [x => x.length > 4 && x.length < 21 || "Username must be between 5 and 20 characters"];

    const passwordRules = [x => x.length > 5 || "Password must be at least 5 characters"];
</script>
<Row class="align-start mt-16"  style="height: 100vh">
    <Col cols={4} offset={4}>
        <Card outlined raised style="width: 100%">
            <div style="text-align: center" class="pt-3">
                <span class="text-h5 mb-2">Admin Console Login</span>
                <br />
            </div>

            <CardText>
                <div class="pl-2 pt-3">
                    <div>
                        <TextField rules="{usernameRules}" outlined value="{username}">Username</TextField>
                    </div>
                    <div>
                        <TextField rules="{passwordRules}" outlined value="{password}" type="{show ? 'text' : 'password'}">
                            Password
                            <div
                                slot="append"
                                on:click={() => {show = !show}}>
                                <Icon path={show ? mdiLockOpen : mdiLock} />
                            </div>
                        </TextField>
                    </div>
                    <div>
                        <Button block class="green white-text">Login</Button>
                    </div>
                </div>
            </CardText>
        </Card>
    </Col>
</Row>