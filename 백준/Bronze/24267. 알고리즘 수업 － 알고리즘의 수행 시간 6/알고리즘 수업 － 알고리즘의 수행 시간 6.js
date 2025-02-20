const n = BigInt(require('fs').readFileSync(0, 'utf-8'));
console.log(((n-1n) * (n-2n) * n / 6n).toString());
console.log(3);

/*
i : 1 ~ n-2 
  j         k
2 ~ n-1 / 1 ~ n-2 까지의 합
3 ~ n-1 / 1 ~ n-3 까지의 합
4 ~ n-1 / 1 ~ n-4 까지의 합
.
n-3 ~ n-1 / n-2 ~ n, n-1 ~ n, n ~ n -> 3 + 2 + 1
n-2 ~ n-1 / n-1 ~ n, n ~ n -> 2 + 1 = 3
n-1 ~ n-1 / n ~ n -> 1



시그마(k=1 ~ n-2) {k*(k+1)/2}
= 1/2 시그마 {k**2 + k}
= 1/2 (k=n-2){k*(k+1)*(2k+1)/6 + k*(k+1)/2}
= 1/2 {(n-1)(n-2)(2n-3)/6 + (n-1)(n-2)/2}
= 1/2(n-1)(n-2){(2n-3)/6 + 1/2}
= 1/6(n-1)(n-2){n}
*/