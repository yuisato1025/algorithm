#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    int H[4][3][10] = {{{0}}};

    for (int i = 0; i < n; i++) {
        int b, f, r, v;
        cin >> b >> f >> r >> v;

        H[b-1][f-1][r-1] += v;
    }; 

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 3; j++) {
            for (int k = 0; k < 10; k++) {
                cout << " " <<  H[i][j][k];
            }
            cout << endl;
        }
        if (i != 3) cout << "####################" << endl;
    }

    return 0;
}
