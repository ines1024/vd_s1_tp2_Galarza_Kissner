
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  //console.log(d => d.nacionalidad === "U.S.S.R/Rusia")
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barY(data, 
        Plot.groupX(
          { y: 'count'},
          { x: 'ocupacion',
            sort: {x: "y", reverse: true},
            fill: 'ocupacion',
        }
      ),
      ),

    ],
    width: 850,
    height: 440,
  
    inset: 5,
    marginLeft: 120, 
    marginBottom: 50,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      domain: [0,100],
      ticks: false,
      labelOffset: 150

    },
    x: {
      label: '',
      labelOffset: 40,
      
    },
    color: {
      scheme: 'tableau10',
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      background: '#',
      color: 'black',
      padding: '12px',
    },
    
  })
    d3.select("#chart").append(() => chart);
});


/*
grafico de torta 
de rusia, cada pais cuantos de cada ocupacion




*/