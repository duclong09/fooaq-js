// boolean:
/*
Bài toán
Tại một website có chức năng bình luận, chức năng này yêu cầu người dùng đã xác minh tài khoản mới có thể sử dụng.

Cho trước biến verifiedAt chứa giá trị là thời gian người dùng đã xác minh tài khoản. Nếu verifiedAt có giá trị '' thì người dùng này chưa xác minh tài khoản.

Bên phải màn hình là hàm isCommentable được sử dụng để kiểm tra xem người dùng có quyền bình luận hay không.


*/


function isComment(verifiedAt) {
    let result;
    if(verifiedAt != ''){
        result = true;
    }else{
        result = false;
    }
    return result;
}
