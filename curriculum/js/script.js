"use strict";//严格模式

const divDom = window.myjs.getId('table-data-wrap');//获取元素
const tableDom = window.myjs.createEl('table');//创建元素

const styles = {
    'width': '100%',
    'border': '0',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap'
};
window.myjs.setAttr(tableDom, styles);

/**
 * 表头数据
 */
let theadHtml = `<thead><tr>`;
//es6 forEach(无法终止和跳过循环直至遍历完成)
tableTheadData.forEach((item) => {
    let width = item.width ? ` width="${item.width}"` : ``;//检查是否存在width
    let id = item.id ? ` id="${item.id}"` : ``;//检查是否存在id
    theadHtml += `<th${width}${id}>${item.lable}</th$>`;//字符串拼接
});

theadHtml += `</tr></thead>`;

/**
 * 列表数据
 */
let tbodyHtml = `<tbody>`;
tbodyHtml += createTbodyData();
tbodyHtml += `</tbody>`;

tableDom.innerHTML = theadHtml + tbodyHtml;//生成表头

divDom.appendChild(tableDom);