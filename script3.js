class Person{
    constructor(name,gender,age,address,profession,aadhar)
    {
        this.name=name;   
        this.gender=gender;     
        this.age=age;
        this.address=address;
        this.profession=profession;
        this.aadhar=aadhar;
    }

    getAddress(){
        return this.address;
    }
    getProfession(){
        return this.profession;
    }
    getAadhar(){
        return this.aadhar;
    }
    setProfession(profession){
        this.profession=profession;   
        return this.getProfession();     
    }
    setAadhar(aadhar)
    {
        this.aadhar=aadhar;
        return this.getAadhar();
    }
}

const per1=new Person('Naveen','M',24,'New kamaraj Nagar, Chennai:39','IT',1234_5678_1234);
const per2=new Person('Krishna','M',32,'Shikandhar street, Chennai:19','IT',2234_5222_1234);
const per3=new Person('Shaun Murphy','M',28,'Gopichettipalayam street, Chennai:49','Doctor',4234_5678_4444);
const per4=new Person('Hermoine','F',12,'New kamaraj Nagar, Chennai:39','Acting',5234_5678_5555);
const per5=new Person('Oliver Queen','M',35,'Singapore street, Chennai:09','Acting',6234_6666_1234);
const per6=new Person('Iris West Allen','F',33,'Anna Nagar, Chennai:50','Acting',7734_7766_1234);

console.log(per1.getAadhar());
console.log(per4.getProfession());
console.log(per4.setProfession('Magician'));
console.log(per5.getAadhar());
console.log(per5.setAadhar(090900009999));
console.log(per6.getAddress());