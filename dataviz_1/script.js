
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  let chart = Plot.plot({
    marks: [Plot.dot(data, { x: "edad_mision", y: "mision_hs" })],
    x: {
      grid: true,
      line: true,
      nice: true,
    },
    y: {
      nice: true,
      line: true,
      grid: true,
    },
  });
  d3.select("#chart").append(() => chart);
});



/*
grafico de torta 
por pais, cada pais cuantos de cada ocupacion




*/