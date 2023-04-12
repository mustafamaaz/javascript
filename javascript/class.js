class product{
    constructor(name,price,discount,itemcode){
        this.itemname = name;
        this.price = price;
        this.discount=discount;
        this.itemcode = itemcode;
    }

    // getter setter method
    set set_price(price){
       this.price = price;
    }

    get get_price(){
        return this.price;
    }

}

let pecile = new product('pencile',10,0,p23);



//  class
class product1{

    constructor(itemname){
        this.itemname = itemname;
        console.log("passed by furniture "+ this.itemname);

     }

   getitemname(){
    return this.itemname + 'is a product';}
}

// sub class
class furniture extends product1{
    constructor(itemname){
        // supper keyword jo hy wo apny parent class ky constructor ko call krta hy jesy idher ye product 1 ky cons ko call kry ga
        super(itemname); }

    getitemname(){
        return this.itemname + 'is a furniture';}

}
let pecil = new product1('pencile');
// let chair = new furniture('cahir');
console.log(pecil.getitemname());