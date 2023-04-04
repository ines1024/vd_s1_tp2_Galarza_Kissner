
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    
    marks: [
      Plot.barX(data, 
        Plot.groupY(
        { x: 'sum'},
        { y: 'nacionalidad',
          x: 'mision_hs',
          sort: {y: "x", reverse: true},
          fill: d => (d.nacionalidad == 'EE.UU.' ? 'royalblue' : '#848484' && d.nacionalidad == 'U.S.S.R/Rusia' ? 'rgb(216, 73, 73)': '#848484'),
        })
      ),
      Plot.text(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        text: 'pais',
        fontSize: 14,
        dy: -20,
      }),
      
     
     
    ],
    width: 800,
    height: 400,
    marginLeft: 160, 
    marginRight: 100,
    marginBottom: 50,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      labelOffset: 150,
      insetLeft: 5
    },
    x: {
      grid: true,
      label: 'Horas misionadas',
      labelOffset: 40,
      insetLeft: 7,
      domain: [0, 230000]
      
    },
  
    style: {
      fontFamily: 'sans-serif',
      fontSize: 14,
      background: 'black',
      color: 'white',
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