

d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
        Plot.barY(data, {
          x: 'genero',
          y: 'mision_hs',
          fill: 'nacionalidad',
          sort: 'genero',
          
        }),
      ],

      width: 400,
      height: 400,
      inset: 5,
      marginLeft: 160, 
      marginBottom: 75,
      marginTop: 30,
      zero: true,

      y: {
        grid: true,
        label: 'Horas de misión',
        labelOffset: '100'
        
      },
      x: {
        
        label: 'Género',
        labelOffset: 40
        
      },
      color: {
        scheme: 'tableau10',
    
      },
      style: {
        fontFamily: 'sans-serif',
        fontSize: 12,
        background: '#',
        color: 'black',
        padding: '16px',
      },
    })
    d3.select('#chart').append(() => chart)
  })
  