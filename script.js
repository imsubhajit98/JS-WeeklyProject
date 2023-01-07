/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperswithMap() {
  //Write your code here
  arr.map(printProfession);

  function printProfession(arrItem){
    if(arrItem.profession==="developer"){
      console.log(arrItem);
    }
  }
}

function PrintDeveloperbyForEach() {
  //Write your code here
  arr.forEach(printProfessionForEach);
  function printProfessionForEach(arrItem){
    if(arrItem.profession==="developer"){
      console.log(arrItem);
    }
  }
}

function addData() {
  //Write your code here
  let newObj={id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newObj);
  console.log(arr);
}

function removeAdmin() {
  //Write your code here
  let filterArr=arr.filter(function removeVal(val){
    if(val.profession!=="admin"){
      return val;
    }
  });
  console.log(filterArr);
}

function concatenateArray() {
  //Write your code here
  let arr1=[
    {id:5,name:"subhajit",age:"24",profession:"intern"},
    {id:6,name:"pratik",age:"20",profession:"tester"},
    {id:7,name:"anisha",age:"28",profession:"admin"}
  ];
  let concatArr=arr.concat(arr1);
  console.log(concatArr);

}
