function saturdayFun(activity='roller-skate') {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity='go to the office') {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(flair='*') {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`
    }
}

const Calculator = {
    add: function(a,b) {
        return a + b;
    },
    subtract: function(a,b) {
        return a - b
    },
    multiply: function(a,b) {
        return a * b
    },
    divide: function(a,b) {
        return a / b
    }
}

let actionApplyer = function(startingPoint, ray) {
    let a = startingPoint
    for (let i = 0; i < ray.length; i++ ){
        a = ray[i](a)
    }
    return a
}