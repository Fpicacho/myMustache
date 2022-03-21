// tokens数组变为字符串
import lookup from "./lookup";
import parseArray from "./parseArray";

export default function renderTemplate(tokens, data) {
    let resultStr = ''
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]) {
            case 'text':
                resultStr += token[1]
                break
            case 'name':
                // 防止a.b.c的访问形式
                resultStr += lookup(data,token[1])
                break
            case '#':
                resultStr += parseArray(token, data)
                break
        }
    }
    return resultStr
}