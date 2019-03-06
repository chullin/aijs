// 參考： https://github.com/lagodiuk/cyk-js/blob/master/cky.js
// CYK Parsing 中文 -- https://livc.io/blog/195
// Probabilistic Context-Free Grammars (PCFGs) -- Michael Collins -- http://www.cs.columbia.edu/~mcollins/courses/nlp2011/notes/pcfgs.pdf
// N 0.6 => 喵 0.4 | 汪 0.6
// V 0.4 => 喵 0.5 | 汪 0.5
//    N   V
// N  0.3 0.7
// V  0.8 0.2
const P = {
  'N': 0.6,
  'V': 0.4,
  'N=>N': 0.3,
  'N=>V': 0.7,
  'V=>N': 0.8,
  'V=>V': 0.2,
  'N=>喵': 0.4,
  'N=>汪': 0.6,
  'V=>喵': 0.5,
  'V=>汪': 0.5,
}

function argmax(list) {
  let max = -1000000, index = null
  for (let k in list) {
    if (list[k] > max) { index=k; max=list[k] }
  }
  return {max, index}
}

function viterbi(obs, states, P) {
  const T = [{}] // Viterbi Table
  let path = {}  // path[state] = 從 0 到 t 到達 state 機率最大的 path
  for (let y of states) { // # Initialize base cases (t == 0)
    T[0][y] = P[y] * P[y+'=>'+obs[0]]
    path[y] = [y]
  }
  // console.log('T=%j path=%j', T, path)
  for (let t=1; t<obs.length; t++) { // # Run Viterbi for t > 0
    T[t] = {}
    let newpath = {}
    for (let y of states) {
      let {max:prob, index:si} = argmax(states.map((y0)=>T[t-1][y0] * P[y0+'=>'+y] * P[y+'=>'+obs[t]]))
      let state = states[si]
      // console.log('y=%s prob=%d state=%s', y, prob, state)
      T[t][y] = prob
      newpath[y] = path[state].concat(y)
    }
    // console.log('t=%d T=%j', t, T)
    path = newpath
    console.log('t=%d path=%j', t, path)
  }
  let {max:prob, index:si} = argmax(states.map((y)=>T[obs.length - 1][y]))
  console.log('T=%j', T)
  return {prob, path:path[states[si]]}
}

let {prob, path} = viterbi('喵 喵 汪'.split(' '), ['N', 'V'], P)
console.log('prob=%d path=%j', prob, path)