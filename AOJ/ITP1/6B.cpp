#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;
    bool cards[4][13] = {{false}};

    for (int i = 0; i < n; i++) {
        char s;
        int r;
        cin >> s >> r;

        if (s == 'S') {
            cards[0][r-1] = true;
        } else if (s == 'H') {
            cards[1][r-1] = true;
        } else if (s == 'C') {
            cards[2][r-1] = true;
        } else {
            cards[3][r-1] = true;
        }
    }

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 13; j++) {
            if (cards[i][j] == false) {
                if (i == 0) {
                    cout << "S" << " " <<  j + 1 << endl;
                } else if (i == 1) {
                    cout << "H" << " " << j + 1 << endl;
                } else if (i == 2) {
                    cout << "C" << " " <<  j + 1 << endl;
                } else {
                    cout << "D" << " " <<  j + 1 << endl;
                }
            }
        }
    }
    
    return 0;
}
