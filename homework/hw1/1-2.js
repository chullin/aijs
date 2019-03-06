function f (x) { return -1 * ( x*x*x*x - 10 * x*x*x + 20 * x*x + 5*x + 7 ) }
// function f(x) { return -1*Math.abs(x*x-4); }

var dx = 0.01

function hillClimbing (f, x) {
  while (true) {
    console.log('f(%s) = %s', x.toFixed(4), f(x).toFixed(4)) //.toFixed(顯示幾位)
    if (f(x + dx) >= f(x)) {
      x = x + dx
    } else if (f(x - dx) >= f(x)) {
      x = x - dx
    } else {
      break
    }
  }
  return f(x).toFixed(4) // 這邊要怎麼回傳兩個值?  x 還有 f(x)
} // return {  'myone' : one , 'b': 2};

for(var i=0; i<5; i++){
  Old = hillClimbing(f, Math.random()*20+1-10);
  if(i==0){
    Max = Old
  }
  console.log('Max =', Max);
  if(Old > Max){
    Max = Old
  }
}