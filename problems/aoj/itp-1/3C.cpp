#include <bits/stdc++.h>
using namespace std;

int main(){
    while (true) {
        int x, y;
        cin >> x >> y;

        if (x == 0 && y == 0) break;

        if (y < x) {
            cout << y << " " << x << endl;
        } else {
            cout << x << " " << y << endl;
        }
    }

    return 0;
}
