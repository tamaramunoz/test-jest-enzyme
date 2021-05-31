const bringData = () => {
    // calling API
    const url = 'http://localhost:8080/api/users';

    // instance out object
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET', url, true);
    xhttp.send();

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const data = JSON.parse(this.responseText);
            // showing data in console
            console.log(data.results);

            const response = document.getElementById('container');
            response.innerHTML = '';

            // access to an specific person information
            for (const person of data.results) {
                response.innerHTML
                    += `<div class='cards'>
            <img src=${person.picture.large} class="person-img">
            <div class='people-data'>
                <p>Nombre: ${person.name.title} ${person.name.first} ${person.name.last}</p>
                <p>Telefono: ${person.phone}</p>
                <p>Email: ${person.email}</p>
        </div>`;
            }
        }
    };
};

bringData();