
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barX(data, 
        Plot.groupY(
          { x: 'count'},
          { y: 'ocupacion',
            x: 'count',
            sort: {y: "x", reverse: true},
            fill: 'ocupacion' },
        ),
      ),
    ],
    width: 680,
    height: 440,
  
    inset: 5,
    marginLeft: 200, 
    marginBottom: 50,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      ticks: false,
      labelOffset: 150

    },
    x: {
      label: '',
      labelOffset: 40,
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
      padding: '14px',
    },
    
  })
    d3.select("#chart").append(() => chart);
});

