let chart
d3.csv('astronautas.csv', d3.autoType).then(data => {
  chart = Plot.plot({
    
    marks: [
      Plot.barY(data, 
        Plot.groupX(
          {y:'count'},
          {x: 'anio_mision',
           fill: 'status',
          },  
        ),
      ),
    
    ],
   
    width: 700,
    height: 800,
    marginLeft: 80, 
    marginBottom: 40,
    marginTop: 50,
    
    y: {
      label: 'Cantidad de astronautas',
      labelOffset: 40,
      ticks: 5,
      
    },
    x: {
      label: '',
      labelOffset: 35,
      tickFormat: 'd',

    },
    color: {
      range: [ "#7a65a7", "#b3dc83"],
      legend: true,
      fontSize: '12px',
      color: 'white',
  
    },
    style: {
      fontFamily: 'sans-serif',
      fontSize: 16,
      background: 'black',
      padding: '18px',
      //legend: true,
      color: "white"
    },


  })
  d3.select('#chart').append(() => chart)
})



//[#753283","#773485","#793787","#7a3989","#7c3b8a","#7e3e8c","#7f408e","#814390","#824591","#844893","#854a95","#874d96","#884f98","#8a5299","#8b549b","#8d579d","#8e599e","#905ca0","#915ea1","#9361a3","#9463a4","#9666a6","#9768a7","#996ba9","#9a6daa","#9b70ac","#9d72ad","#9f74af","#a077b0","#a279b2","#a37bb3","#a57db5","#a680b6","#a882b7","#a984b9","#ab86ba","#ac88bc","#ae8bbd","#af8dbe","#b18fc0","#b391c1","#b493c2","#b695c4","#b797c5","#b999c6","#ba9bc8","#bc9dc9","#bd9fca","#bfa1cb","#c1a3cd","#c2a5ce","#c4a7cf","#c5a9d0","#c7abd1","#c8add2","#caafd3","#cbb1d5","#cdb2d6","#ceb4d7","#cfb6d8","#d1b8d9","#d2bada","#d4bcdb","#d5bddc","#d6bfdd","#d8c1de","#d9c3df","#dac5e0","#dbc6e0","#ddc8e1","#decae2","#dfcbe3","#e0cde4","#e1cfe5","#e2d0e6","#e4d2e6","#e5d4e7","#e6d5e8","#e6d7e9","#e7d8e9","#e8daea","#e9dbeb","#eaddeb","#ebdeec","#ebe0ec","#ece1ed","#ede2ed","#ede3ee","#eee5ee","#eee6ef","#efe7ef","#efe8ef","#efe9ef","#f0eaf0","#f0ebf0","#f0ecf0","#f0edf0","#f0eeef","#f0eeef","#f0efef","#eff0ef","#eff0ee","#eff1ee","#eef1ed","#eef2ed","#edf2ec","#edf2eb","#ecf2ea","#ebf2e9","#ebf3e8","#eaf3e7","#e9f3e6","#e8f2e5","#e7f2e4","#e6f2e3","#e5f2e1","#e4f2e0","#e2f2df","#e1f1dd","#e0f1dc","#def1da","#ddf0d9","#dcf0d7","#daefd6","#d9efd4","#d7eed2","#d6eed1","#d4edcf","#d2edcd","#d1eccb","#cfebc9","#cdebc8","#cbeac6","#cae9c4","#c8e9c2","#c6e8c0","#c4e7be","#c2e6bc","#c0e5ba","#bee4b8","#bce4b6","#bae3b4","#b8e2b2","#b6e1b0","#b3e0ae","#b1dfac","#afdeaa","#addca8","#aadba6","#a8daa4","#a6d9a1","#a3d89f","#a1d69d","#9ed59b","#9bd498","#99d296","#96d194","#94cf91","#91ce8f","#8ecc8d","#8ccb8b","#89c988","#86c886","#83c684","#80c481","#7ec37f","#7bc17d","#78bf7a","#75bd78","#72bc76","#70ba74","#6db871","#6ab66f","#67b46d","#64b26b","#62b069","#5fae67","#5cad65","#59ab62","#57a960","#54a75e","#51a55d","#4fa35b","#4ca159","#4a9f57","#479d55","#459b53","#429951","#409650","#3d944e","#3b924c","#39904b","#368e49","#348c47","#328a46","#308844","#2e8643","#2c8441","#298240","#28803e","#267e3d","#247b3b","#22793a","#207739","#1e7537","#1d7336","#1b7135","#1a6f33","#186d32","#176b31","#156930","#14672e","#12652d","#11632c","#10612b","#0f5f2a","#0d5d28","#0c5a27","#0b5826","#0a5625","#095424","#085223","#065022","#054e21","#044c1f","#034a1e","#02481d","#01461c","#00441b"]
["#8e0152","#900254","#920355","#940457","#970559","#99065a","#9b075c","#9d085e","#9f0960","#a10b61","#a30c63","#a50d65","#a70e66","#a91068","#ab116a","#ad136b","#af146d","#b1166f","#b31771","#b51972","#b71b74","#b91d76","#ba1e78","#bc217a","#be237b","#bf257d","#c1277f","#c22a81","#c42c83","#c52f84","#c73186","#c83488","#c9378a","#cb3a8c","#cc3d8e","#cd408f","#ce4391","#cf4693","#d04995","#d24c97","#d34f99","#d4529b","#d5569d","#d6599e","#d75ca0","#d85fa2","#d963a4","#d966a6","#da69a8","#db6caa","#dc6fab","#dd72ad","#de75af","#df78b1","#e07bb3","#e07eb4","#e181b6","#e284b8","#e386ba","#e489bb","#e48cbd","#e58ebf","#e691c1","#e794c2","#e796c4","#e899c5","#e99bc7","#ea9dc9","#eaa0ca","#eba2cc","#eca4cd","#eca7cf","#eda9d0","#eeabd1","#eeadd3","#efafd4","#f0b1d6","#f0b4d7","#f1b6d8","#f1b8d9","#f2bada","#f2bbdc","#f3bddd","#f4bfde","#f4c1df","#f5c3e0","#f5c5e1","#f5c6e2","#f6c8e3","#f6cae4","#f7cbe4","#f7cde5","#f8cfe6","#f8d0e7","#f8d2e8","#f9d3e8","#f9d5e9","#f9d6ea","#f9d8ea","#fad9eb","#fadaec","#fadcec","#fadded","#fadeed","#fadfee","#fae1ee","#fae2ef","#fae3ef","#fae4f0","#fae5f0","#fae6f1","#fae7f1","#fae8f1","#fae9f1","#faeaf2","#f9ebf2","#f9ecf2","#f9ecf2","#f9edf2","#f8eef2","#f8eff2","#f8eff2","#f7f0f1","#f7f1f1","#f7f1f1","#f6f2f0","#f6f2f0","#f5f3ef","#f5f3ef","#f4f3ee","#f4f4ed","#f3f4ed","#f3f4ec","#f2f5eb","#f2f5ea","#f1f5e9","#f1f5e7","#f0f5e6","#eff5e5","#eff5e4","#eef5e2","#edf5e1","#ecf5df","#ebf5de","#ebf5dc","#eaf5da","#e9f4d8","#e8f4d6","#e7f4d5","#e6f3d3","#e5f3d1","#e4f3ce","#e2f2cc","#e1f2ca","#e0f2c8","#dff1c6","#ddf1c3","#dcf0c1","#daefbe","#d9efbc","#d7eeb9","#d6eeb7","#d4edb4","#d3ecb2","#d1ecaf","#cfebac","#ceeaaa","#cce9a7","#cae8a4","#c8e8a1","#c7e79f","#c5e69c","#c3e599","#c1e496","#bfe393","#bde291","#bbe18e","#b9e08b","#b7df88","#b5de85","#b3dc83","#b1db80","#afda7d","#add97a","#abd878","#a9d675","#a7d572","#a5d46f","#a2d26d","#a0d16a","#9ed068","#9cce65","#9acd62","#98cc60","#96ca5d","#93c95b","#91c759","#8fc656","#8dc454","#8bc352","#89c150","#87c04d","#84be4b","#82bd49","#80bb47","#7eba45","#7cb843","#7ab641","#78b540","#76b33e","#74b23c","#72b03b","#70af39","#6ead38","#6cab36","#6aaa35","#68a833","#66a632","#64a531","#62a32f","#60a12e","#5ea02d","#5c9e2c","#5b9c2b","#599b2a","#579929","#559728","#539627","#529426","#509225","#4e9025","#4c8f24","#4b8d23","#498b22","#478a22","#468821","#448621","#438420","#418220","#3f811f","#3e7f1f","#3c7d1e","#3b7b1e","#397a1d","#38781d","#36761c","#34741c","#33721c","#31711b","#306f1b","#2e6d1b","#2d6b1a","#2b691a","#2a681a","#286619","#276419"]

["#2d004b","#2f024d","#300350","#320552","#330655","#350857","#360959","#380b5c","#390c5e","#3b0e60","#3c1063","#3e1165","#3f1367","#41156a","#43166c","#44186e","#461a70","#471c72","#491e75","#4a2077","#4c2279","#4e247b","#4f267d","#51287f","#522a81","#542c83","#562e85","#573187","#593388","#5b358a","#5c388c","#5e3a8e","#603d8f","#613f91","#634293","#654594","#664796","#684a98","#6a4d99","#6c4f9b","#6d529c","#6f559e","#71589f","#735aa1","#745da2","#7660a4","#7862a5","#7a65a7","#7c68a8","#7d6aa9","#7f6dab","#8170ac","#8372ae","#8575af","#8777b1","#887ab2","#8a7cb4","#8c7fb5","#8e81b7","#9083b8","#9286b9","#9488bb","#968abc","#978dbe","#998fbf","#9b91c1","#9d93c2","#9f96c3","#a198c5","#a39ac6","#a49cc7","#a69ec9","#a8a0ca","#aaa2cb","#aca4cd","#ada6ce","#afa8cf","#b1abd0","#b3add2","#b4afd3","#b6b0d4","#b8b2d5","#b9b4d6","#bbb6d7","#bcb8d9","#bebada","#c0bcdb","#c1bedc","#c3c0dd","#c4c1de","#c6c3df","#c7c5e0","#c9c7e1","#cac9e1","#cccae2","#cdcce3","#cfcee4","#d0cfe5","#d1d1e6","#d3d2e7","#d4d4e7","#d5d5e8","#d7d7e9","#d8d8ea","#dadaea","#dbdbeb","#dcddec","#dddeec","#dfdfed","#e0e1ed","#e1e2ee","#e2e3ee","#e4e4ee","#e5e5ef","#e6e6ef","#e7e7ef","#e8e8ef","#e9e9ef","#eaeaef","#ebebef","#ecebef","#edecef","#eeedee","#efedee","#f0eded","#f1eeec","#f2eeec","#f3eeeb","#f3eeea","#f4eee8","#f5eee7","#f5eee6","#f6eee4","#f7eee3","#f7eee1","#f8eddf","#f8eddd","#f9ecdb","#f9ecd9","#f9ebd7","#faead5","#fae9d3","#fae9d0","#fbe8ce","#fbe7cc","#fbe6c9","#fbe5c6","#fce4c4","#fce3c1","#fce2be","#fce1bc","#fce0b9","#fddeb6","#fdddb3","#fddcb0","#fddbad","#fdd9aa","#fdd8a7","#fdd7a4","#fdd5a1","#fdd49e","#fdd29b","#fdd198","#fdd095","#fdce92","#fdcd8f","#fdcb8b","#fdc988","#fcc885","#fcc682","#fcc57f","#fcc37c","#fbc178","#fbbf75","#fbbe72","#fabc6f","#faba6c","#f9b868","#f9b765","#f8b562","#f7b35f","#f7b15c","#f6af59","#f5ad55","#f4ab52","#f4a94f","#f3a74c","#f2a549","#f1a346","#f0a143","#ef9f40","#ee9d3e","#ed9b3b","#ec9938","#ea9735","#e99533","#e89430","#e7922e","#e6902b","#e48e29","#e38c27","#e28a25","#e08823","#df8621","#dd841f","#dc821d","#da801b","#d97e1a","#d77d18","#d67b17","#d47916","#d37714","#d17613","#cf7412","#ce7211","#cc7010","#ca6f0f","#c96d0e","#c76b0e","#c56a0d","#c3680c","#c2670c","#c0650b","#be640b","#bc620a","#ba610a","#b85f0a","#b75e09","#b55c09","#b35b09","#b15909","#af5808","#ad5708","#ab5508","#a95408","#a75308","#a55208","#a35008","#a14f07","#9f4e07","#9d4c07","#9b4b07","#994a07","#974907","#954807","#934707","#914507","#8f4407","#8d4308","#8b4208","#894108","#874008","#853e08","#833d08","#813c08","#7f3b08"]