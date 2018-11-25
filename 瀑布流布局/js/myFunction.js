function scroll() {
    if (document.documentElement.scrollTop=== 'CSS1Compat') {//w3c
        return {
            top: document.documentElement.scrollTop,
            left: document.documentElement.scrollLeft
        }
    }
    if (window.pageXOffset!==null) {//高版本
        return {
            top: window.pageYOffset,
            left: window.pageXOffset
        }
    }
    return {//其他
        top: document.body.scrollTop,
        left: document.body.scrollLeft
    }
}
