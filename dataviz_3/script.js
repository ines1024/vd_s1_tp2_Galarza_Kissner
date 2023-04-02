
d3.csv('astronautas.csv', d3.autoType).then(data => {
    console.log(data)
    
    let chart = Plot.plot({
      marks: [
        Plot.line (data,
          Plot.binX(
            { y: "count" }, 
            { x: "anio_mision",  
              filter: (d) => d.genero == 'femenino',
              filter: (d => d.anio_mision != '2010'),
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.3,
              marker: "circle",
              r: 3,
            },
          )
        ), 
        Plot.text(data, {
          x: 2019.4,
          y: 5,
          text: ["Mujeres"],
        }),
        Plot.line(data,
          Plot.binX(
            { y: "count" }, 
            { x: "anio_mision",  
              filter: (d) => d.genero == 'masculino',
              filter: (d => d.anio_mision != '2010'),
              stroke: "genero",
              strokeWidth: 3,
              strokeOpacity: 0.3, 
              marker: "circle",
              r: 3, 
            },
          )
        ), 
        Plot.text(data, {
          x: 2019.5,
          y: 16,
          text: ["Hombres"],
        }),
      ],
      width: 900,
      height: 400,
      inset: 5,
      insetLeft: 20,
      insetRight: 20,
      marginLeft: 100, 
      marginBottom: 50,
      marginTop: 30,
      

      y: {
        grid: true,
        label: '',
        labelOffset: 75,
        domain: [0, 30]
      },
      x: {
        label: '',
        labelOffset: 50,
        tickFormat: 'd',
        domain: [2011, 2019.9]
      },
      color: {
        scheme: 'prgn',
        range: [0.12, 0.85]
    
      },
      style: {
        fontFamily: 'sans-serif',
        fontSize: 16,
        background: 'black',
        color: 'white',
        padding: '16px',
      },
    })
    d3.select('#chart').append(() => chart)
    })


    // Plot.dot(data, 
        //   Plot.binX(
        //     { y: "count",}, 
        //     { x: "anio_mision",  
        //       fill: 'genero',
        //       r: 4,
        //       filter: (d) => d.genero == 'masculino',
        //       filter: (d => d.anio_mision != '2010')
        //     },
        //   )
        // ),