const jsonString = `
{
    "list": [
        {
        "name": "Petr",
        "age": "20",
        "prof": "mechanic"
        },
        {
        "name": "Vova",
        "age": "60",
        "prof": "pilot"
        }
    ]
}`;

const data = JSON.parse(jsonString);

const firstStudent = data.list[0];
const secondStudent = data.list[1];

const result = [
    {
    name: `${firstStudent.name}`,
    age: Number(firstStudent.age), 
    prof: `${firstStudent.prof}`
    },
    
    {
        name: `${secondStudent.name}`,
        age: Number(secondStudent.age), 
        prof: `${secondStudent.prof}`
    },
];

console.log(result);