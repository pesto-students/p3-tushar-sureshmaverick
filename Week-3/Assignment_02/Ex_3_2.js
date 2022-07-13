let info={
    Name : "Suresh",
    Age : 26,
    Designation : "Software Engineer",
   
}

  let printinfo =function(town,state){
        console.log(this.Name+ " "+this.Age+ " "+this.Designation+ " "+town+" "+state+" ");

    } 

let info2={
    Name: "Sunil",
    Age: 25,
    Designation: "Software Engineer",
}
//call method
printinfo.call(info,"Sikar","Rajasthan");
printinfo.call(info2,"Jaipur","Rajasthan");

//apply method
printinfo.apply(info2,["Ajmer","Rajasthan"]);

//bind method
let printmyname=printinfo.bind(info2,"Jaipur","Rajasthan"); 
printmyname();