"use strict";//严格模式

/**
 * 生成头像
 */
function createFace(data) {
    let html=`<td>
                <div class="face">
                    <span class="gender icon-${data.gender}"></span>
                    <img src="${data.img}" alt="">
                </div>
            </td>`;
    return html;
}

/**
 * 生成姓名
 */
function createName(data) {
    let html=`<td>
                <div class="people-name">
                    <h4 class="name">${data.trueName}</h4>
                    <span class="nickname option-05 fs-12">昵称：${data.nickname}</span>
                </div>
            </td>`;
    return html;
}

/**
 * 生成性别
 */
function createGender(data) {
    let html = `<td>
                    <div class="gender-wrap">
                        <span class="gender icon-girl ${data.gender == 'girl' ? '' : 'option-05'}"></span>
                        <span class="gender icon-boy ${data.gender == 'boy' ? '' : 'option-05'}"></span>
                    </div>
                </td>`;
    return html;
}

/**
 * 生成年龄
 */
function createAeg(data) {
    let html = `<td>
                    <div class="age text-center">
                        <p>${data.number}</p>
                        <span class="option-05 fs-12">（单身狗）</span>
                    </div>
                </td>`;
    return html;
}

/**
 * 生成手机号
 */
function createPhone(data) {
    let html = `<td>
                    <div class="phone">
                        ${data.code}<span class="option-05">（中国）</span><br />
                        ${data.number}
                    </div>
                </td>`;
    return html;
}

/**
 * 生成国籍
 */
function createCountry(data) {
    let html = `<td>
                    <div>
                        <img src="${data.National_flag}" alt="${data.name}">
                        <p class="country-name" style="color: ${data.color};">${data.name}</p>
                    </div>
                </td>`;
    return html;
}

/**
 * 生成爱好
 */
function createLike(data) {
    let html = ``;
    let likeHtml = ``;
    // 循环生成span
    data.forEach(item => {
        likeHtml += `<span style="background-color: ${item.color};">${item.tag}</span>`;
    });
    // 生成td
    html += `<td><div class="likes">${likeHtml}</div></td>`;
    return html;
}

/**
 * 生成头衔
 */
function createRank(data, number = 16.66666) {
    // 定义形参可以设定默认值，当外部调用函数时如果没有传入该参数则执行默认值
    // const NUMBER = 16.66666;//引用类型，常量大写
    let html = `<td>
                    <div class="grade">
                        <span class="role-name">${data.name}</span>
                        <div class="grade-wrap icon-grade">
                            <div class="grade-high icon-grade" style="width: ${data.level * number}%;"></div>
                        </div>
                    </div>
                </td>`;
    return html;
}

/**
 * 生成操作
 */
function createOperationBtn() {
    let html = `<td>
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
    return html;
}

/**
 * 主体数据
 */
function createTbodyData() {
    let trHtml = ``;
    //es5 for(break:终止,continue:跳过此次循环)
    for (let i = 0; i < tableTbodyData.length; i++){
        const data = tableTbodyData[i];
        //tr开始
        trHtml += `<tr>`;
        //头像
        trHtml += createFace(data.face);
        //姓名
        trHtml += createName(data.name);
        //性别
        trHtml += createGender(data.face);
        //年龄
        trHtml += createAeg(data.age);
        //手机号
        trHtml += createPhone(data.phone);
        //国籍
        trHtml += createCountry(data.country);
        //爱好
        trHtml += createLike(data.like);
        //头衔
        trHtml += createRank(data.rank,);
        //操作
        trHtml += createOperationBtn();
        //tr结束
        trHtml += `</tr>`;
    }
    return trHtml;
}