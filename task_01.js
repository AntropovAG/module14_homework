const parser = new DOMParser();

const xmlString = `
    <list>
        <student>
            <name lang="en">
                <first>Ivan</first>
                <second>Ivanov</second>
            </name>
            <age>35</age>
            <prof>teacher</prof>
        </student>
        <student>
            <name lang="ru">
                <first>Петр</first>
                <second>Петров</second>
            </name>
            <age>58</age>
            <prof>driver</prof>
        </student>
    </list>
    `;

const xmlDOM = parser.parseFromString(xmlString, "text/xml");

const list = xmlDOM.querySelector("list");
const students = list.querySelectorAll("student");

const firstStudentNode = students[0].querySelector("name");
const firstStudentName = firstStudentNode.querySelector('first');
const firstStudentSurname = firstStudentNode.querySelector('second');
const firstStudentAge = students[0].querySelector('age');
const firstStudentProf = students[0].querySelector('prof');
const firstStudentLang = firstStudentNode.getAttribute('lang')

const secondStudentNode = students[1].querySelector("name");
const secondStudentName = secondStudentNode.querySelector('first');
const secondStudentSurname = secondStudentNode.querySelector('second');
const secondStudentAge = students[1].querySelector('age');
const secondStudentProf = students[1].querySelector('prof');
const secondStudentLang = secondStudentNode.getAttribute('lang')

const result = [
    {
    name: `${firstStudentName.textContent} ${firstStudentSurname.textContent}`,
    age: Number(firstStudentAge.textContent), 
    prof: `${firstStudentProf.textContent}`, 
    lang: Number(firstStudentAge)
    },
    
    {
    name: `${secondStudentName.textContent} ${secondStudentSurname.textContent}`,
    age: Number(secondStudentAge.textContent), 
    prof: `${secondStudentProf.textContent}`, 
    lang: Number(secondStudentAge)
    },
];

console.log(result);
