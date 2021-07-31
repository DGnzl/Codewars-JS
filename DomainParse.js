function domainParse(str) {
    let parts = str.split('.')
    if (parts[0].indexOf('www') != -1) {
        return parts[1]
    }
    else if (parts[0].indexOf('//') != -1) {
        return parts[0].substring(parts[0].indexOf('/') + 2)
    }
    else {
        return parts[0]
    }
}

console.log(domainParse('www.cnet.com'))
console.log(domainParse('cnet.com'))
console.log(domainParse('https://cnet.com'))
console.log(domainParse('http://cnet.com/reviews'))

// function domainName(url){
// 	return url.replace('http://', '').replace('https://', '').replace('www.', '').split('.').shift()
// }