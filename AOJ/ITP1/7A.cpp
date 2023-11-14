#include <bits/stdc++.h>
using namespace std;

int main(){
    while (true) {
        int m, f, r;
        cin >> m >> f >> r;

        if (m == -1 && f == -1 && r == -1) break;

        if (m == -1 || f == -1) {
            cout << "F" << endl;
            continue;
        }

        int total;
        total = m + f;
        if (total >= 80) {
            cout << "A" << endl;
            continue;
        } else if (total >= 65) {
            cout << "B" << endl;
            continue;
        } else if (total >= 50) {
            cout << "C" << endl;
            continue;
        } else if (total >= 30) {
            if (r >=50) {
                cout << "C" << endl;
            } else {
                cout << "D" << endl;
            }
            continue;
        } else {
            cout << "F" << endl;
            continue;
        }

    }

    return 0;
}
