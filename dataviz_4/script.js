
d3.csv('astronautas.csv', d3.autoType).then(data => {
  let chart = Plot.plot({
    marks: [
      Plot.barX(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        z: 'nacionalidad',
        fill: 'nacionalidad'

      }),
      Plot.text(data, {
        x: 'mision_hs',
        y: 'nacionalidad',
        text: 'pais',
        fontSize: 14,
        dy: -20,
      }),
      Plot.frame(),
     
    ],
    width: 600,
    height: 340,
  
    inset: 5,
    marginLeft: 160, 
    marginBottom: 40,
    marginTop: 50,
    zero: true,

    y: {
      domain: d3.sort(data, (a, b) => d3.descending(a.pop, b.pop)).map(d => d.nacionalidad),
      label: 'País',
      labelOffset: '150'
    },
    x: {
      grid: true,
      label: 'Horas de misión',
      labelOffset: 35
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

    options: {
      plugins: { 
        title: { 
          display: true,
          text: "Horas de misión"
        }
      }
    }
  
  
  })
  d3.select('#chart').append(() => chart)
})


