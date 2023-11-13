#include <bits/stdc++.h>
using namespace std;

int main(){
    int n;
    cin >> n;

    int A[n];

    for (int i = 0; i < n; i++) {
        int a;
        cin >> a;
        A[i] = a;   
    }

    for (int i = n - 1; i > 0; i--) {
        cout << A[i] << " ";
    }
    cout << A[0] << endl;

    return 0;
}
