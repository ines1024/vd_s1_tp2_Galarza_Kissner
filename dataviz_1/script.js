
d3.csv("astronautas.csv", d3.autoType).then((data) => {

  console.log(data)

  let ocupaciones = d3.groups(data, d => d.ocupacion)
      .map(d => {
        return {
        ocupacion: d[0],
        sum: d[1].length,
        }
      })
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barX(ocupaciones,
        {y: 'ocupacion',
         x: 'sum',
         sort: {y: 'x', reverse: true},
         fill: d => d.ocupacion == "Ingeniero aeroespacial" ? "blueviolet" : "dimgrey",

        }
      ),
      Plot.text(ocupaciones,
        { y: 'ocupacion',
          x: 'sum',
          text: 'sum',
          textAnchor: 'top',
          fontWeight: 'bold' ,
          fontSize: '28px', 
          fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "blueviolet" : "dimgrey"),
          dy: -1,
          dx: 28
        }
      ),
      
    ],
    width: 800,
    height: 500,
    inset: 5,
    marginLeft: 300, 
    marginBottom: 50,
    marginRight: 150,
    marginTop: 50,
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
      fontFamily: "Segoe UI",
      fontSize: 16,
      background: "black",
      color: 'white',
      padding: '14px',
      fontWeight: 500,
    },
    
  })
    d3.select("#chart").append(() => chart);
});

