let docReq = new XMLHttpRequest();

docReq.open("GET", "data.json", true);

docReq.onload = function () {
  if (docReq.status == 200) {
    let tableAppendData = document.getElementsByClassName("table-data");

    let tableData = JSON.parse(docReq.responseText);

    for (let i = 0; i < tableData.length; i++) {
      let insertTable = document.createElement("tr");
      insertTable.classList = "inserted-data-table";
      insertTable.innerHTML =
        `<td>${tableData[i].Age}` +
        `<td>${tableData[i].PickupDate}` +
        `<td>${tableData[i].Origin}` +
        `<td>${tableData[i].Destination}` +
        `<td>${tableData[i].Broker}` +
        `<td>${tableData[i].CS}` +
        `<td>${tableData[i].DTP}` +
        `<td>${tableData[i].VehicleType}`;

      tableAppendData[0].append(insertTable);
    }
  } else {
    alert("document not inserted");
  }
};

docReq.send();
