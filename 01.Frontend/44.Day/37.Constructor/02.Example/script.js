      function info(Name,Dept,Age)               
      {
        this.Name=Name;
        this.Dept=Dept;
        this.Age=Age;
        this.about=function(){
            console.log(`I am ${this.Name} my department was ${this.Dept} i am ${this.Age}  is old`)
      }
      }

      const info_1 = new info("Vignesh","CSE",20);
      console.log(info_1.Name);
      console.log(info_1.Dept);
      console.log(info_1.Age);
      info_1.about();