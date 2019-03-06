const step = 0.01

// 克隆: 複製某物件
function clone (o) {
  return {...o}
}

// 我們想找函數 f 的最低點
function f (p) {
  let x = p.x, y = p.y
  return 3 * x * x + 2 * y
}

// 函數 f 對變數 k 的偏微分: df / dk
function df (f, p, k) {
  let p1 = clone(p) //把p複製一份
  p1[k] += step  // step 等於 dx
  return (f(p1) - f(p)) / step
}

// 函數 f 在點 p 上的梯度
function grad(f, p) {
  let gp = {}
  for (let k in p) {
    gp[k] = df(f, p, k)
  }
  return gp
}

console.log('df(f(x:1,y:2), x) = ', df(f, {x:2, y:3}, 'x'))

console.log('grad(f)=', grad(f, {x:2, y:3}))
