/**
 * window：全局部署
 * window.myjs：在window里创建自己的命名空间myjs
 * return：谁调用函数，就返回给谁
 * throw new Error：抛出错误
 * json对象：类似于python字典
 * //es6 forEach(无法终止和跳过循环直至遍历完成)
 * //es5 for(break:终止,continue:跳过此次循环)
 * 命名空间：避免方法和变量对全局环境(外部js)造成污染
 * 作用域：在当前作用域范围外时无法使用当前作用域内的方法和变量
 *      1.子级作用域可访问父级作用域的变量
 * 自动执行函数的作用：
 *      1.防止当前文件的方法和变量对全局环境(外部js)造成污染(冲突)
 *      2.防止与第三方库命名冲突
 * 函数提升：指的是程序开始前会把所有函数预加载，可以声明在文件的任何位置，不需要遵循先定义后调用规则
 *      1.具名函数有函数提升概念
 *      2.函数表达式无函数提升概念(const functionname = function () {})
 */
(function () { 
    "use strict";//严格模式
    if (!window.myjs) { window.myjs = {} };//判断命名空间

    /**
     * 获取id的DOM元素
     * @param {string} id 
     */
    function $id(id) {
        if (typeof id != 'string') {
            throw new Error('id必须为字符串')
        };
        const dom = document.getElementById(id);
        if (!dom) {
            throw new Error('元素未定义')
        };
        return dom;
    };
    window.myjs.$id = $id;//将函数存放在window命名空间里

    /**
     * 创建元素
     */
    function createEl(node) {
        return document.createElement(node)
    };
    window.myjs.createEl = createEl;

    /**
     * 设置节点属性
     */
    function setAttr(node,styles) {
        for (let key in styles) {
            node.setAttribute(key, styles[key])
        }
    };
    window.myjs.setAttr = setAttr;

    /**
     * 获取节点属性
     */
    function getAttr(node,attr) {
        return node.getAttribute(attr)
    };
    window.myjs.getAttr = getAttr;

})();