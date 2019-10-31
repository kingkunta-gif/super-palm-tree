/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    //declare vars
    var output = [], recentOutput;
    //edge case handling
    if(!intervals) return;
    if(intervals.length === 0) return [];
    //sort by the start value
    intervals.sort((a,b) => a[0] - b[0]);
    output.push(intervals[0]);
    //iterate through array
    for(var i = 1; i < intervals.length; i++){
        recentOutput = output[output.length-1];
        if(intervals[i][0] >= recentOutput[0] && intervals[i][0] <= recentOutput[1]){
            recentOutput[1] = Math.max(recentOutput[1], intervals[i][1]);
        }
        //otherwise, the new array is pushed into the output as is
        else{
            output.push(intervals[i]);
        }
    }
    return output;
};
