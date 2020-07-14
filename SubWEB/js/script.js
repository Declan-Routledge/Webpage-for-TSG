document.getElementById('file').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    //console.log(this.result);

    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      document.write(lines[line]);
    }
  };
  reader.readAsText(file);
};

//function ticker(interval, fileName, fileName2) {
    

//var sec = [0,0];
//var min = [0,0];
//var hour = [0,0];
//var title = 1;
//var maxChange = 60 - interval;
//file1 = open 

//}