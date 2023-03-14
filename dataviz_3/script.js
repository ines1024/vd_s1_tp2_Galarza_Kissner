

d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
        Plot.barY(data, {
          x: 'Genero',
          y: 'Mision_hs',
          fill: 'Nacionalidad',
          sort: 'Mision_hsc',
          
        }),
      ],
      marginLeft: 70,
      width: 300,
    })
    d3.select('#chart').append(() => chart)
  })
  