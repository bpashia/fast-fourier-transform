import {i, exp,complex,multiply, divide,add,MathType,dot,Complex, sqrt,square} from 'mathjs';
// of given index x 
// Iterative FFT function to compute the DFT 
// of given coefficient vector 
const w = (arr1: number[][],arr2:number[], n: number)=>{
    // console.log({arr1, arr2})
return arr1.map((val,index)=>arr2.map((arr2val=>exp(divide(multiply(multiply(multiply(multiply(-2,Math.PI),i),val[0]),arr2val),n)))));
}

const dotproduct = (array1:MathType[], array2:MathType[])=>{
    console.log({array2})
    if (array1.length!==array2.length){console.log({array1, array2}); 
    throw Error('Dot Product Error')}
    const result = array1.reduce((prevValue, currentValue, index)=>{
        const val = array2[index];
        const mult = multiply(val, currentValue);
        // console.log({val, mult, result: add(prevValue, mult)})
        return add(prevValue, mult)
        })

    return result
}

export const fft = (inputArray: number[]) =>
{ 
    const n=inputArray.length;
    if (n%2>0){throw Error('Error')}
    else {
        if (n<=2){
            const reformatted = [...Array(n).keys()].map((val)=>[val])
            // console.log('HERE', [...Array(n).keys()] )
            const vandermonde = w(reformatted,[...Array(n).keys()], n);
            // console.log({reformatted, vandermonde})
            const result = vandermonde.map(arr=> { return dot(arr, inputArray)})
            // console.log({result})
            
            return result;
        }
        else{
            const evenIndices = fft(inputArray.filter((val,index)=> 0===index%2));
            const oddIndices = fft(inputArray.filter((val,index)=> 0===index%2-1));
            // console.log({evenIndices, oddIndices})
            const vals = [...Array(n).keys()].map((val)=>exp(divide(multiply(multiply(multiply(-2,Math.PI),i),val),n)))
            const temp1 = vals.filter((val,index)=> index<Math.floor(n/2))
            const temp2 = vals.filter((val,index)=> index>=Math.floor(n/2))
            const complexResult = evenIndices.map((val,index)=> add(val,multiply(temp1[index],oddIndices[index]))).concat(evenIndices.map((val,index)=> add(val,multiply(temp2[index],oddIndices[index]))));
            const result = complexResult.map((val)=>{const value =sqrt(square(val.re)+square(val.im));
            if(value<.000000000001){return 0}
            return value;});
            return result;
        }
    }
}