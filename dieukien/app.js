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



//Một website bán rượu chỉ cho phép người dùng truy cập nếu người dùng xác nhận đã đủ 16 tuổi. Developer phụ trách phát triển website đó đang không biết code như thế nào để kiểm tra được người dùng đã đủ tuổi chưa. Hãy giúp họ!

//Cho trước biến age là số tuổi của người dùng truy cập website.


function checkCanAccessible(age) {
    var isAccessible;
    
    if(age >= 16){
        isAccessible = true;
    }else if( age < 16){
        isAccessible = false;
    }

    return isAccessible;
}




//Cho trước 2 biến:

//userCoin - Số tiền user có
//bookPrice - Giá của cuốn sách
//Hãy kiểm tra xem user có đủ tiền để mua sách không,
//nếu đủ tiền hãy gán 'Đủ tiền' cho result, trong trường hợp không 
//đủ tiền hãy gán 'Thiếu tiền' cho result.


function run(userCoin, bookPrice) {
    // Đã cho trước 2 biến userCoin, bookPrice (dòng số 3)
    // Nên các bạn không tự khai báo 2 biến này

    let result = 'Thiếu tiền'
    
    if(userCoin >= bookPrice){
        result = 'Đủ tiền';
    }else{
        result = 'Thiếu tiền';
    }

    return result
}


