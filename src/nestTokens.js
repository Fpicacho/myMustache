// 折叠tokens
export default function nestTokens(tokens) {
    // 结果数组
    const nestedTokens = [];
    // 存放小tokens
    const sections = [];
    // 收集器
    let collector = nestedTokens;

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];
        // console.log(token)
        switch (token[0]) {
            case '#':
                collector.push(token)
                sections.push(token)
                token[2] = []
                collector = token[2]
                break
            case '/':
                // 返回上一级
                sections.pop()
                collector = sections.length > 0
                    ? sections[sections.length - 1][2]
                    : nestedTokens;
                break
            default:
                collector.push(token)
        }
    }
    return nestedTokens
}