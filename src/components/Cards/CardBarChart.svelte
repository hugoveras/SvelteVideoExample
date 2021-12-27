<script>
  import { afterUpdate, onMount } from "svelte";
  // library that creates chart objects in page
  import Chart from "chart.js";
  import { _ } from 'services/i18n.js';
  export let dataCharLine = {};
  $: data = dataCharLine;

  // init chart
  onMount(async () => {
    LoadCharBar();
  });

  afterUpdate(async () => {
    LoadCharBar();
  })
  function LoadCharBar(){
    let config = {
      type: "bar",
      data: {
        labels:data.MonthsCurrent,
        datasets: [
          {
            label: data.YearCurrent,
            backgroundColor: "#131212",
            borderColor: "#ed64a6",
            data: data.DataCurrent,
            fill: false,
            barThickness: 8
          },
          {
            label: data.YearLast,
            backgroundColor: "#4c51bf",
            borderColor: "#4c51bf",
            data: data.DataLast,
            fill: false,
            barThickness: 8
          },
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
>
  <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full max-w-full flex-grow flex-1">
        <h6 class="uppercase text-blueGray-400 mb-1 text-xs font-semibold labelsMetadata" id="hCurrentYearPerformance">
          {$_("Current Year's Performance")}
        </h6>
        <h2 class="text-blueGray-700 text-xl font-semibold labelsMetadata" id="hRecommentdationStatus">
          {$_("Recommendation Status")}
        </h2>
      </div>
    </div>
  </div>
  <div class="p-4 flex-auto">
    <div class="relative h-350-px">
      <canvas id="bar-chart"></canvas>
    </div>
  </div>
</div>
