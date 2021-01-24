$(function(){
    $("#gridContainer").dxDataGrid({
        dataSource: "customers.json",
        columns: ["Name", "City", "State", "Phone"],
        showBorders: true
    });
});
