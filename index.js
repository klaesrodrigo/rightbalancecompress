const transform = (text) => {
  const arr = text.split("");
  let result = "";
  let count = 1;
  arr.forEach((element, index) => {
    if (index + 1 === arr.length) {
      result = checkCount(element, count, result);
      return;
    }

    if (element == arr[index + 1]) {
      count += 1;
    } else {
      result = checkCount(element, count, result);
      count = 1;
    }
  });
  console.log(result);
};

const checkCount = (element, count, result) => {
  result += `${element}`;
  if (count > 1) {
    result += `x${count}`;
  }
  return result;
};

transform("aaaaca");
transform("aaaaaabbbcaaa");
transform("mississippi");
