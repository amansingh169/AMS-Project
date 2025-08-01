import {
  sprint10mData,
  sprint20mData,
  sprint40mData,
  oneMileRunData,
  SLHopData,
  SLGluteBridgesData,
  pushUpsData,
  copenhagenData,
  MBThrowsData,
  runA3Data,
  runA3x6Data,
  yoYoData,
  SBJData,
  twoKmRunData,
  SLLungeCalfRaisesData,
  CMJTestScores,
} from "./data/testStats.js";

// import {
//   Chart,
//   BarController,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   LineController,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend,
// } from "chart.js";

// Chart.register(
//   BarController,
//   BarElement,
//   CategoryScale,
//   LinearScale,
//   LineController,
//   LineElement,
//   PointElement,
//   Title,
//   Tooltip,
//   Legend
// );

const chartContainer = document.getElementById("chartsContainer");

document.getElementById("name").addEventListener("input", (e) => {
  const name = e.target.value.trim().toUpperCase();
  chartContainer.innerHTML = ""; // clear old charts

  renderSprintChart(name, sprint10mData, "10m Sprint Test");
  renderSprintChart(name, sprint20mData, "20m Sprint Test");
  renderSprintChart(name, sprint40mData, "40m Sprint Test");
  render1MileChart(name, oneMileRunData, "1 Mile Run Test");
  render2kmChart(name, twoKmRunData, "2km Run Test");
  renderSLHopChart(name, SLHopData, "Single Leg Hop Test");
  renderSLGluteBridgesChart(name, SLGluteBridgesData, "Single Leg Glute Bridges");
  renderSLLungeCalfRaisesChart(name, SLLungeCalfRaisesData, "Single Leg Lunge Calf Raises");
  renderPushUpsChart(name, pushUpsData, "Push-Ups Test");
  renderCopenhagenChart(name, copenhagenData, "Copenhagen Plank Test");
  renderMBThrowsChart(name, MBThrowsData, "MBT (Medicine Ball Throws) Test");
  renderA3Chart(name, runA3Data, "Agility Test - A3");
  renderA3x6Chart(name, runA3x6Data, "Agility Test - A3x6");
  renderYoYoChart(name, yoYoData, "Yo-Yo Test");
  renderSBJChart(name, SBJData, "SBJ (Standing Broad Jump) Test");
  renderCMJChart(name, CMJTestScores, "CMJ (Counter Movement Jump) Test");
});

function renderSprintChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const scores = filtered.map((e) => e.bestTimeSec);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Best Time (s)",
          data: scores,
          backgroundColor: "#3498db",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}s`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
            },
          },
        },

        y: {
          title: { display: true, text: "Time (s)", font: { size: 16, weight: "bold" } },
          ticks: {
            font: {
              size: 16,
            },
          },
        },
      },
    },
  });
}

function render1MileChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const score = filtered.map((e) => e.bestTimeMin);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Best Time (Min)",
          data: score,
          backgroundColor: "#3498db",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 18 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}s`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: { display: true, text: "Time (s)" },
        },
      },
    },
  });
}

function render2kmChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const times = filtered.map((e) => e.bestTimeSec);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Best Time (min)",
          data: times,
          backgroundColor: "#9b59b6",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} min`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: false,
          title: {
            display: true,
            text: "Time (minutes)",
            font: { size: 14 },
          },
        },
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
      },
    },
  });
}

function renderSLHopChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const hopLeft = filtered.map((e) => e.hopLeftM);
  const hopRight = filtered.map((e) => e.hopRightM);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Left Hop (m)",
          data: hopLeft,
          backgroundColor: "#f39c12",
          borderRadius: 5,
        },
        {
          label: "Right Hop (m)",
          data: hopRight,
          backgroundColor: "#e74c3c",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} m`,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Distance (m)",
            font: { size: 16, weight: "bold" },
          },
          ticks: { font: { size: 16 } },
        },
        x: {
          ticks: { font: { size: 16 } },
        },
      },
    },
  });
}

function renderSLGluteBridgesChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const leftSec = filtered.map((e) => e.leftSec);
  const rightSec = filtered.map((e) => e.rightSec);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Left (s)",
          data: leftSec,
          backgroundColor: "#8e44ad",
          borderRadius: 5,
        },
        {
          label: "Right (s)",
          data: rightSec,
          backgroundColor: "#2ecc71",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} s`,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Time (s)",
            font: { size: 16, weight: "bold" },
          },
          ticks: { font: { size: 16 } },
        },
        x: {
          ticks: { font: { size: 16 } },
        },
      },
    },
  });
}

function renderSLLungeCalfRaisesChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const right = filtered.map((e) => e.rightNos);
  const left = filtered.map((e) => e.leftNos);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Right Leg",
          data: right,
          backgroundColor: "#3498db",
        },
        {
          label: "Left Leg",
          data: left,
          backgroundColor: "#e67e22",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} reps`,
          },
        },
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Reps Count",
          },
        },
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
      },
    },
  });
}

function renderPushUpsChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const scores = filtered.map((e) => e.count);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Repetitions",
          data: scores,
          backgroundColor: "#27ae60",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}`,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Push-Ups",
            font: { size: 16, weight: "bold" },
          },
          ticks: { font: { size: 16 } },
        },
        x: {
          ticks: { font: { size: 16 } },
        },
      },
    },
  });
}

function renderCopenhagenChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const left = filtered.map((e) => e.leftSec);
  const right = filtered.map((e) => e.rightSec);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Left Sec",
          data: left,
          backgroundColor: "#e74c3c", // red-ish
          borderRadius: 5,
        },
        {
          label: "Right Sec",
          data: right,
          backgroundColor: "#2ecc71", // green-ish
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}s`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Time (s)",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          ticks: {
            font: {
              size: 16,
            },
          },
        },
      },
    },
  });
}

function renderMBThrowsChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const left = filtered.map((e) => e.throwsLeftM);
  const right = filtered.map((e) => e.throwsRightM);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Left Throw (m)",
          data: left,
          backgroundColor: "#f39c12", // orange
          borderRadius: 5,
        },
        {
          label: "Right Throw (m)",
          data: right,
          backgroundColor: "#2980b9", // blue
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}m`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: {
              size: 16,
            },
          },
        },
        y: {
          title: {
            display: true,
            text: "Distance (m)",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          ticks: {
            font: {
              size: 16,
            },
          },
        },
      },
    },
  });
}

function renderA3Chart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const trial1 = filtered.map((e) => e.trial1);
  const trial2 = filtered.map((e) => e.trial2 ?? 0); // fallback to 0 if null

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Trial 1 (s)",
          data: trial1,
          backgroundColor: "#8e44ad", // purple
          borderRadius: 5,
        },
        {
          label: "Trial 2 (s)",
          data: trial2,
          backgroundColor: "#16a085", // teal
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 24 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}s`,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            font: { size: 16 },
          },
        },
        y: {
          title: {
            display: true,
            text: "Time (s)",
            font: {
              size: 16,
              weight: "bold",
            },
          },
          ticks: {
            font: { size: 16 },
          },
        },
      },
    },
  });
}

function renderA3x6Chart(playerName, data, title) {
  const playerData = data.find((entry) => entry.player === playerName);
  if (!playerData) return;

  const labels = ["Trial 1", "Trial 2", "Trial 3", "Trial 4", "Trial 5", "Trial 6"];
  const times = [
    playerData.trial1,
    playerData.trial2,
    playerData.trial3,
    playerData.trial4,
    playerData.trial5,
    playerData.trial6,
  ];

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Time (s)",
          data: times,
          backgroundColor: "#2ecc71",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}s`,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Seconds",
            font: { size: 14, weight: "bold" },
          },
          ticks: {
            font: { size: 14 },
          },
        },
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
      },
    },
  });
}

function renderYoYoChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const distances = filtered.map((e) => e.yoYoLevel);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Distance Covered (m)",
          data: distances,
          backgroundColor: "#f39c12",
          borderRadius: 5,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}m`,
          },
        },
      },
      scales: {
        y: {
          title: {
            display: true,
            text: "Distance (m)",
            font: { size: 14, weight: "bold" },
          },
          ticks: {
            font: { size: 14 },
          },
        },
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
      },
    },
  });
}

function renderSBJChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const jumps = filtered.map((e) => e.bestJumpM);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Best Jump (m)",
          data: jumps,
          backgroundColor: "#27ae60",
          borderRadius: 6,
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw}m`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Meters",
            font: { size: 14 },
          },
        },
        x: {
          ticks: {
            font: { size: 13 },
          },
        },
      },
    },
  });
}

function renderCMJChart(playerName, data, title) {
  const filtered = data.filter((entry) => entry.player === playerName);
  if (filtered.length === 0) return;

  const labels = filtered.map((e) => e.phase);
  const jumpHeights = filtered.map((e) => e.jumpHeight_cm);

  const canvas = document.createElement("canvas");
  chartContainer.appendChild(canvas);

  new Chart(canvas, {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: "Jump Height",
          data: jumpHeights,
          backgroundColor: "#2ecc71",
        },
      ],
    },
    options: {
      plugins: {
        title: {
          display: true,
          text: title,
          font: { size: 22 },
        },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.raw} cm`,
          },
        },
      },
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Jump Height (cm)",
          },
        },
        x: {
          ticks: {
            font: { size: 14 },
          },
        },
      },
    },
  });
}

// function renderA3x6Chart(playerName, data, title) {
//   const filtered = data.filter((entry) => entry.player === playerName);
//   if (filtered.length === 0) return;

//   const labels = ["Trial 1", "Trial 2", "Trial 3", "Trial 4", "Trial 5", "Trial 6"];
//   const datasets = filtered.map((entry, i) => ({
//     label: `${entry.phase}`,
//     data: [entry.trial1, entry.trial2, entry.trial3, entry.trial4, entry.trial5, entry.trial6],
//     backgroundColor: `hsl(${(i * 60) % 360}, 70%, 55%)`,
//     borderRadius: 4,
//   }));

//   const avgDataset = {
//     label: "Average Time",
//     data: new Array(6).fill(filtered[0].avgTimeSec),
//     type: "line",
//     borderColor: "#e74c3c", // red line
//     borderWidth: 2,
//     pointRadius: 0,
//     tension: 0.3,
//   };

//   const canvas = document.createElement("canvas");
//   chartContainer.appendChild(canvas);

//   new Chart(canvas, {
//     data: {
//       labels,
//       datasets: [...datasets, avgDataset],
//     },
//     options: {
//       responsive: true,
//       plugins: {
//         title: {
//           display: true,
//           text: title,
//           font: { size: 22 },
//         },
//         tooltip: {
//           callbacks: {
//             label: (ctx) =>
//               ctx.dataset.type === "line"
//                 ? `Average: ${ctx.raw}s`
//                 : `${ctx.dataset.label}: ${ctx.raw}s`,
//           },
//         },
//         legend: {
//           labels: {
//             font: { size: 14 },
//           },
//         },
//       },
//       scales: {
//         y: {
//           title: {
//             display: true,
//             text: "Time (s)",
//             font: {
//               size: 14,
//               weight: "bold",
//             },
//           },
//           ticks: {
//             font: { size: 14 },
//           },
//         },
//         x: {
//           ticks: {
//             font: { size: 14 },
//           },
//         },
//       },
//     },
//   });
// }
