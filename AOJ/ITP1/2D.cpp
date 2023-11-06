#include <bits/stdc++.h>
using namespace std;

int main(){
    int W, H, x, y, r;
    cin >> W >> H >> x >> y >> r;

    int h1, h2, w1, w2;
    h1 = y - r;
    h2 = y + r;
    w1 = x - r;
    w2 = x + r;

    if (h1 >= 0 && h2 <= H && w1 >= 0 && w2 <= W) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }

    return 0;
}
