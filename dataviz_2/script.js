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
    height: 250,
    
    marginLeft: 80, 
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
      scheme: 'piyg',
      
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      background: 'black',
      color: 'white',
      padding: '18px',
      legend: true,
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