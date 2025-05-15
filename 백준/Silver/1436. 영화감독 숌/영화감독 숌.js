const N = Number(require('fs').readFileSync(0, 'utf-8').toString().trim());
let count = 1;
let current = 666;
while(count < N){
    current++;
    if(String(current).includes('666')) count++;
}
console.log(current);

/* 
t : 1

1t ~ 5t (t0 ~ t9) : 5 + 10 
7t ~ 15t (1t0 ~ 1t9) : 9 + 10
17t ~ 25t (2t0 ~ 2t9) : 9 + 10
27t ~ 35t (3t0 ~ 3t9) : 9 + 10
37t ~ 45t (4t0 ~ 4t9) : 9 + 10
47t ~ 55t (5t0 ~ 5t9) : 9 + 10
57t ~ 65t [t00 ~ t99] : 9 + 100 <- 120 + 67 = t66
67t ~ 75t (7t0 ~ 7t9) : 9 + 10
77t ~ 85t (8t0 ~ 8t9) : 9 + 10
87t ~ 95t (9t0 ~ 9t9) : 9 + 10

97t ~ 105t (10t0 ~ 10t9) : 9 + 10
107t ~ 115t (11t0 ~ 11t9) : 9 + 10
117t ~ 125t (12t0 ~ 12t9) : 9 + 10
127t ~ 135t (13t0 ~ 13t9) : 9 + 10
137t ~ 145t (14t0 ~ 14t9) : 9 + 10
147t ~ 155t (15t0 ~ 15t9) : 9 + 10
157t ~ 165t [1t01 ~ 1t99] : 9 + 100 <-
167t ~ 175t (17t0 ~ 17t9) : 9 + 10
177t ~ 185t (18t0 ~ 18t9) : 9 + 10
187t ~ 195t (19t0 ~ 19t9) : 9 + 10

197t ~ 205t (20t0 ~ 20t9) : 9 + 10 
*/

