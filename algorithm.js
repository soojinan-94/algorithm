/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    const aBigInt = `0b${a}`;
    const bBigInt = `0b${b}`;
    return (BigInt(aBigInt) + BigInt(bBigInt)).toString(2)
};
addBinary("10100000100100110110010000010101111011011001101110111111111101000000101111001110001111100001101","110101001011101110001111100110001010100001101011101010000011011011001011101111001100000011011110011")
// addBinary("1010",'1011')