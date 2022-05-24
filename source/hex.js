module.exports.random = function() {
    let random = Math.random()
    let exponent = --random.toExponential().split('-')[1]
    random *= Math.pow(10, exponent)
    return '#' + ( ~~(random * (1 << 24) )).toString(16)
}

module.exports.red = function() {
    let hexCode = '#FF0000'
    return hexCode
}

module.exports.green = function() {
    let hexCode = '#00FF00'
    return hexCode
    return hexCode
}

module.exports.blue = function() {
    let hexCode = '#0000FF'
    return hexCode
}

module.exports.yellow = function() {
    let hexCode = '#FFE135'
    return hexCode
}

module.exports.purple = function() {
    let hexCode = '#80080'
    return hexCode
}

module.exports.black = function() {
    let hexCode = '#000000'
    return hexCode
}

module.exports.silver = function() {
    let hexCode = '#C0C0C0'
    return hexCode
}

module.exports.gray = function() {
    let hexCode = '#808080'
    return hexCode
}

module.exports.maroon = function() {
    let hexCode = '#800000'
    return hexCode
}

module.exports.olive = function() {
    let hexCode = '#808000'
    return hexCode
}

module.exports.lime = function() {
    let hexCode = '#00FF00'
    return hexCode
}

module.exports.aqua = function() {
    let hexCode = '#00FFFF'
    return hexCode
}

module.exports.teal = function() {
    let hexCode = '#008080'
    return hexCode
}

module.exports.navy = function() {
    let hexCode = '#000080'
    return hexCode
}

module.exports.violet = function() {
    let hexCode = '#8F00FF'
    return hexCode
}

module.exports.orange = function() {
    let hexCode = '#FFA500'
    return hexCode
}