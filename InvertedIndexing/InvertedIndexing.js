import fs from 'fs';

function run(){
    fs.readFile('./input.small', function(err, data) {
        let invertedIndexObject = {};
        if(err) throw err;
        const array = data.toString().split("\n");
        array.forEach((str)=>{
            let indexArray = str.toLowerCase().replace(/\W+/g, ' ').trim().split(' ');
            const arrSlice1 = indexArray.slice(1);
            let strCode = indexArray[0];
            arrSlice1.forEach((word)=>{
                let freq = 1;
                if (word in invertedIndexObject) {
                    for(let test in invertedIndexObject){
                        if(test === word){
                            let code = invertedIndexObject[test][test.indexOf(word)];
                            let cd = invertedIndexObject[test][invertedIndexObject[test].length-2]
                            // let ff = invertedIndexObject[test][invertedIndexObject[test].length-1]
                            if(code != undefined){
                                    if(cd==strCode && !(Number.isInteger(code))){
                                        invertedIndexObject[test][invertedIndexObject[test].length-1] += 1;
                                    }else if(cd!=strCode && !(Number.isInteger(code))){
                                        invertedIndexObject[test].push(strCode, freq);
                                    }                            
                                }
                            }
                        }
                    }
                   else {
                    invertedIndexObject[word] = [strCode, freq];
                  }
            })
        })

            var sortable = [];
                for (let data in invertedIndexObject) {
                    sortable.push([data, invertedIndexObject[data]]);
                }
            sortable.sort();
            // sortable.sort((a,b)=>{
            //     return  b[1][b.length-1] - a[1][1];
            // });

            var file = fs.createWriteStream('result.txt');
                file.on('error', function(err) { 
                    console.log(err);
                });
            sortable.forEach(function(v) { file.write(v.join(', ') + '\n'); });
            file.end();
    });
}

run();