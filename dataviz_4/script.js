d3.csv('./astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    let chart = Plot.plot({
      marks: [
        Plot.line(data, {
          x: 'Anio_mision',
          y: 'Eva_mision_hs2',
          z: 'country',
          stroke: 'Nacionalidad',
        }),
      ],
      x: {
        // https://github.com/observablehq/plot#formats
        tickFormat: 'd',
      },
    })
    d3.select('#chart').append(() => chart)
  })
  