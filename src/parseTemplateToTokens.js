import scanner from "./scanner.js";
import nestTokens from "./nestTokens";
// 将模板字符串变为tokens数组
export default function parseTemplateToTokens(templateStr) {
    let tokens = [];
    // 创建扫描器
    const Scanner = new scanner(templateStr)
    let words;
    while (Scanner.eos()) {
        // 收集开始标记
        words = Scanner.scanUntil("{{");
        if (words !== '') {
            tokens.push(['text', words.replace(/\s/g,'')])
        }
        Scanner.scan("{{")
        words = Scanner.scanUntil("}}");
        if (words !== '') {
            if (words[0] === '#') {
                tokens.push(['#', words.substring(1)])
            } else if (words[0] === '/') {
                tokens.push(['/', words.substring(1)])
            } else {
                tokens.push(['name', words])
            }

        }
        Scanner.scan("}}")

    }
    return nestTokens(tokens)
}