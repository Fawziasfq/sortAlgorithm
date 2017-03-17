function quickSort(arr) {
	if (arr.length <= 1) {
		return arr; //如果数组只有一个数，就直接返回
	}
	var num = Math.floor(arr.length / 2); //找到中间数的索引值，如果是浮点数就向下取整
	var numValue = arr.splice(num, 1); //找到中间数的值
	var arrLeft = []; //定义一个空的左数组
	var arrRight = []; //定义一个空的右数组

	for (var i = 0; i < arr.length; i++) { //遍历整个数组
		if (arr[i] < numValue) { //数组元素的值小于中间值，传入左数组
			arrLeft.push(arr[i]);
		} else {
			arrRight.push(arr[i]); //数组元素的值大于中间值，传入右数组
		}
	}
	return quickSort(arrLeft).concat(numValue, quickSort(arrRight)); //将三个数组拼接，并且递归调用
}

console.log(quickSort([10, 5, 2, 3, 6, 9, 4]));