import parseTemplateToTokens from "./parseTemplateToTokens";
import renderTemplate from "./renderTemplate";

window.myMustache = {
    render(templateStr, data) {
        const tokens = parseTemplateToTokens(templateStr)
        console.log(renderTemplate(tokens, data))
        return renderTemplate(tokens, data)
    }
}

