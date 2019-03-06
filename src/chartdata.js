export const chartData = {
  type: 'Bar',
  data: {
    labels: [
      "HTML",
      "CSS",
      "JS",
      "Express/Node",
      "Vue",
      "Bash",
      "Build Tools"
    ],
    datasets: [{
      label: "Skills Chart",
      backgroundColor: "rgb(92,117,234, 0.9)",
      borderColor: "rgb(92,117,234, 1)",
      borderWidth: "2",
      data: [93, 92, 90, 60, 82, 91, 45]
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      yAxes: [{
        stacked: true,
        gridLines: {
          display: true,
          color: "rgba(92,117,234, 0.2)"
        }
      }],
      xAxes: [{
        gridLines: {
          display: false
        }
      }]
    },
    events: [null]
  }
}

// export const chartOptions = {
//   options: {
//     maintainAspectRation: false,
//     scales: {
//       yAxes: [{
//         stacked: true,
//         gridLines: {
//           display: true,
//           color: "rgba(92,117,234, 0.2)"
//         }
//       }],
//       xAxes: [{
//         gridLines: {
//           display: false
//         }
//       }]
//     }
//   }
// }

export default chartData;
