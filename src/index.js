        import data from './data.json';
        import { sort } from 'semver';

        const dataArray = Object.keys(data).map(el => data[el]);



        function sortData(){
            dataArray.sort(sort);
            function sort(a, b) {        
                if (a.name > b.name) {
                    return 1;        }
                if (a.name < b.name) {
                    return -1;            
                return 0;   
                
            }};
        };    
        


        function drawTable({name, position, office, age, start, salary} ) {
        return `<tr>
                <td>${name}</td>
                <td>${position}</td>
                <td>${office}</td>
                <td>${age}</td>
                <td>${start}</td>
                <td>$${salary}</td>
                </tr>    
            `;
            
        };

        
        let table = '';
        
            
        dataArray.map(man => {
            table += drawTable(man);
            
            });
            
            
            const element = document.querySelector('.table tbody');
        element.insertAdjacentHTML('beforeend', table);



        ///////////////////////////////////
        function nameSort(){ 

                let tableRes = document.querySelectorAll('tr');
                
                    for(let i = 1; i < tableRes.length; i++) {
                
                        tableRes[i].remove();
                
                    };        
                
                function sort(a, b) {        
                    if (a.name > b.name) { 
                        return -1; } 
                    if (a.name < b.name) { 
                        return 1;  }               
                        else
                    return 0;                
            };
            
            dataArray.sort(sort);
            
            let table = '';   
            
            dataArray.map(man => {
                table += drawTable(man);
                
            });       
            
            const element = document.querySelector('.table tbody');
            element.insertAdjacentHTML('beforeend', table);    
                    
        };

        document.querySelector('.name').addEventListener('click', nameSort);


        function positionSort(){ 

            let tableRes = document.querySelectorAll('tr');
            
                for(let i = 1; i < tableRes.length; i++) {
            
                    tableRes[i].remove();
            
                };        
            
            function sort(a, b) {        
                if (a.position > b.position) { 
                    return -1; } 
                if (a.position < b.position) { 
                    return 1;  }               
                    else
                return 0;                
        };
        
        dataArray.sort(sort);
        
        let table = '';   
        
        dataArray.map(man => {
            table += drawTable(man);
            
        });       
        
        const element = document.querySelector('.table tbody');
        element.insertAdjacentHTML('beforeend', table);    
                
    };

    document.querySelector('.position').addEventListener('click', positionSort);


        const tool = document.querySelector('.name');

        tool.addEventListener('click', () => {
        tool.classList.toggle('tool');
        });

        const position = document.querySelector('.position');

        position.addEventListener('click', () => {
            position.classList.toggle('tool');
        });

        const office = document.querySelector('.office');

        office.addEventListener('click', () => {
            office.classList.toggle('tool');
        });

        const age = document.querySelector('.age');

        age.addEventListener('click', () => {
            age.classList.toggle('tool');
        });

        const startDate = document.querySelector('.start-date');

        startDate.addEventListener('click', () => {
            startDate.classList.toggle('tool');
        });

        const salary = document.querySelector('.salary');

        salary.addEventListener('click', () => {
            salary.classList.toggle('tool');
        });
