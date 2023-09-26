function getfact()
{
    document.getElementById("btn1").addEventListener("click",async()=>
    {
        let fac = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population");
        let resfac = await fac.json();
        console.log(resfac.data)
        for(i in resfac.data)
        {
            console.log(resfac.data[i]["ID Nation"]);
        let output = '<div>'+resfac.fact+' </div>' ;
        document.getElementById("facts").innerHTML = output;
        }
    })
}