//03.Example 

function sum(...numbers)
{
    let result = 0;
    for (let number of numbers)
    {
        result+=number;
    }
    return result;
}

const total=sum(1,2);
console.log(total)


function avg_mark(...numbers)
{
    let m_result=0;
    for(let value of numbers)
    {
        m_result+=value;
    }
    return m_result / numbers.length;

}

const mark_total=avg_mark(89,98,78,78,87);
console.log(`The average mark is :${mark_total}`)
