//if-else
// //if-else
// Cho biến number có thể là một số bất kì. Hãy kiểm tra number có phải là số chẵn hay không.

// Nếu number là số chẵn, hãy gán 'even' cho biến result
// Nếu number không phải số chẵn, hãy gán 'odd' cho biến result



let number;

let run = function(number) {
    let result;
    if(number % 2== 0 && number > 0){
        result = 'even';
    }else{
        result = 'odd';
    }
    return result;
}
