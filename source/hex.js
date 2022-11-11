module.exports.RANDOM = function() {
    let random = Math.random()
    let exponent = --random.toExponential().split('-')[1]
    random *= Math.pow(10, exponent)
    return '#' + ( ~~(random * (1 << 24) )).toString(16)
}

module.exports.RED = function() {
    let hexCode = '#FF0000'
    return hexCode
}

module.exports.GREEN = function() {
    let hexCode = '#00FF00'
    return hexCode
    return hexCode
}

module.exports.BLUE = function() {
    let hexCode = '#0000FF'
    return hexCode
}

module.exports.YELLOW = function() {
    let hexCode = '#FFE135'
    return hexCode
}

module.exports.PURPLE = function() {
    let hexCode = '#80080'
    return hexCode
}

module.exports.BLACK = function() {
    let hexCode = '#000000'
    return hexCode
}

module.exports.SILVER = function() {
    let hexCode = '#C0C0C0'
    return hexCode
}

module.exports.GRAY = function() {
    let hexCode = '#808080'
    return hexCode
}

module.exports.MAROON = function() {
    let hexCode = '#800000'
    return hexCode
}

module.exports.OLIVE = function() {
    let hexCode = '#808000'
    return hexCode
}

module.exports.LIME = function() {
    let hexCode = '#00FF00'
    return hexCode
}

module.exports.AQUA = function() {
    let hexCode = '#00FFFF'
    return hexCode
}

module.exports.TEAL = function() {
    let hexCode = '#008080'
    return hexCode
}

module.exports.NAVY = function() {
    let hexCode = '#000080'
    return hexCode
}

module.exports.VIOLET = function() {
    let hexCode = '#8F00FF'
    return hexCode
}

module.exports.ORANGE = function() {
    let hexCode = '#FFA500'
    return hexCode
}
