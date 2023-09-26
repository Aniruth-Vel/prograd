var fs = require('fs');

let data =[
    {
        "id":1,
        "name":"xyz",
        "role":"developer"
    },
    {
        "id":2,
        "name":"abc",
        "occupation":"UX engineer"
    },
    {
        "id":3,
        "name":"efg",
        "role":"support"
    }
];

function main()
{

}

function write(data:any)
{
    let input=JSON.stringify(data);
    fs.writeFileSync("./config.json", input);
    console.log("file written");
}

function read()
{
    const loadedConfig = fs.readFileSync('./config.json', 'utf-8');
    const config = JSON.parse(loadedConfig);
    console.log(config);
}

function upd()
{
    const loadedConfig = fs.readFileSync('./config.json', 'utf-8');
    const config = JSON.parse(loadedConfig);
    for(let i in config)
    {
    //console.log(config[i]);
        if(config[i].id===1)
        {
            config[i].name='hij';
            console.log(config[i]);
        }
    }
}

function del()
{
    const loadedConfig = fs.readFileSync('./config.json', 'utf-8');
    const config = JSON.parse(loadedConfig);
    let b=[];
    for (let i in config)
    {
        if(config[i].id!=1)
        {
            b.push(config[i]);
        }   
    }
    console.log(b);
    let arr=JSON.stringify(b);
    fs.writeFileSync("./config.json", arr);
}