// tokens数组变为字符串
import lookup from "./lookup";
export default function renderTemplate(tokens, data) {
    console.log(tokens, data)
    let resultStr = ''
    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]
        switch (token[0]){
            case 'text':
                resultStr += token[1]
                break
            case 'name':
                resultStr += lookup(data[token[1]])
                break
            case '#':
                break
        }
    }
    return resultStr
}