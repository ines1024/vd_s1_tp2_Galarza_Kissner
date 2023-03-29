
d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
        Plot.line (data,
          Plot.binX(
            { y: "count" }, 
            { x: "anio_mision", 
              //y: "femenino", 
              filter: (d) => d.genero == 'femenino',
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.6

            },
          )
        ), 
        Plot.dot(data, 
          Plot.binX(
            { y: "count"}, 
            { x: "anio_mision", 
              //y: "femenino", 
              fill: 'genero',
              r: 4,
              filter: (d) => d.genero == 'femenino',
            },
          )
        ),
        Plot.line(data,
          Plot.binX(
            { y: "count" }, 
            { x: "anio_mision", 
              //y: "masculino", 
              filter: (d) => d.genero == 'masculino',
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.6, 
            },
          )
        ), 
        Plot.dot(data, 
          Plot.binX(
            { y: "count",}, 
            { x: "anio_mision", 
              //y: "masculino", 
              fill: 'genero',
              r: 4,
              filter: (d) => d.genero == 'masculino',
            },
          )
        ),
      ],
      width: 900,
      height: 400,
      inset: 5,
      insetLeft: 20,
      insetRight: 20,
      marginLeft: 100, 
      marginBottom: 70,
      marginTop: 30,
      

      y: {
        grid: true,
        label: 'Cantidad de astronautas',
        labelOffset: 75,
        domain: [0, 50]
      },
      x: {
        label: '',
        labelOffset: 50,
        tickFormat: 'd',
        domain: [2010, 2019]
      },
      color: {
        scheme: 'prgn',
        range: [0.12, 0.85]
    
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
   