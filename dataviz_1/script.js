
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  console.log(d => d.nacioanlidad === "U.S.S.R/Rusia")
  d3.pie()
  

  d3.select("#chart").append(() => chart);
});


/*
grafico de torta 
de rusia, cada pais cuantos de cada ocupacion




*/