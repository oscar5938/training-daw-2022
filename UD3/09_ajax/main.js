window.onload = function () {
    console.log('document loaded');

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText)
            let employee = JSON.parse(this.responseText).data
            let employee_innerHTML = `
            <table>
            <tr>
            <th>ID</th><th>Name</th><th>Salary</th><th>Age</th>
            </tr>
            </table>
        `;
            document.getElementsByTagName('div')[0].innerHTML = employee_innerHTML;
            let contador=0
            let tr = document.createElement('tr')
            let td = document.createElement('td')
            let tbody = document.getElementsByTagName('tbody')[0]
            document.getElementsByTagName('button')[0].onclick = function () {
                tr = document.createElement('tr')
                td = document.createElement('td')
                td.innerText = employee[contador].id
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = employee[contador].employee_name
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = employee[contador].employee_salary
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = employee[contador].employee_age
                tr.appendChild(td)

                tbody.appendChild(tr)
                contador++;
            }
        }
    };

    xhttp.open("GET", "http://dummy.restapiexample.com/api/v1/employees", true);
    xhttp.send();


}
