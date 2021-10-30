//array

Array.prototype.reduce2 = function(callback, result) {
    const arrayLength = this.length;
    var i =0;
    if(arguments.length < 2) {
        result = this[0];
        i =1;
    }
    for(;i< arrayLength ;i++) {
        result = callback(result,this[i],i,this);
    }
    return result;
}
Array.prototype.map2 = function(callback) {
    const arrayLength = this.length;
    var array = [];
    for(var i =0;i< arrayLength ;i++) {
        var result = callback(this[i],i);
        array.push(result);
    }
    return array;
}
Array.prototype.forEach2 = function(callback) {
    const arrayLength = this.length;
    for(let i = 0;i< arrayLength ; i++) {
        callback(this[i],i,this);
    }
}
Array.prototype.some2 = function(callback) {
    const arrayLength = this.length;
    for(let i = 0;i< arrayLength ; i++) {
       var result = callback(this[i],i,this) 
        if(result === true) {
            result = true;
            break;
        } else {
            result = false;
        }
    }
    return result;
}

Array.prototype.every2 = function(callback) {
    const arrayLength = this.length;
    for(let i = 0;i< arrayLength ; i++) {
       var result = callback(this[i],i,this) 
        if(result === true) {
            result = true;
        } else {
            result = false;
            break;
        }
    }
    return result;
}

Array.prototype.find2 = function(callback) {
    const arrayLength = this.length;
    for(let i = 0;i< arrayLength ; i++) {
       var result = callback(this[i],i,this) 

        if(result === true) {
            result = this[i];
            break;
        } else {
            result = undefined;
        }
    }
    return result;
}

Array.prototype.filter2 = function(callback) {
    const arrayLength = this.length;
    var answer = [];
    for(let i = 0;i< arrayLength ; i++) {
       var result = callback(this[i],i,this) 

        if(result === true) {
            answer.push(this[i]);
        }
    }
    return answer;
}
