
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
         fill: d => d.ocupacion == "Ingeniero aeroespacial" ? "#854a95" : "#848484",

        }
      ),
      Plot.text(ocupaciones,
        { y: 'ocupacion',
          x: 'sum',
          text: 'sum',
          textAnchor: 'top',
          fontWeight: 'bold' ,
          fontSize: '22px', 
          fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "#854a95" : "#848484"),
          dy: -1,
          dx: 28
        }
      ),
      
    ],
    width: 800,
    height: 300,
    marginLeft: 250, 
    insetLeft: 7, 
    insetRight: 8,
    marginRight: 100,
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
     
    },

    style: {
      fontFamily: "Segoe UI",
      fontSize: 14,
      background: "black",
      color: 'white',
      fontWeight: 400,
    },
    
  })
    d3.select("#chart").append(() => chart);
});

