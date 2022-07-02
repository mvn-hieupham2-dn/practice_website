const array1 = [1, 2, 3, 4];
const map1 = array1.map(x => x );
document.getElementById("show_result").innerHTML = `[${map1}]`
//fiter
const filter = array1.filter( x => { return x <=2});
document.getElementById("show_result-filter").innerHTML = `[${filter}]`
// reduce
let SumAB =(array1) =>{
    let sum =0 
    const reduce = array1.reduce( (pre,cur) => pre+cur,sum);
    return reduce
}
document.getElementById("show_result-reduce").innerHTML =SumAB(array1)
//find 
const find = array1.find( x => x>1);
document.getElementById("show_result-find").innerHTML = `[${find}]`

//add a item to end of an array
// cách 1
let add = 2
// array1.push(add)
// cách 2
let arr2 = []
arr2 = [...array1,add]
document.getElementById("show_result-end").innerHTML = `Số thêm vào cuối [${add}], mảng sau khi thêm [${arr2}], mảng ban đầu [${array1}]`
// thêm vào đầu
let add2 = 3
let start = array1.unshift(add2)
document.getElementById("show_result-begin").innerHTML = `Số  thêm vào đầu [${add2}] mảng ban đầu [${array1}]`
// xóa một phần tử
// let add3= 5
let remove2 = array1.pop()
document.getElementById("show_result-rm2").innerHTML = `Số  xóa ở cuối mảng , mảng ban đầu [${array1}]`
let remove =   array1.shift()
document.getElementById("show_result-rm").innerHTML = `Số  xóa ở đầu mảng, mảng ban đầu [${array1}]`
//playground
//1
let Bai1 = (a,b) =>{
    let rule = a === b ? a*3 : a+b
    return rule
}
document.getElementById("show_result-pl-1").innerHTML = `a=5, b=5, kết quả: ${Bai1(5,5)}`
let Bai2 = (a,b) =>{
    let rule = a >= b ? (a-b)*3 : b-a
    return rule
}
document.getElementById("show_result-pl-2").innerHTML = `a=22, b=19, kết quả: ${Bai2(22,19)}`
let Bai3 =(str) =>{
    let result=[]
    for(i=0;i<10;i++){
      let ReNum = str.replace('*',i)
      if(ReNum%3===0){
        result.push(ReNum)
      }
    }
    return result
  }
document.getElementById("show_result-pl-3").innerHTML = `str='1*9' <br> kết quả: [${Bai3('1*9')}]`
let Bai4 =(str) =>{
    let result=[]
    for(i=0;i<10;i++){
      let ReNum = str.replace('*',i)
      if(ReNum%6===0){
        result.push(ReNum)
      }
    }
    return result
  }
document.getElementById("show_result-pl-4").innerHTML = `a='123456789*' <br> kết quả: [${Bai4('123456789*')}]`
