function solution(str1, str2) {
    res = '';
    arr1 = str1.split('');
    arr2 = str2.split('');
    for(let i = 0; i < arr1.length; i++) {
        res += arr1[i] + arr2[i];
    }
    return res;
}