#include <bits/stdc++.h>
using namespace std;

int main(){
    int n, m;
    cin >> n >> m;

    int A[n][m] = {{0}};
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < m; j++) {
            int a;
            cin >> a;

            A[i][j] = a;
        }
    }

    int B[m] = {0};
    for (int i = 0; i < m; i++) {
        int b;
        cin >> b;
        B[i] = b;
    }

    for (int i = 0; i < n; i++) {
        int p = 0;
        for (int j = 0; j < m; j++) {
            p += A[i][j] * B[j];
        }
        cout << p << endl;
    }

    return 0;
}
