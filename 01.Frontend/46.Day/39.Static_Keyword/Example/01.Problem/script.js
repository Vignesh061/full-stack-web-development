// -------- 01.Problem --------

class MathUtil{
    static PI = 3.14;

    static getDiameter(radius){
        return 2*radius;
    }
    static getCircumference(radius){
        return 2*this.PI*radius;
    }
    static getArea(radius)
    {
        return this.PI*radius*radius;
    }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(3));
console.log(MathUtil.getCircumference(2));
console.log(MathUtil.getArea(4));



