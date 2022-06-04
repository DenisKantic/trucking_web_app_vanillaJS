const tableData = document.getElementsByClassName('table-data');


window.addEventListener('load', (e)=>{
  fetchAPI();
})

let fetchAPI = () =>{ 
fetch("./data.json" ) 
.then(res => res.json())
.then(data => createData(data));
}


    let createData = (data) =>{
      for (let i = 0; i < data.length; i++) {
        let insertTable = document.createElement("tr");
        insertTable.classList = "inserted-data-table";
        insertTable.innerHTML =
          `<td>${data[i].Age + "m"}</td>` +
          `<td>${data[i].PickupDate}</td>` +
          `<td>${data[i].Origin}</td>` +
          `<td>${data[i].Destination}</td>` +
          `<td>${data[i].Broker}</td>` +
          `<td>${data[i].CS}</td>` +
          `<td>${data[i].DTP}</td>` +
          `<td><i class="fa-solid fa-truck"></i></td>`;
  
        tableData[0].append(insertTable);
    }
  }

