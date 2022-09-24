console.log("This is the Exercise 5.1 of Assignment 5");
// async function will return Promise
function doTask1(){
    return new Promise (function(resolve){
        setTimeout(function(){
            resolve('Thank you for resolving')},3000);
        });


    }

    //async and await keyword will enable asynchrnous 
    async function doTask2() {
        console.log('calling');
        //this will wait untill everything else is executed.
        const result = await doTask1();
        console.log(result);
        // expected output: "Thank you for resolving"
      }
      
      doTask2();

      function* doTask3(){
        let i=0;
        
            while(true){
                yield i;
                i++;
                //yield i++; is also fine
      }
        }
        const gen=doTask3();
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);



      
    