let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'mision_hs',
        fill: 'nacionalidad',
        fillOpacity: 0.6,
        title: 'nacionalidad',
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    zero: true,
    width: 800,
    height: 200,
    facet: {
      data: data,
      x: 'nacionalidad',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})
