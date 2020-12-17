"use strict";//严格模式

const divDom = window.myjs.$id('container-wrap');//获取元素

const tableDom = window.myjs.createEl('table');//创建元素

const styles = {
    'width': '100%',
    'border': '0',
    'cellpadding': '0',
    'cellspacing': '0',
    'id': 'table-data-wrap'
};

window.myjs.setAttr(tableDom, styles);

tableDom.innerHTML = `<thead>
                        <tr>
                            <th>头像</th>
                            <th>姓名</th>
                            <th>性别</th>
                            <th>年龄</th>
                            <th>手机号</th>
                            <th>国籍</th>
                            <th width="200">爱好</th>
                            <th>头衔</th>
                            <th>操作</th>
                        </tr>
                    </thead>`;

divDom.appendChild(tableDom);