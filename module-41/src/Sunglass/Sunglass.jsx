
import { add, divideTheFirstNumberByTheSecondNumber as divide, multiply } from "../Calculator/Calculator";
import Watch from "../Watch/Watch";


const Sunglass = () => {
    const first=44;
    const second=23;
    const sum=add(first,second);
    console.log(sum);
    const mul=multiply(first,second);
    console.log(mul);
    const divi=divide(first,second)
    console.log(divi);
    return (
        <div>
            <Watch></Watch>
        </div>
    );
};

export default Sunglass;