#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;

    int min = 1000000, max = -1000000;
    long long sum = 0;
    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;

        if (a < min) {
            min = a;
        }

        if (max < a) {
            max = a;
        }

        sum += a;
    }

    cout << min << " " << max << " " << sum << endl;

    return 0;
}
