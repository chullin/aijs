# BFS(Breadth-first Search)廣度優先搜尋

## 是一種是圖形搜尋演算法
從圖的某一點開始走訪，接著走訪此一節點的所有未拜訪過的節點，然後由已走訪過的節點，由走訪過的節點進行先廣後深的搜，直到找到目的節點或走遍全部節點。
廣度優先搜尋，屬於盲目搜尋是利用佇列(Queue)來處理，通常以迴圈的方式來展現。

演算法：
```
  函數 BFS(頂點){
    創建一個佇列 Q
    將資料放入佇列 Q 尾端
    標記走過的節點為已走訪(visited)
    如果佇列 Q 不是空的{
        取出佇列 Q 前端的資料 
        for 每個相鄰的節點{
            如果此節點未走訪過{
                將此節點放入佇列 Q
            }
        }
    }
    BFS()
  }
```

<img src="picture\BFS.gif" width="400px" />

以上為廣度優先搜尋的概念。

### 程式解說：
* BFS.js這個檔案用來實作這個概念，先做一個互相連結的圖(graph)，定義一個起始點，接著查看該起始點有沒有相鄰節點，如果有就把節點放入陣列 queue，接著這些節點就再次做 BFS 繼續搜尋，如果陣列 queue 是空的就跳出，如果節點都拜訪完就跳出。

程式參考老師版本：https://misavo.com/view/ai/search_jscode.md

在老師的範例裡，老師的字典裡變數名稱為 v，但老師寫   if (!g[n].visited)，所以在塞佇列的時候有點出現問題，但以結果來說並沒有錯誤。

執行結果：
```
PS D:\使用者\褚蘦\Desktop\aijs\homework\期末> node BFS.js
BFS :
1=>

q=2
q=2,5
2=>

q=5,3
q=5,3,4
5=>

q=3,4,6
3=>

q=4,6,6
q=4,6,6,4
q=4,6,6,4,6
4=>

q=6,6,4,6
q=6,6,4,6,6
6=>
```
