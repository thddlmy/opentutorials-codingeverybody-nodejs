// javascript에서의 동기 vs 비동기
// -> 비동기하기 좋은 도구가 있지만 복잡하다! (콜백함수)

var fs = require('fs')

// sync의 경우
/* console.log('A');
var result = fs.readFileSync('syntax/sample.txt', 'utf8');
console.log(result);
console.log('C');
*/

// async의 경우
console.log('A');
fs.readFile('syntax/sample.txt', 'utf8', function(err, data) {
    console.log(data);
});
// readFile은 return값 x
// readFile에서 파일을 읽어오는 도중 C를 출력 (파일을 다 읽어오면 그때 B를 출력)
console.log('C');