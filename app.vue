<template>
  <div class="container mx-auto">
    <div class="my-4">
      <p class="title"><strong>Общая выручка</strong></p>
      <div class="grid grid-cols-6 gap-3">
        <div class="card-charts">
          <div class="uppercase title-cards">
            Общee оплачено
          </div>
          <div class="text-white text-bold">
            {{ totalRevenue }} &#8381;
          </div>
        </div>
        <!-- Position Revenues Cards -->
        <div v-for="(module, index) in outData" :key="index" v-bind="module" class="card-charts">
          <div class="uppercase box-in-center title-cards">
            <UIcon name="ic:baseline-circle" size="8" dynamic :color="module.color" class="mr-1"/>
            {{ module.title }}
          </div>
          <div class="text-white text-bold">
            {{ positionRevenues[index] }} &#8381;
          </div>
        </div>
      </div>
    </div>
    <ClientOnly>
      <apexchart
          :key="chartKey"
          height="400"
          width="1200"
          :options="options"
          :series="chartSeries"
      ></apexchart>
      <apexchart :key="chartKey" height="300" width="1200" :options="chartOptions" :series="series"></apexchart>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import {onMounted, ref} from 'vue';

const chartKey = ref(0);

const options = ref({
  chart: {
    height: 300,
    type: 'line',
    stacked: true,
  },
  stroke: {
    width: [0, 2, 5],
    curve: 'smooth'
  },
  plotOptions: {
    bar: {
      columnWidth: '60%',
    },
  },
  fill: {
    opacity: 1,
  },
  xaxis: {
    type: 'category',
    categories: [],
  },
  yaxis: {
    title: {
      text: 'рубли',
    },
    min: 0,
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetY: 20,
    offsetX: 40,
    color: "#93969C"
  },
});

const outData = ref([{
      title: "Деньги за мясо",
      color: '#9747FF'
    },
      {
        title: "Расходы на ЗП",
        color: '#0077F7'
      },
      {
        title: "Прочее",
        color: '#13D6FF'
      }
    ]
)

const chartSeries = ref([
  {
    name: 'Закупка',
    type: 'bar',
    data: [440000, 505000, 414000, 671000, 227000, 413000, 201000, 352000, 552000, 320000, 257000, 560000],
    color: '#9747FF'
  },
  {
    name: 'ЗП',
    type: 'bar',
    data: [446000, 506000, 416000, 673000, 223000, 431000, 280000, 315000, 765000, 392000, 245000, 146000],
    color: '#0077F7'
  },
  {
    name: 'Прочее',
    type: 'bar',
    data: [14000, 53000, 61000, 87000, 32000, 55000, 32000, 45000, 65000, 33000, 70000, 120000],
    color: '#13D6FF'
  },
  {
    name: 'Параметр',
    type: 'line',
    data: [460000, 585000, 494000, 371000, 337000, 443000, 444000, 344000, 444000, 230000, 557000, 436000],
  },
]);

const series = ref(
    [{
      name: "План",
      data: Array.from({length: 30}, () => Math.floor(Math.random() * (140 - 20 + 1)) + 20),
      color: '#18A0FB',
      width: 2,
    },
      {
        name: "Факт",
        data: Array.from({length: 30}, () => Math.floor(Math.random() * (140 - 20 + 1)) + 20),
        color: '#13D6FF',
        width: 2,
      }
    ]
)

const chartOptions = ref({
  chart: {
    height: 350,
    type: 'area',

    zoom: {
      enabled: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'straight',
    width: 2,
  },
  markers: {
    size: 5,
    show: true
  },//
  grid: {
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.3,
    },
  },
  yaxis: {
    title: {
      text: 'тыс.руб.',
    },
    min: 0,
  },
  xaxis: {
    title: {
      text: 'дни',
    },
    categories: Array.from({length: 30}, (_, index) => index + 1),
    labels: {
      show: true,
    },
  },
  legend: {
    position: 'top',
    horizontalAlign: 'left',
    offsetY: 20,
    offsetX: 40,
  },
});

const totalRevenue = ref(0);
const positionRevenues = ref([0, 0, 0, 0]);
const positions = ref(['Закупка', 'ЗП', 'Прочее', 'Параметр']);

const updateChart = () => {
  options.value.xaxis.categories = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  chartSeries.value = [
    {
      name: 'Закупка',
      type: 'bar',
      data: [440000, 505000, 414000, 671000, 227000, 413000, 201000, 352000, 552000, 320000, 257000, 560000],
      color: '#9747FF'
    },
    {
      name: 'ЗП',
      type: 'bar',
      data: [446000, 506000, 416000, 673000, 223000, 431000, 280000, 315000, 765000, 392000, 245000, 146000],
      color: '#0077F7'
    },
    {
      name: 'Прочее',
      type: 'bar',
      data: [14000, 53000, 61000, 87000, 32000, 55000, 32000, 45000, 65000, 33000, 70000, 120000],
      color: '#13D6FF'
    },
    {
      name: 'Параметр',
      type: 'line',
      data: [460000, 585000, 494000, 371000, 337000, 443000, 444000, 344000, 444000, 230000, 557000, 436000],
    },
  ];
  series.val = [{
    name: "План",
    data: Array.from({length: 30}, () => Math.floor(Math.random() * (140 - 20 + 1)) + 20)
  }];

  totalRevenue.value = chartSeries.value
      .filter((team: { name: string; }) => team.name !== 'Параметр')
      .reduce((acc: any, team: { data: any[]; }) => acc + team.data.reduce((sum, value) => sum + value, 0), 0);

  positionRevenues.value = chartSeries.value
      .filter((team: { name: string; }) => team.name !== 'Параметр')
      .map((team: { data: any[]; }) => team.data.reduce((acc, value) => acc + value, 0));

  chartKey.value += 1;
  chartKey.value += 1;
};

onMounted(() => {
  updateChart();
});
</script>


<style lang="scss">

body {
  background-color: #292829;
}

.apexcharts-legend-text,
.apexcharts-xaxis-label,
.apexcharts-yaxis-label,
.apexcharts-annotations-label,
.apexcharts-yaxis-title-text,
.apexcharts-xaxis-title-text {
  fill: #656565 !important;
}

.apexcharts-gridline,
.apexcharts-yaxisticks,
.apexcharts-xaxisticks,
.apexcharts-annotations-line,
.apexcharts-tooltip {
  stroke: #656565 !important;
}

.apexcharts-legend-text {
  color: #656565 !important;
  padding: 12px;
}

.title {
  margin-bottom: 12px;
  text-transform: uppercase;
  color: white;

}

.title-cards {
  color: #93969C;
}

.card-charts {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.box-in-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
