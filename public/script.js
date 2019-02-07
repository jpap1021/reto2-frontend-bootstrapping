fetch("https://randomuser.me/api/?results=2000").then((value) =>{   
return value.json();
}).then((value) =>{
    console.log(value)
    value.results.forEach(function(result) {
        console.log(result)
    });
});
