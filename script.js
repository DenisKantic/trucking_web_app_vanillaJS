let docReq = new XMLHttpRequest();

docReq.open("GET", "data.json", true);

docReq.onload = function () {
  if (docReq.status == 200) {
    let insertTable = document.getElementsByClassName("inserted-data-table");

    let tableData = JSON.parse(docReq.responseText);

    for (let i = 0; i < tableData.length; i++) {
      /*
       insertTable.innerHTML =
        `<td>${tableData[i].Age}` +
        `<td>${tableData[i].PickupDate}` +
        `<td>${tableData[i].Origin}` +
        +`<td>${tableData[i].Destination}` +
        +`<td>${tableData[i].Broker}` +
        +`<td>${tableData[i].CS}` +
        +`<td>${tableData[i].CS}`;
        */
    }
  } else {
    alert("document not inserted");
  }
};

docReq.send();
