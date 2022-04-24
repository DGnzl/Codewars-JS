function toDayOfYear(arr) {
    var now = new Date(`${arr[1]}-${arr[0]}-${arr[2]}`);
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    var oneDay = 1000 * 60 * 60 * 24;
    var day = Math.floor(diff / oneDay);
    
    return day;
}

console.log(toDayOfYear([25, 12, 2017]))