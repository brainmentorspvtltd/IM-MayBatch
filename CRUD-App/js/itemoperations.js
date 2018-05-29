const itemOperations = {
    itemList:[],
    add(itemObject){
        //let itemObject = new Item(id, name, price, color, date, url ,desc);
        this.itemList.push(itemObject);
    },
    getLast(){
        return this.itemList[this.itemList.length-1];
    }
}