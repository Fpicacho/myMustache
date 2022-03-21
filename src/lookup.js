// 在dataObj对象中寻找连续.符号的keyName属性
export default function lookup(dataObj, keyName) {
    let temp = dataObj
    if (keyName.indexOf('.') !== -1 && keyName !== '.') {
        let keys = keyName.split('.')
        temp = dataObj
        for (let i = 0; i < keys.length; i++) {
            temp = temp[keys[i]]
        }
        return temp
    }
    return dataObj[keyName]
}