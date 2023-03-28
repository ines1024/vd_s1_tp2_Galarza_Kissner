
d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
        Plot.line(data,
          Plot.binX(
            { y: "sum" }, 
            { x: "anio_mision", 
              y: "mision_hs", 
              filter: (d) => d.genero == 'femenino',
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.6

            },
          )
        ), 
        Plot.dot(data, 
          Plot.binX(
            { y: "sum",
              }, 
            { x: "anio_mision", 
              y: "mision_hs", 
              fill: 'genero',
              r: 4,
              filter: (d) => d.genero == 'femenino',
            },
          )
        ),
        Plot.line(data,
          Plot.binX(
            { y: "sum" }, 
            { x: "anio_mision", 
              thresholds: d3.utcTime,
              y: "mision_hs", 
              filter: (d) => d.genero == 'masculino',
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.6, 
            },
          )
        ), 
        Plot.dot(data, 
          Plot.binX(
            { y: "sum",
              }, 
            { x: "anio_mision", 
              y: "mision_hs", 
              fill: 'genero',
              r: 4,
              filter: (d) => d.genero == 'masculino',
            },
          )
        ),
      ],
      width: 700,
      height: 400,
      inset: 5,
      marginLeft: 100, 
      marginBottom: 70,
      marginTop: 30,
      

      y: {
        grid: true,
        label: 'Horas de misión',
        labelOffset: 75,
        domain: [0, 110000]
      },
      x: {
        label: 'Año',
        labelOffset: 50,
        tickFormat: 'd',
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

    Plot.plot({
      marks: [
        Plot.rectY(
          data,
          Plot.binX(
            { y: "count" },
            {
              x: "price_in_usd",          
              fill: "blue",
              fillOpacity: 0.5,
              thresholds: 5
            }
          )
        )
      ],
      marginLeft: 100,
      width: 336,
      height: 300
    })
   