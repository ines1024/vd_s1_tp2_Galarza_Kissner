let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    
    marks: [
      Plot.barY(data, 
        Plot.groupX(
          {y:'count'},
          {x: 'anio_mision',
           fill: 'status',
          },  
        ),
      ),
    
    ],
   
    width: 700,
    height: 700,
    marginLeft: 80, 
    marginBottom: 40,
    marginTop: 50,
    
    y: {
      label: 'Cantidad de astronautas',
      labelOffset: 40,
      ticks: 5,
      
    },
    x: {
      label: '',
      labelOffset: 35,
      tickFormat: 'd',

    },
    
    color: {
      range: [ "#7a65a7", "#b3dc83"],
      legend: true,
      fontSize: '12px', 
    },

    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      background: 'black',
      padding: '18px',
      color: "white",
      //legend: true,
    },


  })
  d3.select('#chart').append(() => chart)
})
