var util = require("util");

var printf = function() {
 // return process.stdout.write(util.format.apply(null, arguments)); 
 return console.log(util.format.apply(null, arguments)); 
}

var graph = {            // graph: 被搜尋的網路
  1: {node:[2, 5],    visited:0}, // n: neighbor (鄰居), v: visited (是否被訪問過)
  2: {node:[3, 4],    visited:0},
  3: {node:[6, 4, 6], visited:0},
  4: {node:[5, 6],    visited:0},
  5: {node:[6],       visited:0},
  6: {node:[],        visited:0}
};

function dequeue(a) { return a.shift(); } // 刪除第一個元素

function bfs(g, q) { // 廣度優先搜尋
  if (q.length == 0) return; // 如果 queue 已空，則返回。
  var node = dequeue(q);     // 否則、取出 queue 的第一個節點。
  if (g[node].visited == 0)        // 如果該節點尚未拜訪過。
    g[node].visited = 1;           //   標示為已拜訪
  else                       // 否則 (已訪問過)
    return;                  //   不繼續搜尋，直接返回。
  console.log("%d=>\n", node);      // 印出節點


  var neighbors = g[node].node; // 取出鄰居。
  for (var i in neighbors) { // 對於每個鄰居
    var n = neighbors[i];
    if (!g[n].visited)       // 假如該鄰居還沒被拜訪過      老師寫 if (!g[n].visited) 所以不會判斷，結果雖然沒錯，但queue是錯誤的 
      q.push(n);             //   就放入 queue 中
      console.log('q=' + q);
  }
  bfs(g, q);
}

var start = 1;
var queue=[start];            // BFS 用的 queue, 起始點為 1。


console.log("BFS : "); 
bfs(graph, queue); 
console.log("\n"); // 呼叫廣度優先搜尋。