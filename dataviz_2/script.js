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
    height: 300,
    inset: 5,
    
    marginLeft: 50, 
    marginBottom: 40,
    marginTop: 50,
    zero: true,

    y: {
      label: 'Horas de misión',
      labelOffset: '40'
    },
    x: {
      label: 'Edad misión',
      labelOffset: 35
    },
    color: {
      scheme: 'tableau10',
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 10,
      background: '#',
      color: 'black',
      padding: '18px',
    },

    facet: {
      data: data,
      x: 'nacionalidad',
    },
    x: { ticks: 3 },
  })
  d3.select('#chart').append(() => chart)
})
