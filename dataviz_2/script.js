let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    
    marks: [
      Plot.barX(data, 
        Plot.groupY(
          {x:'count'},
          {y: 'nacionalidad',
           fill: 'status',
           filter: (d => d.nacionalidad === 'EE.UU.' || d.nacionalidad === 'U.S.S.R/Rusia'),
          },  
        ),
      ),
    ],
   
    width: 1000,
    height: 300,
    inset: 5,
    marginLeft: 40, 
    marginBottom: 40,
    marginTop: 50,
    
    y: {
      label: '',
      labelOffset: '40',
      
    },
    x: {
      label: '',
      labelOffset: 35,
      ticks: 0,

    },
    color: {
      scheme: 'tableau10',
      legend: true,
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 11,
      background: '#',
      color: 'black',
      padding: '18px',
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