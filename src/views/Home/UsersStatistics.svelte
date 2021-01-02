<script>
    import { onMount } from 'svelte';

    import Chart from 'chart.js';

    import Card from 'svelte-materialify/src/components/Card/Card.svelte';
    import Col from 'svelte-materialify/src/components/Grid/Col.svelte';
    import Row from 'svelte-materialify/src/components/Grid/Row.svelte';

    function makeCharts(context3d){
        new Chart(context3d, {
            type: 'line',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                datasets: [{
                    label: '# of Votes',
                    data: [12, 19, 3, 5, 2, 3],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                events: ['click'],
                tooltips: {
                    mode: 'point'
                }
            }
        });
    };

    onMount(() => {
        var ctx0 = document.getElementById('myChart0').getContext('2d');
        var ctx1 = document.getElementById('myChart1').getContext('2d');
        makeCharts(ctx0);
        makeCharts(ctx1);
    });
</script>
<h3 class="text-h4">Users statistics</h3>
<Row>
    <Col cols="{3}">
        <Card outlined style=";">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline"> Overall users </span>
                <br />
                <span class="text-h5 mb-2">103</span>
                <br />
                <span class="text-overline">Overall active users</span>
                <br />
                <span class="text-h5 mb-2">36</span>
                <br />
            </div>
        </Card>
    </Col>
    <Col cols="{3}">
        <Card outlined style=";">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline">Overall banns</span>
                <br />
                <span class="text-h5 mb-2">12</span>
                <br />
                <span class="text-overline">Currently banned users</span>
                <br />
                <span class="text-h5 mb-2">3</span>
                <br />
            </div>
        </Card>
    </Col>
    <Col cols="{3}">
        <Card outlined style=";">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline"> Forever banned users </span>
                <br />
                <span class="text-h5 mb-2">67</span>
                <br />
            </div>
        </Card>
    </Col>
    <Col cols="{3}">
        <Card outlined style=";">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline">Reports</span>
                <br />
                <span class="text-h5 mb-2">122</span>
                <br />
                <span class="text-overline">Approved reports</span>
                <br />
                <span class="text-h5 mb-2">34</span>
                <br />
            </div>
        </Card>
    </Col>
</Row>
<Row>
    <Col>
        <Card outlined style="max-height: 75vh; max-width: 50vw">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline">Overall Users</span>
                <div>
                    <canvas id="myChart0"></canvas>
                </div>
            </div>
        </Card>
    </Col>
    <Col>
        <Card outlined style="max-height: 75vh; max-width: 50vw">
            <div class="pl-4 pr-4 pt-2 pb-2">
                <span class="text-overline">New Users Joined</span>
                <div>
                    <canvas id="myChart1"></canvas>
                </div>
            </div>
        </Card>
    </Col>
</Row>