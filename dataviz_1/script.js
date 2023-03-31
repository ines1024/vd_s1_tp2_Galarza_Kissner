
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barY(data,
        Plot.groupX(
          {y: 'sum',
           text: "first" },
          {x: 'ocupacion', 
           sort: {x: 'y', reverse: true}, 
           fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "rebeccapurple" : "lightgray"), 
           //x: "value",
           text: "ocupacion",
           textAnchor: "start",
          }
        ),
      ),
      Plot.text(data, 
        Plot.groupX(
        {y: 'sum',
         text: "first"},
        { x: 'ocupacion', 
         sort: {x: 'y', reverse: true}, 
         fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "rebeccapurple" : "lightgray"), 
         text: d => (d.anio_mision).toFixed(0), 
         dy: -7,
         textAnchor: "start",
         fontWeight: 'bold',
         fontSize: "18px",}
      ),
      ),
      
    ],
    width: 850,
    height: 500,
  
    inset: 5,
    marginLeft: 200, 
    marginBottom: 50,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      ticks: false,
      labelOffset: 150,
      ticks: 7,

    },
    x: {
      label: '',
      labelOffset: 50,
      ticks: 0,
      
    },
    color: {
      scheme: '',
  
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

