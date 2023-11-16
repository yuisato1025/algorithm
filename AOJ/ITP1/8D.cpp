#include <bits/stdc++.h>
using namespace std;

int main(){
    string s, p;
    cin >> s >> p;

    string ss = s + s;
    if (ss.find(p) != string::npos) {
        cout << "Yes" << endl;
    } else {
        cout << "No" << endl;
    }

    return 0;
}
