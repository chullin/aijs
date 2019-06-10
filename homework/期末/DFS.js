function getTemp(){
  return (Math.floor(Math.random()*100)+1)%4;
};

function matrixPrint(m) {
  for(var i=0;i<m.length;i++)
    console.log(m[i]);
}

function strset(s, i, c) {
  return s.substr(0, i) + c + s.substr(i+1);
  //          X        +'o' + '     ███'
}

function findPath(m, x, y) {  //  m,2,0
  var len = 9;
  var wit = 9; 
  console.log("=========================");
  console.log("x="+x+" y="+y);
  matrixPrint(m);
  if (x >= len || y >= wit) return false;
  if (m[x][y] == '█') return false;
  if (m[x][y] == 'x') return false;
  if (m[x][y] == ' ') m[x] = strset(m[x], y, '○'); // m[2], 0, 'o'
  if (m[x][y] == '○' && (x == len-1 || y == wit-1 || x == 0)) 
    return true;
  var temp = getTemp();
  if(y < wit-1 && m[x][y+1] == ' ') //向右
    if (findPath(m, x, y+1)) return true;
  if(x < len-1 && m[x+1][y] == ' ') //向下
    if (findPath(m, x+1, y)) return true;
  if(y > 0 && m[x][y-1] == ' ') //向左
    if (findPath(m, x, y-1)) return true;
  if(x > 0 && m[x-1][y] == ' ') //向上
    if (findPath(m, x-1, y)) return true;
  //m[x][y]='+';                                     老師寫的，字串是物件，所以直接改會被無視，所以無法追蹤到往回走的路徑
  m[x] = strset(m[x], y, 'x');
  console.log("m[%d][%d]=%s", x, y, m[x][y]);
  return false;
}
     //y:123456789      x      890123456
var m =["███ █████", // 1
        "█   █   █", // 2
        "█ ███ █ █", // 3
        "█ █   █ █", // 4
        "█ █ ███ █", // 5
        "█   █ █ █", // 6
        "█ ███ █ █", // 7
        "    █   █", // 8
        "█████████"];// 9
    
findPath(m, 7, 0);
console.log("=========================");
matrixPrint(m);



console.log("x=%d", getTemp());
