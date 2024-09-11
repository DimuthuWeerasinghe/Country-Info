fetch("https://restcountries.com/v3.1/all")
.then(res=>res.json())
.then(data=>{
    let tblCountries=document.getElementById("tbl");
    
    let tblBody= `<tr>
        <th>Name</th>
        <th>Flag</th>
    </tr>`
    data.forEach(element => {
        tblBody+=`<tr>
        <td>${element.name.common}</td>
        <td><img src="${element.flags.png}"></td>
    </tr>`
        console.log(element.name.common);
    });
    tblCountries.innerHTML=tblBody;
})