
d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    let chart = Plot.plot({
      x: {
        label: "Año"
      },
      y: {
        grid: true,
        label: "Cantidad de astronautas"
      },
      color: {
      
      },
      marks: [
        Plot.barY(data, {
          x: 'genero',
          y: 'mision_hs',
          fill: 'nacionalidad',
          sort: 'genero',
          
        }),
      ],
      marginLeft: 70,
      width: 300,
    })
    d3.select('#chart').append(() => chart)
    })