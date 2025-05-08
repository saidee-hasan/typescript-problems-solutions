function formatString(input:string ,toUpper:boolean =true):string{
  return toUpper ? input.toUpperCase():input.toLocaleLowerCase();

}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));



function filterByRating(items:{title:string; rating:number}[]):{title:string; rating:number}[]{
  return items.filter(item => item.rating >= 4);
}

const books = [
  { title: "Book A", rating: 4.5 },
  { title: "Book B", rating: 3.2 },
  { title: "Book C", rating: 5.0 }
];

// console.log(filterByRating(books)); 


function concatenateArrays<T>(...arrays:T[][]):T[]{
  return arrays.flat();
}
// console.log(concatenateArrays(["a", "b"], ["c"]));       
// console.log(concatenateArrays([1, 2], [3, 4], [5]));     
