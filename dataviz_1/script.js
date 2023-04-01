
d3.csv("astronautas.csv", d3.autoType).then((data) => {

  console.log(data)

  let ocupaciones = d3.groups(data, d => d.ocupacion)
      .map(d => {
        return {
        ocupacion: d[0],
        sum: d[1].length,
        }
      })
  //console.log(ocupaciones)
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barY(ocupaciones,
        {x: 'ocupacion',
         y: 'sum',
         sort: {x: 'y', reverse: true},
         fill: d => d.ocupacion == "Ingeniero aeroespacial" ? "rebeccapurple" : "lightgrey",
        }
      ),
      Plot.text(ocupaciones,
        { x: 'ocupacion',
          y: 'sum',
          text: 'sum',
          textAnchor: 'top',
          fontWeight: 'Bold' ,
          fontSize: '18px', 
          fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "rebeccapurple" : "grey"),
          dy: -9
        }
      ),
      
    ],
    width: 850,
    height: 500,
    inset: 5,
    marginLeft: 100, 
    marginBottom: 20,
    marginRight: 100,
    marginTop: 30,
    zero: true,

    y: {
      label: '',
      ticks: false,
      labelOffset: 150,
      ticks: 0,

    },
    x: {
      label: '',
      labelOffset: 50,
      ticks: 0,
      
    },

    style: {
      fontFamily: 'sans-serif',
      fontSize: 12,
      background: '#',
      color: 'black',
      padding: '18px',
    },
    
  })
    d3.select("#chart").append(() => chart);
});

