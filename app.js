function createMulitpler(x){
  return function(y){
    return y * x;
  }
}

let doubleX = createMulitpler(3);
document.write(doubleX(4));