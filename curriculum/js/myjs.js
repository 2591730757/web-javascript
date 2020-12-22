/**
 * window：全局部署
 * 
 * window.myjs：在window里创建自己的命名空间myjs
 * 
 * return：谁调用函数，就返回给谁
 * 
 * throw new Error()：抛出错误
 * 
 * json对象：类似于python字典
 * 
 * es6 forEach(无法终止和跳过循环直至遍历完成)
 * 
 * es5 for(break:终止,continue:跳过此次循环)
 * 
 * 定义形参可以设定默认值，当外部调用函数时如果没有传入该参数则执行默认值
 * 
 * 命名空间：避免方法和变量对全局环境(外部js)造成污染
 * 
 * 作用域：在当前作用域范围外时无法使用当前作用域内的方法和变量
 *      1.子级作用域可访问父级作用域的变量
 * 
 * 自动执行函数的作用：
 *      1.防止当前文件的方法和变量对全局环境(外部js)造成污染(冲突)
 *      2.防止与第三方库命名冲突
 * 
 * 函数提升：指的是程序开始前会把所有函数预加载，可以声明在文件的任何位置，不需要遵循先定义后调用规则
 *      1.具名函数有函数提升概念
 *      2.函数表达式无函数提升概念(const functionname = function () {})
 * 
 * for in和for of的区别：
 *      1.for in遍历的时数组的索引(即键名)，而for of遍历的是数组的元素值
 * 
 * function(event){}:(event)代表事件的状态，不同的事件有不同的状态和属性
 * 
 * addEvent(div1,'click',function(){},true||false)(默认为false，也就是默认为事件冒泡，true是事件捕获)
 * 
 * 事件冒泡：如果某个元素设置了点击事件，该事件会向上传播，如果其父级也有事件则会一并执行
 *      阻止事件冒泡：const ev =event||window.event
 *                   if(ev.stopPropagation){
 *                      ev.stopPropagation()
 *                   }else{
 *                      ev.cancelBubble=true;//兼容IE11以下版本
 *                   }
 * 
 * 事件捕获：如果某个元素设置了点击事件，该事件会向下传播，如果其子级也有事件则会一并执行
 * 
 * es6对象的key和value是相同的情况下，用一个参数就可以
 * 
 * this指向：谁调用我，我就指向谁
 * 
 * 定时器：(定时器会一直存在内存中，创建以后应该及时删除)
 *      setTimeout、clearTimeout：指定时间后执行一次内容
 *      setInterval、clearInterval：每间隔指定时间后执行一次内容，不断执行
 * 
 * 原型和继承：
 *      1.构造函数
 *      2.原型
 *      
 *      1.原型链分为：自己-父级(__proto__)-从父级(objce)
 *      2.__proto__方法用于指向父级对象(原型)
 *      3.prototype
 */
(function () { 
    "use strict";//严格模式
    if (!window.myjs) { window.myjs = {} };//判断命名空间

    /*获取********************************************************************************************* */
    
    /**
     * 获取id对象
     * @param {string} id
     */
    function $getId(id) {
        if (typeof id != 'string') {
            throw new Error('id必须为字符串')
        };
        const dom = document.getElementById(id);
        if (!dom) {
            throw new Error('元素未定义')
        };
        return dom;
    };
    window.myjs.$getId = $getId;//将函数存放在window命名空间里

    /**
     * 获取classname对象
     * @param {string} class
     */
    function $getClass(className) {
        return document.getElementsByClassName(className);
    };
    window.myjs.$getClass = $getClass;

    /**
     * 获取标签对象
     * @param {string} node
     */
    function $getTag(parentNode,target) {
        return parentNode.getElementsByTagName(target);
    };
    window.myjs.$getTag = $getTag;

    /**
     * 获取标签对象(第一层)
     * @param {string} node
     */
    function $getChildren(parentNode) {
        return parentNode.children;
    };
    window.myjs.$getChildren = $getChildren;

    /**
     * 获取节点属性
     */
    function $getAttr(node,attr) {
        return node.getAttribute(attr)
    };
    window.myjs.$getAttr = $getAttr;

    /*操作********************************************************************************************* */

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
     * addEventListener方法
     */
    function addEvent(domNode, eventType, handlerFunction) {
        if (window.addEventListener) {
            domNode.addEventListener(eventType, handlerFunction);
        } else {
            domNode.attachEvent(`on${eventType}`, handlerFunction);
        }
    };
    window.myjs.addEvent = addEvent;

    /**
     * removeEventListener方法(事件注册：添加事件监听)(true:事件捕获，与事件冒泡相反)
     */
    function removeEvent(domNode, eventType, handlerFunction) {
        if (window.removeEventListener) {
            domNode.removeEventListener(eventType, handlerFunction);
        } else {
            domNode.detachEvent(`on${eventType}`, handlerFunction);
        }
    };
    window.myjs.removeEvent = removeEvent;
})();