#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;

    for (int i = 3; i <= n; i++) {
        int x = i;

        if (x % 3 == 0) {
            cout << " " << i;
            continue;
        }

        while (x) {
            if (x % 10 == 3) {
                cout << " " << i;
                break;
            }

            x /= 10;
        }

    }
    cout << endl;

    return 0;
}
