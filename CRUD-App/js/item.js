class Item{
   constructor(id=0, name="", price,color,date, url,desc){
       this.id = id;
       this.name = name;
       this.price = price||0.0;
       this.color = color||"#ffff";
       this.date= date;
       this.url = url;
       this.desc = desc;

   } 
}