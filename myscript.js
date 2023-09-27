fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => console.log(json));




function users(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((json) =>{

        table = document.getElementsByTagName('table')[0]

        for(i=0; i<json.length; i++){
            tr = document.createElement('tr')
            id = document.createElement('td')
            name1 = document.createElement('td')
            phone = document.createElement('td')
            email = document.createElement('td')

            id.innerText = json[i].id
            name1.innerText = json[i].name
            phone.innerText = json[i].phone
            email.innerText = json[i].email

            tr.append(id,name1,phone,email)
            table.append(tr)

        }

} )
}

users()