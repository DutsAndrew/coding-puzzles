class Solution {
    public int climbStairs(int n) {
        if (n == 0) return 1;
        if (n == 1) return 1;
        if (n == 2) return 2;

        int a = 1; // climbStairs(n - 2)
        int b = 2; // climbStairs(n - 1)
        for (int i = 3; i <= n; i++) {
            int temp = b;
            b = a + b;
            a = temp;
        }

        return b;
    }
}