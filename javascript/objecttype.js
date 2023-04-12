// simple object
const product = {
    itemname : 'flower',
    price : 50,
    discount : 20,
    itemcode: 'f40'

}

console.log(product);

// factory function

function createprodect(name,price,discount,itemcode){
    return{
        itemname:name,
        price:price,
        discount:discount,
        itemcode:itemcode
    }
}

const football = createprodect('footbal',1000,100,'b10');
console.log(football);

// constructor function

function itemproduct(name,price,discount,itemcode){
    this.itemname = name;
    this.price = price;
    this.discount=discount;
    this.itemcode = itemcode;

    this.discountvalue= function(){
        return (price-discount);
    }
}

const mobile = new itemproduct('realme',50000,2000,'m9i');
console.log(mobile);
console.log(mobile.discountvalue());
