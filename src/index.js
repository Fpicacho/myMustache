import parseTemplateToTokens from "./parseTemplateToTokens";
window.myMustache = {
    render(templateStr,data) {
        const tokens = parseTemplateToTokens(templateStr,data)
        console.log(tokens)
    }
}

