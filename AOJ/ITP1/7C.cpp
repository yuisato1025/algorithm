#include <bits/stdc++.h>
using namespace std;

int main(){
    int r, c;
    cin >> r >> c;

    int t[r+1][c+1];

    for(int i = 0; i < r+1; i++){
		for(int j = 0; j < c+1; j++){
			t[i][j] = 0;
		}
	}

    for (int i = 0; i < r; i++) {
        for (int j = 0; j < c; j++) {
            int v;
            cin >> v;
            t[i][j] = v;

            t[r][j] += v;
            t[i][c] += v;
            t[r][c] += v;
        }
    }

    for (int i = 0; i < r+1; i++) {
        for (int j = 0; j < c; j++) {
            cout << t[i][j] << " ";
        }
        cout << t[i][c] << endl;
    }

    return 0;
}
