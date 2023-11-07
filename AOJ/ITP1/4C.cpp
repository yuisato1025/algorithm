#include <bits/stdc++.h>
using namespace std;

int main(){

    while (true) {
        int a, b;
        char op;
        cin >> a >> op >> b;

        if (op == '?') break;

        int result;
        if (op == '+') {
            result = a + b;
        } else if (op == '-') {
            result = a - b;
        } else if (op == '*') {
            result = a * b;
        } else {
            result = a / b;
        }

        cout << result << endl;
    }



    return 0;
}
