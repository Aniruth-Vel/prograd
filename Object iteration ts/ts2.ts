/*let a:any[]=[
    {
        id:1,
        name:"xyz",
        role:"developer"
    },
    {
        id:2,
        name:"abc",
        role:"UX engineer"
    },
    {
        id:3,
        name:"efg",
        role:"support"
    }

]

for(let i in a)
{
    console.log(a[i].id+" "+ a[i].name+" " + a[i].role);
}
*/

let a:any[]=[
    {
        id:1,
        name:"xyz",
        role:"developer"
    },
    {
        id:2,
        name:"abc",
        occupation:"UX engineer"
    },
    {
        id:3,
        name:"efg",
        role:"support"
    }

]

console.log("\n")

for(let i in a)
{
    if(a[i].role)
    {
        console.log("this is admin")
        console.log(a[i].id+" "+ a[i].name+" " + a[i].role+"\n");
    }

    else
    {
        console.log("this is user")
        console.log(a[i].id+" "+ a[i].name+" " + a[i].occupation+"\n");
    }
}

