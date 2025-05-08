function formatString(input:string ,toUpper:boolean =true):string{
  return toUpper ? input.toUpperCase():input.toLocaleLowerCase();

}
// console.log(formatString("Hello"));
// console.log(formatString("Hello", true));
// console.log(formatString("Hello", false));
