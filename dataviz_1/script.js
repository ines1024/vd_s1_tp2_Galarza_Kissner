
d3.csv("astronautas.csv", d3.autoType).then((data) => {

  console.log(data)

  let ocupaciones = d3.groups(data, d => d.ocupacion)
      .map(d => {
        return {
        ocupacion: d[0],
        sum: d[1].length,
        }
      })
  
  let chart = Plot.plot({
    
    marks: [
      Plot.barX(ocupaciones,
        {y: 'ocupacion',
         x: 'sum',
         sort: {y: 'x', reverse: true},
         fill: d => d.ocupacion == "Ingeniero aeroespacial" ? "#854a95" : "#848484",

        }
      ),
      Plot.text(ocupaciones,
        { y: 'ocupacion',
          x: 'sum',
          text: 'sum',
          textAnchor: 'top',
          fontWeight: 'bold' ,
          fontSize: '26px', 
          fill: d => (d.ocupacion == "Ingeniero aeroespacial" ? "#854a95" : "#848484"),
          dy: -1,
          dx: 28
        }
      ),
      
    ],
    width: 850,
    height: 400,
    marginLeft: 250, 
    marginRight: 200,
    marginBottom: 30,
    marginTop: 10,
    zero: true,

    y: {
      label: '',
      ticks: 7,

    },
    x: {
      label: '',
      labelOffset: 150,
      ticks: false,  
      marginBottom: 100,
     
    },

    style: {
      fontFamily: "Segoe UI",
      fontSize: 17,
      background: "black",
      color: 'white',
      padding: '14px',
      fontWeight: 500,
    },
    
  })
    d3.select("#chart").append(() => chart);
});

["#67001f","#6a011f","#6d0220","#700320","#730421","#760521","#790622","#7b0722","#7e0823","#810923","#840a24","#870b24","#8a0c25","#8c0d26","#8f0f26","#921027","#941127","#971228","#9a1429","#9c1529","#9f172a","#a1182b","#a41a2c","#a61c2d","#a81d2d","#aa1f2e","#ad212f","#af2330","#b12531","#b32732","#b52933","#b72b34","#b82e35","#ba3036","#bc3238","#be3539","#bf373a","#c13a3b","#c33c3d","#c43f3e","#c6413f","#c74441","#c94742","#ca4943","#cc4c45","#cd4f46","#ce5248","#d0544a","#d1574b","#d25a4d","#d45d4e","#d56050","#d66252","#d86554","#d96855","#da6b57","#db6d59","#dd705b","#de735d","#df755f","#e07861","#e17b63","#e27d65","#e48067","#e58369","#e6856b","#e7886d","#e88b6f","#e98d71","#ea9073","#eb9276","#ec9578","#ed977a","#ee9a7c","#ee9c7f","#ef9f81","#f0a183","#f1a486","#f2a688","#f2a88b","#f3ab8d","#f4ad90","#f4af92","#f5b295","#f5b497","#f6b69a","#f6b89c","#f7bb9f","#f7bda1","#f8bfa4","#f8c1a6","#f9c3a9","#f9c5ac","#f9c7ae","#fac9b1","#facbb3","#facdb6","#fbcfb8","#fbd1bb","#fbd3bd","#fbd4c0","#fcd6c2","#fcd8c5","#fcdac7","#fcdbca","#fcddcc","#fddfce","#fde0d1","#fde2d3","#fde4d5","#fde5d7","#fde6da","#fde8dc","#fde9de","#fdeae0","#fdece1","#fdede3","#fdeee5","#fdefe6","#fdf0e8","#fcf0e9","#fcf1eb","#fcf2ec","#fcf2ed","#fbf3ee","#fbf3ef","#faf4f0","#faf4f0","#f9f4f1","#f9f4f1","#f8f4f1","#f7f4f1","#f6f3f1","#f6f3f1","#f5f2f1","#f4f2f1","#f3f1f0","#f2f1f0","#f1f0ef","#f0efef","#efeeee","#eeeded","#edecec","#ecebeb","#eaeaea","#e9e9e9","#e8e8e8","#e7e7e7","#e5e5e5","#e4e4e4","#e3e3e3","#e2e2e2","#e0e0e0","#dfdfdf","#dddddd","#dcdcdc","#dbdbdb","#d9d9d9","#d8d8d8","#d7d7d7","#d5d5d5","#d4d4d4","#d2d2d2","#d1d1d1","#cfcfcf","#cecece","#cccccc","#cbcbcb","#c9c9c9","#c8c8c8","#c6c6c6","#c4c4c4","#c3c3c3","#c1c1c1","#bfbfbf","#bebebe","#bcbcbc","#bababa","#b9b9b9","#b7b7b7","#b5b5b5","#b3b3b3","#b2b2b2","#b0b0b0","#aeaeae","#acacac","#aaaaaa","#a8a8a8","#a6a6a6","#a4a4a4","#a3a3a3","#a1a1a1","#9f9f9f","#9d9d9d","#9b9b9b","#999999","#979797","#959595","#929292","#909090","#8e8e8e","#8c8c8c","#8a8a8a","#888888","#868686","#848484","#828282","#7f7f7f","#7d7d7d","#7b7b7b","#797979","#777777","#747474","#727272","#707070","#6e6e6e","#6c6c6c","#696969","#676767","#656565","#636363","#616161","#5e5e5e","#5c5c5c","#5a5a5a","#585858","#565656","#545454","#515151","#4f4f4f","#4d4d4d","#4b4b4b","#494949","#474747","#454545","#434343","#404040","#3e3e3e","#3c3c3c","#3a3a3a","#383838","#363636","#343434","#323232","#303030","#2e2e2e","#2c2c2c","#2a2a2a","#282828","#262626","#242424","#222222","#202020","#1e1e1e","#1c1c1c","#1a1a1a"]