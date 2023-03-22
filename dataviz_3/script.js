
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
        Plot.lineX(data, 
          Plot.groupX(
            {y: "count"}, 
            {x: "anio_mision"}, 
            )),
        Plot.lineX(data, Plot.groupX({y: "count"}, {x: "anio_mision"})),
        Plot.ruleY([0])
        //Plot.line(data, {
          //x: 'anio_mision',
          //y: '',
          //stroke: 'genero',
          //sort: 'genero',
      ]
      })
    d3.select('#chart').append(() => chart)
    })