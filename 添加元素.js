/********************************************************************************
题目描述
在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组

示例1
输入
[1, 2, 3, 4],  10
输出
[1, 2, 3, 4, 10] 
*********************************************************************************/

//s1 迭代复制
function append(arr, item) {
    var newArr = [];
    var len = arr.length;
    for(var i = 0; i < len; i++){
        newArr[i] = arr[i];
    }
    newArr[len] = item;
    return newArr;
}

//s2 slice拷贝
function append(arr, item) {
    var newArr = arr.slice(0);
    newArr.push(item);          //push方法返回push后的数组长度
    return newArr;
}

//s3 数组拼接
function append(arr, item) {
    return arr.concat(item);
}