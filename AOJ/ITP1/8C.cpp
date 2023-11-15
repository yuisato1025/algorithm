#include <bits/stdc++.h>
using namespace std;

int main(){
    char c;
    int counter[26] = {0};

    while (cin >> c) {
        if (isalpha(c)) {
            int num = tolower(c) - 'a';
            counter[num]++;
        }
    }

    for (int i = 0; i < 26; i++) {
        char alphabet = i + 'a';
        cout << alphabet << " : " << counter[i] << endl;
    }

    return 0;
}
