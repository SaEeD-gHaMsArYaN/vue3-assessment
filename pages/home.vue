<script setup>
import { ref, onMounted } from "vue";

const title = ref('Home Page');

const radarData = ref();
const radarOptions = ref();
const polarAreaData = ref();
const polarAreaOptions = ref();
const doughnutData = ref();
const doughnutOptions = ref();
const pieData = ref();
const pieOptions = ref();

onMounted(() => {
    radarData.value = setRadarData();
    radarOptions.value = setRadarOptions();
    polarAreaData.value = setPolarAreaData();
    polarAreaOptions.value = setPolarAreaOptions();
    doughnutData.value = setDoughnutData();
    doughnutOptions.value = setDoughnutOptions();
    pieData.value = setPieData();
    pieOptions.value = setPieOptions();
});

const setRadarData = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
        datasets: [
            {
                label: 'My First dataset',
                borderColor: documentStyle.getPropertyValue('--p-gray-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--p-gray-400'),
                pointBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--p-gray-400'),
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: 'My Second dataset',
                borderColor: documentStyle.getPropertyValue('--p-pink-400'),
                pointBackgroundColor: documentStyle.getPropertyValue('--p-pink-400'),
                pointBorderColor: documentStyle.getPropertyValue('--p-pink-400'),
                pointHoverBackgroundColor: textColor,
                pointHoverBorderColor: documentStyle.getPropertyValue('--p-pink-400'),
                data: [28, 48, 40, 19, 96, 27, 100]
            }
        ]
    };
};

const setRadarOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--p-text-muted-color');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: textColorSecondary
                }
            }
        }
    };
};

const setPolarAreaData = () => {
    const documentStyle = getComputedStyle(document.documentElement);

    return {
        datasets: [
            {
                data: [11, 16, 7, 3, 14],
                backgroundColor: [
                    documentStyle.getPropertyValue('--p-pink-500'),
                    documentStyle.getPropertyValue('--p-gray-500'),
                    documentStyle.getPropertyValue('--p-orange-500'),
                    documentStyle.getPropertyValue('--p-purple-500'),
                    documentStyle.getPropertyValue('--p-cyan-500')
                ],
                label: 'My dataset'
            }
        ],
        labels: ['Pink', 'Gray', 'Orange', 'Purple', 'Cyan']
    };
};

const setPolarAreaOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');
    const surfaceBorder = documentStyle.getPropertyValue('--p-content-border-color');

    return {
        plugins: {
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            r: {
                grid: {
                    color: surfaceBorder
                }
            }
        }
    };
};

const setDoughnutData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-500'),
                    documentStyle.getPropertyValue('--p-orange-500'),
                    documentStyle.getPropertyValue('--p-gray-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-400'),
                    documentStyle.getPropertyValue('--p-orange-400'),
                    documentStyle.getPropertyValue('--p-gray-400')
                ]
            }
        ]
    };
};

const setDoughnutOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    cutout: '60%',
                    color: textColor
                }
            }
        }
    };
};

const setPieData = () => {
    const documentStyle = getComputedStyle(document.body);

    return {
        labels: ['A', 'B', 'C'],
        datasets: [
            {
                data: [540, 325, 702],
                backgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-500'),
                    documentStyle.getPropertyValue('--p-orange-500'),
                    documentStyle.getPropertyValue('--p-gray-500')
                ],
                hoverBackgroundColor: [
                    documentStyle.getPropertyValue('--p-cyan-400'),
                    documentStyle.getPropertyValue('--p-orange-400'),
                    documentStyle.getPropertyValue('--p-gray-400')
                ]
            }
        ]
    };
};

const setPieOptions = () => {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--p-text-color');

    return {
        plugins: {
            legend: {
                labels: {
                    usePointStyle: true,
                    color: textColor
                }
            }
        }
    };
};
</script>

<template>
  <Head>
    <Title>{{ title }}</Title>
  </Head>
  <h1 class="pb-[1rem] text-[16px] md:text-[22px] lg:text-[28px] xl:text-[36px] text-center sm:text-start font-[700]">Welcome to Dashboard!</h1>
  <div class="grid grid-cols-1 sm:grid-cols-2 2xl:grid-cols-5 gap-[1rem]">

      <div class="chartCard">
        <Chart type="pie" :data="pieData" :options="pieOptions" class="w-full" />
      </div>
      <div class="chartCard">
        <Chart type="radar" :data="radarData" :options="radarOptions" class="w-full" />
      </div>
      <div class="chartCard">
        <Chart type="doughnut" :data="doughnutData" :options="doughnutOptions" class="w-full" />
      </div>
      <div class="chartCard">
        <Chart type="polarArea" :data="polarAreaData" :options="polarAreaOptions" class="w-full" />
      </div>
  </div>
</template>

<style>
  .chartCard {
    border: 1px solid var(--p-menu-border-color);
    border-radius: var(--p-menu-border-radius);
  }
  .p-chart {
    @apply flex justify-center items-center bg-white p-[.5rem] rounded-[.375rem];
  }
</style>