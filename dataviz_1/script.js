
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  console.log(d => d.nacioanlidad === "U.S.S.R/Rusia")

  let chart = {
    type: 'pie',
    data: d.nacioanlidad,

  }

  d3.select("#chart").append(() => chart);
});


/*
grafico de torta 
de rusia, cada pais cuantos de cada ocupacion




*/