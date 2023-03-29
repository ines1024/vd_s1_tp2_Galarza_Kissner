
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    
    marks: [
      Plot.barX(data, 
        Plot.groupY(
        { x: 'sum'},
        { y: 'nacionalidad',
          x: 'mision_hs',
          fill: 'nacionalidad',
          sort: {y: "x", reverse: true}
        })
      ),
      Plot.text(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        text: 'pais',
        fontSize: 14,
        dy: -20,
      }),
      Plot.frame(),
     
    ],
    width: 700,
    height: 370,
  
    inset: 5,
    marginLeft: 160, 
    marginBottom: 50,
    marginTop: 10,
    zero: true,

    y: {
      //domain: d3.sort(data, (a,b) => d3.descending(a.pop, b.pop)).map(d => d.nacionalidad),
      label: '',
      labelOffset: 150
    },
    x: {
      grid: true,
      label: 'Horas de misión',
      labelOffset: 40,
      domain: [0, 230000]
      
    },
    color: {
      scheme: 'tableau10',
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 12,
      background: '#',
      color: 'black',
      padding: '11px',
    },
    
  
  })
  d3.select('#chart').append(() => chart)
})


/*
cambiar 
 - colores
 - font
 - titulo
 - resaltar rusia y eeuu, resto paleta distinta
 - poner centrado horas de mision
*/