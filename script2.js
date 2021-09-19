
// Calculate Uber Price

class Uber{
    constructor(distance,discount,pricePerKM){
        this.distance=distance;
        this.discount=discount;
        this.pricePerKM=pricePerKM;
    }

    getTotalPrice(){
        return (this.distance*this.pricePerKM)-((this.distance*this.pricePerKM)*(this.discount/100));
    }
}

const customer1=new Uber(50,10,10);
const customer2=new Uber(100,10,10);
const customer3=new Uber(45,15,10);
const customer4=new Uber(23,13,10);
const customer5=new Uber(12,35,10);
console.log('Customer1 price',customer1.getTotalPrice());
console.log('Customer2 price',customer2.getTotalPrice());
console.log('Customer3 price',customer3.getTotalPrice());
console.log('Customer4 price',customer4.getTotalPrice());
console.log('Customer5 price',customer5.getTotalPrice());
