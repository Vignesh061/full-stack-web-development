// setters = sepcial method that make a property writeable
// Getters = special method that make a property readable

class Rectangle{

    constructor(width, hight)
    {
        this.width=width
        this.hight=hight
    }

    set width(newWidth)
    {
        if(newWidth>0)
        {
            this._width=newWidth
        }
        else{
      
            console.log(`${newWidth} is negative , Enter a Positive width`)

        }
    }
    set hight(newHight)
    {   if(newHight>0){

        this._hight=newHight
        }
        else{
            console.log(`${newHight} is negative , Enter a Positive Hight `)
        }

    }

    get width()
    {
        return `${this._width.toFixed(1)} cm`
    }
    get hight(){
        return `${this._hight.toFixed(1)}cm`
    }
    get area()
    {
        return `${(this._width*this._hight).toFixed(1)}cm^2`;
    }

}
const rectangle=new Rectangle(6,5) 
console.log(rectangle.width)
console.log(rectangle.hight)
console.log(rectangle.area)

