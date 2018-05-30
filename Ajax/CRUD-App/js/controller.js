window.addEventListener("load",init);
function init(){
    document.querySelector("#add").addEventListener("click", addItem);
    document.querySelector("#delete").addEventListener("click",deleteItem);
    document.querySelector("#save").addEventListener("click",saveItems);
    document.querySelector("#load").addEventListener("click",loadItems);
    document.querySelector("#sort").addEventListener("click",sortItems);
    updateCounts();
}
function sortItems(){
    itemOperations.itemList.sort((firstObject,secondObject)=>firstObject.price - secondObject.price);
    printTable(itemOperations.itemList);
}
function doAjax(){
    
}
function saveItems(){
    if(window.localStorage){
        var json = JSON.stringify(itemOperations.itemList);
        console.log("JSON is ",json," Org Array is ",itemOperations.itemList);
        localStorage.items = json;
        alert("Record Saved....");
    }
    else{
        alert("Ur Browser Doesn't Support LocalStorage....");
    }

}
function loadItems(){
    if(window.localStorage){
        if(window.localStorage.items){
            var itemArr = JSON.parse(localStorage.items);
            itemOperations.itemList = itemArr;
            printTable(itemArr);
        }
    }
}
function deleteItem(){
    printTable(itemOperations.deleteMarked());
    //printTable();
    updateCounts();
}
function printRow(itemObject){
    var index = 0;
    var tbody = document.querySelector("#items");
    var tr = tbody.insertRow();
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        tr.insertCell(index).innerHTML=itemObject[key];
        index++;
    }
    var lastCell = tr.insertCell(index);
    lastCell.appendChild(createIcon(imagePaths.deleteImg,deleted,itemObject.id));
    lastCell.appendChild(createIcon(imagePaths.editImg,edit,itemObject.id));


}
function printTable(itemList){
    document.querySelector("#items").innerHTML  = "";
    itemList.forEach(printRow);
}
function addItem(){

    //var id = document.querySelector("#id").value;
    //var id = document.querySelector("#name").value;
    var itemObject = new Item();
    for(let key in itemObject){
        if(key=='isMarked'){
            continue;
        }
        itemObject[key] = document.querySelector("#"+key).value;
        //console.log("Key is "+key + " " +itemObject[key]);
        }
        itemOperations.add(itemObject);
        printRow(itemOperations.getLast());
        updateCounts();
}
function createIcon(path,fn,id){
    var img = document.createElement("img");
    img.setAttribute("src",path);
    img.addEventListener("click",fn);
    img.className = 'style';
    img.setAttribute("itemid", id);
    return img;
}
function edit(){
console.log("Edit ....");
}
function deleted(){
 var tr = this.parentNode.parentNode;   
 tr.classList.toggle("red");
 var itemId = this.getAttribute("itemid");
 itemOperations.mark(itemId);
 updateCounts();
//console.log("Delete ....");
}
function updateCounts(){
    document.querySelector("#total").innerHTML = itemOperations.itemList.length;
    document.querySelector("#mark").innerHTML = itemOperations.countMark();
    document.querySelector("#unmark").innerHTML = itemOperations.itemList.length - itemOperations.countMark();
}
