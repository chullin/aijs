var util = require("util");

var printf = function() {
  return process.stdout.write(util.format.apply(null, arguments)); 
}

var g = {            // graph: 被搜尋的網路
  1: {n:[2,5],   v:0}, // n: neighbor (鄰居), v: visited (是否被訪問過)
  2: {n:[3,4],   v:0},
  3: {n:[4,5,6], v:0},
  4: {n:[5,6],   v:0},
  5: {n:[6],     v:0},
  6: {n:[],      v:0}
};

function init(g) { // 初始化、設定 visited 為 0
  for (i in g) g[i].v = 0;
}

function dfs(g, node) { // 深度優先搜尋
  if (g[node].v !=0) return;  // 如果已訪問過，就不再訪問
  printf("%d=>", node);       // 否則、印出節點
  g[node].v = 1;              //   並設定為已訪問
  var neighbors = g[node].n;  // 取出鄰居節點
  console.log('neighbors=' + neighbors);
  for (var i in neighbors) {  // 對於每個鄰居
    dfs(g, neighbors[i]);     //   逐一進行訪問
  }
}

function dequeue(a) { return a.shift(); } // 刪除第一個元素

function bfs(g, q) { // 廣度優先搜尋
  if (q.length == 0) return; // 如果 queue 已空，則返回。
  var node = dequeue(q);     // 否則、取出 queue 的第一個節點。
  if (g[node].v == 0)        // 如果該節點尚未拜訪過。
    g[node].v = 1;           //   標示為已拜訪
  else                       // 否則 (已訪問過)
    return;                  //   不繼續搜尋，直接返回。
  printf("%d=>", node);      // 印出節點
  var neighbors = g[node].n; // 取出鄰居。
  for (var i in neighbors) { // 對於每個鄰居
    var n = neighbors[i];
    if (!g[n].v)       // 假如該鄰居還沒被拜訪過      老師寫 if (!g[n].visited) 所以不會判斷，結果雖然沒錯，但queue是錯誤的 
      q.push(n);             //   就放入 queue 中
      console.log('q=' + q);
  }
  bfs(g, q);
}

var start = 1;
var q=[start];            // BFS 用的 queue, 起始點為 1。

printf("dfs:");
// init(g);   一開始 v 就都是 0，不需要初始化
dfs(g, start); 
printf("\n");     // 呼叫深度優先搜尋。

printf("bfs:"); 
init(g); 
bfs(g, q); 
printf("\n"); // 呼叫廣度優先搜尋。