//扫描器类
class Scanner {
    constructor(templateStr) {
        this.templateStr = templateStr
        // 当前扫描器位置
        this.pos = 0
        // 尾巴
        this.tail = templateStr
    }

    // 跳过指定内容
    scan(tag) {
        if (this.tail.indexOf(tag) === 0) {
            // tag有多长 就让指针后移多少位
            this.pos += tag.length
            this.tail = this.templateStr.substring(this.pos)
        }
    }

    // 进行扫描直到预见指定内容 且返回之前扫描的str
    scanUntil(stopTag) {
        // 记录一下本方法执行时pos的值
        const pos_backup = this.pos
        // 当尾巴的开头不是stopTag指针增加
        while (this.tail.indexOf(stopTag) !== 0 && this.pos < this.templateStr.length) {
            this.pos++
            this.tail = this.templateStr.substring(this.pos)
        }
        // pos_backup - pos
        return this.templateStr.substring(pos_backup, this.pos)
    }
}

export default Scanner