
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
          fontSize: '26px', 
          fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "blueviolet" : "dimgrey"),
          dy: -1,
          dx: 28
        }
      ),
      
    ],
    width: 850,
    height: 400,
    marginLeft: 200, 
    marginRight: 200,
    marginBottom: 30,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      ticks: 7,

    },
    x: {
      label: '',
      labelOffset: 150,
      ticks: false,  
      marginBottom: 100,
     
    },

    style: {
      fontFamily: "Segoe UI",
      fontSize: 17,
      background: "black",
      color: 'white',
      padding: '14px',
      fontWeight: 500,
    },
    
  })
    d3.select("#chart").append(() => chart);
});

