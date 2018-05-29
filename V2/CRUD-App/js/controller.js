window.addEventListener("load",init);
function init(){
    document.querySelector("#add").addEventListener("click", addItem);
    updateCounts();
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