import data from './data.json';

const dataArray = Object.keys(data).map(el => data[el]);

/*   function sort(a, b) {
        
    if (a.name > b.name) {
        return 1;
    }
    if (a.name < b.name) {
        return -1; 
       
     return 0; 
     
}}



function clickName(){    
    const newArray = dataArray.sort(sort); 
    console.log('hi')
};

const clickEl = document.querySelector('.name');
clickEl.addEventListener('click', sort); */

dataArray.name;

function drawTable(/* {name, position, office, age, start, salary} */) {
  return `<tr>
        <td>${name}</td>
        <td>${position}</td>
        <td>${office}</td>
        <td>${age}</td>
        <td>${start}</td>
        <td>$${salary}</td>
        </tr>    
    `;
}

let table = '';

dataArray.map(man => {
  table += drawTable(man);
});

const element = document.querySelector('.table tbody');
element.insertAdjacentHTML('beforeend', table);
