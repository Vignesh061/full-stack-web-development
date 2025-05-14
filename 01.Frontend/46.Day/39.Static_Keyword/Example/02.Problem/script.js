// -------02.Problem-------

class User{
    static usercount =0;
 
constructor(username){
    this.username=username;
    User.usercount++;
} 
 static getusercount()
 {
    console.log(`There are ${this.usercount} users are in online`);
 }
sayhello()
{
    console.log(`Hello my name is ${this.username}`);
}
}
const user1=new User("Steve");
const user2=new User("Dustin");
const user3=new User("Eleven");

user1.sayhello();
user2.sayhello();
user3.sayhello();

User.getusercount()