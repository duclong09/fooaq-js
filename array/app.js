//array
//array

/*
Tạo biến foods và gán cho biến một array có 3 phần tử là tên các món ăn mà bạn thích.
*/

let foods = [
    'mango',
    'banana',
    'apple'
];
console.log(Array.isArray(foods));


/*
Cho biến couldBeAnything có thể là bất cứ kiểu dữ liệu gì.
Hãy kiểm tra nếu biến cho trước là array thì gán true cho result. 
Các trường hợp khác gán false cho result.
*/

function checkIsArray(couldBeAnything) {
    let result;
    if(Array.isArray(couldBeAnything)){
        result = true;
    }else{
        result = false;
    }
    return result;
}
console.log(checkIsArray());
