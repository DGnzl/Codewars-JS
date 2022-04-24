function countPositivesSumNegatives(input) {
    if (input == null) return [];
    count = 0;
    sum = 0;
    for (let x = 0; x < input.length; x++) {
        if (input[x] > 0) {
            count++
        }
        else {
            sum += input[x];
        }
    }
    return (count + sum) ? [count, sum] : [];
}