#include <bits/stdc++.h>
using namespace std;

int main(){
    double r;
    cin >> r;

    double area = r * r * M_PI;
    double circumference = r * 2 * M_PI;

    cout << fixed << setprecision(6);
    cout << area << " " << circumference << endl;

    return 0;
}
