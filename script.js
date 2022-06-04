const tableData = document.getElementsByClassName('table-data');

window.addEventListener('load', (e)=>{
  fetchAPI();
})

let fetchAPI = () =>{
fetch("./data.json")
.then(res => res.json())
.then(data => createData(data));
}


    let createData = (data) =>{
      for (let i = 0; i < data.length; i++) {
        let insertTable = document.createElement("tr");
        insertTable.classList = "inserted-data-table";
        insertTable.innerHTML =
          `<td>${data[i].Age + "m"}` +
          `<td>${data[i].PickupDate}` +
          `<td>${data[i].Origin}` +
          `<td>${data[i].Destination}` +
          `<td>${data[i].Broker}` +
          `<td>${data[i].CS}` +
          `<td>${data[i].DTP}` +
          `<td>${data[i].VehicleType}`;
  
        tableData[0].append(insertTable);
    }
  }

