const itemOperations = {
    itemList:[],
    add(itemObject){
        //let itemObject = new Item(id, name, price, color, date, url ,desc);
        this.itemList.push(itemObject);
    },
    getLast(){
        return this.itemList[this.itemList.length-1];
    },
    search(itemId){
        return this.itemList.filter(currentItemObject=>currentItemObject.id==itemId)[0];
    },
    mark(itemId){
        var itemObject = this.search(itemId);
        itemObject.isMarked = !itemObject.isMarked;
    },
    countMark(){
        return this.itemList.filter(currentObject=>currentObject.isMarked).length;
    }

}