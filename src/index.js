import scanner from "./scanner.js";
window.myMustache = {
    render(templateStr,data) {
        console.log(`render被调用,调用扫描器Scanner`)
        // 实例化扫描器 针对模板字符串工作
        const Scanner = new scanner(templateStr)
        let words;
        while (Scanner.pos !== templateStr.length){
            words = Scanner.scanUntil("{{")
            console.log(words)
            Scanner.scan("{{")
            words = Scanner.scanUntil("}}")
            console.log(words)
            Scanner.scan("}}")
        }
    }
}

