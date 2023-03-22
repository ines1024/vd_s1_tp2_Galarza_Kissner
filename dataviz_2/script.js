let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({

    marks: [
      Plot.dot(data, {
        x: 'edad_mision',
        y: 'mision_hs',
        fill: 'nacionalidad',
        fillOpacity: 0.6,
      
      }),
      Plot.frame(),
    ],
    grid: true,
    nice: true,
    
    width: 900,
    height: 300,
    inset: 5,
    
    marginLeft: 40, 
    marginBottom: 40,
    marginTop: 50,
    
    y: {
      label: 'Horas de misión',
      labelOffset: '40',
      tickFormat: "d",
    },
    x: {
      label: 'Edad misión',
      labelOffset: 35,
      ticks: 3,
      domain: [30,60]
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
  
  })
  d3.select('#chart').append(() => chart)
})

/*
cambiar:

- fonts
- sacar titulo nacionalidad
- input emiratos y ussr

*/