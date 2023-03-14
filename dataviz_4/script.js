
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        z: 'nacionalidad',
        fill: 'nacionalidad'

      }),
    ],
    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.pop, b.pop)).map(d => d.nacionalidad),
    },
    x: {
      grid: true,
    },
    height: 300,
    marginLeft: 100,
  })
  d3.select('#chart').append(() => chart)
})
