type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-text";

function combine(
  input1: Combinable,
  input2: Combinable,
  resultType: ConversionDescriptor
) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultType === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  return result;
  //   if (resultType === "as-number") {
  //     return +result;
  //   }
  //   return result.toString();
}

const combinedAges = combine("30", "26", "as-number");

const combinedNames = combine("Thiago", "Figueiredo", "as-text");

console.log(combinedAges);
console.log(combinedNames);
