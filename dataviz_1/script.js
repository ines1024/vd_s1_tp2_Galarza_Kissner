
d3.csv("astronautas.csv", d3.autoType).then((data) => {
  console.log(data)
  console.log(d => d.nacioanlidad === "U.S.S.R/Rusia")
  let chart = Plot.plot({
    marks: [
      Plot.frame(),
      Plot.dot(data, { 
      x: "anio_mision", 
      y: "mision_hs",
      stroke: "genero",
      fill: "genero",
      fillOpacity: 0.5,
      r: 2, 
    })],
    width: 700,
    height: 400,
    color: {
      legend: true,
      scheme: "category10",
    },
    x: {
      label: "Año",
      grid: true,
      line: true,
      nice: true,
    },
    y: {
      label: "Horas de misión",
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