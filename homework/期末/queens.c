#include<stdio.h>

 // 檢查狀態是否合法
int Validate(int a[4][4], int i, int j) {   
    int x, y;
    // 左上對角是否存在皇后
    for(x = i - 1, y = j - 1; x >= 0 && y >= 0; x--, y--) {
            if(a[x][y] == 1) {
                return 0;
            }
    }
    // 有上對角是否存在皇后
    for(x = i - 1,y = j + 1; x >= 0 && y < 4; x--,y++) {
            if(a[x][y] == 1) {
                return 0;
            }
    }
    // 所在列是否存在皇后
    for(x = i - 1; x >= 0; x--) {
        if(a[x][j] == 1) {
            return 0;
        }
    }
    return 1;
}
    
	
	// function 回溯
int Resolve(int a[4][4], int i) {
    int j, k;
    // 判斷是否為目標狀態 
    if(i == 4) {
        for(j = 0; j < 4; j++) {
            for(k = 0; k < 4; k++) {
                printf("%d ", a[j][k]);
            }
            printf("\n");
        }
        return 1;
    }
    // 循環規則
    for(j = 0; j < 4; j++) {
        a[i][j] = 1;
        if(Validate(a, i, j)) {
            if(Resolve(a, i + 1)){
                a[i][j] = 0;
                printf("\n");
                continue;
            }
        }
        a[i][j] = 0;
    }
    return 0;
}
 
 
 
 
int main(int argc, char *argv[]) {

    int a[4][4];
    int i, j;
    for(i = 0; i < 4; i++) {
        for(j = 0; j < 4; j++) {
            a[i][j] = 0;
        }
    }
    Resolve(a, 0);
    return 0;
}
