function parseList(xyList) {
	xyList = xyList.replace('"', '');

	splitList = xyList.split(" ");
	

	newList = [];
	var x = 0;
	for (var i = 0; i < splitList.length; i+=2) {
		if (splitList[i] !="") {
			newArr = [parseFloat(splitList[i]).toPrecision(6), parseFloat(splitList[i+1]).toPrecision(6)];
			newList[x] = newArr;	
		}
		x++;
	}
	return newList;
}
function findMin(list,offset) {
	if (list.length > 0) {

		var min = list[0][offset]
		for (var i = 0; i < list.length; i++) {
			if (list[i][offset]< min) {
				min = list[i][offset];
			}
		};
	return min;
	};	
}
function findMax(list,offset) {
	if (list.length > 0) {

		var max = list[0][offset]
		for (var i = 0; i < list.length; i++) {
			if (list[i][offset]> max) {
				max = list[i][offset];
			}
		};
	return max;
	};	
}
function scale(val, scale, min, max,top, bot) {
	return ((top-bot)*(val-min)/scale) + bot

}
// normalizes a list based on 
function norm(xyList,param) {
	h = parseList(xyList);
	minX = findMin(h,0);
	minY = findMin(h,1);
	maxX = findMax(h,0);
	maxY = findMax(h,1);
	scaleX = maxX - minX;
	scaleY = maxY - minY;
	outlet(0,0.0);
	outlet(0,0.0);
	for (var i = 0; i < h.length; i++) {
		thisX = parseFloat(h[i][0]).toPrecision(6);
		thisY = parseFloat(h[i][1]).toPrecision(6);
		outlet(0,scale(thisX,scaleX,minX,maxX,0,1));
		outlet(0,scale(thisY,scaleY,minY,maxY,-1,1));
	};
	outlet(0,1.0)
	outlet(0,0.0)
	
}

