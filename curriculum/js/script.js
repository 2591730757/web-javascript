"use strict";//严格模式

const divDom = window.myjs.$id('table-data-wrap');//获取元素
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
let trHtml = ``;
//es5 for(break:终止,continue:跳过此次循环)
for (let i = 0; i < tableTbodyData.length; i++){
    const data = tableTbodyData[i];
    //tr开始
    trHtml += `<tr>`;
    //头像
    trHtml += `<td>
                    <div class="face">
                        <span class="gender icon-${data.face.gender}"></span>
                        <img src="${data.face.img}" alt="">
                    </div>
                </td>`;
    //姓名
    trHtml += `<td>
                    <div class="people-name">
                        <h4 class="name">${data.name.trueName}</h4>
                        <span class="nickname option-05 fs-12">昵称：${data.name.nickname}</span>
                    </div>
                </td>`;
    //性别
    trHtml += `<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data.face.gender=='girl'?'':'option-05'}"></span>
                        <span class="gender icon-boy ${data.face.gender=='boy'?'':'option-05'}"></span>
                    </div>
                </td>`;
    //年龄
    trHtml += `<td>
                    <div class="age text-center">
                        <p>${data.age.number}</p>
                        <span class="option-05 fs-12">（单身狗）</span>
                    </div>
                </td>`;
    //手机号
    trHtml += `<td>
                    <div class="phone">
                        ${data.phone.code}<span class="option-05">（${data.country.name}）</span><br />
                        ${data.phone.number}
                    </div>
                </td>`;
    //国籍
    trHtml += `<td>
                    <div>
                        <img src="${data.country.National_flag}" alt="${data.country.name}">
                        <p class="country-name" style="color: ${data.country.color};">${data.country.name}</p>
                    </div>
                </td>`;
    //爱好
    let likeHtml = ``;
    data.like.forEach(item => {
        likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`;
    });
    trHtml += `<td><div class="likes">${likeHtml}</div></td>`;
    //头衔
    trHtml += `<td>
                    <div class="grade">
                        <span class="role-name">${data.rank.name}</span>
                        <div class="grade-wrap icon-grade">
                            <div class="grade-high icon-grade" style="width: ${data.rank.level * 16.66666}%;"></div>
                        </div>
                    </div>
                </td>`;
    //操作
    trHtml += `<td>
                    <div class="operation">
                        <a href="javascript: void(0);" class="operation-btn">设置</a>
                        <ul class="links">
                            <a href="javascript: void(0);">编辑</a>
                            <a href="javascript: void(0);">删除</a>
                            <a href="javascript: void(0);">锁定</a>
                            <a href="javascript: void(0);">收起</a>
                        </ul>
                    </div>
                </td>`;
    
    //tr结束
    trHtml += `</tr>`;
}
tbodyHtml += `${trHtml}</tbody>`;

tableDom.innerHTML = theadHtml + tbodyHtml;//生成表头

divDom.appendChild(tableDom);