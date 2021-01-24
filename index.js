$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "customers.json",
        columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        showBorders: true
    });
});
