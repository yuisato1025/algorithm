#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, m, l;
    cin >> n >> m >> l;

    long long int A[n][m], B[m][l], C[n][l];
    memset(C,0,sizeof(C));

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            cin >> A[i][j];
        }
    }

    for (int i = 0; i < m; i++) {
        for (int j = 0; j < l; j++) {
            cin >> B[i][j];
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < l; j++) {
            for (int k = 0; k < m; k++) {
                C[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < l; j++) {
            if (j == l-1) {
                cout << C[i][j] << endl;
            } else {
                cout << C[i][j] << ' ';
            }
        }
    }

    return 0;
}
