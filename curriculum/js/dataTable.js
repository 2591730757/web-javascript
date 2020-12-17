"use strict";//严格模式

/**
 * 表头数据
 */
const tableTheadData = [
    { lable: "头像" },
    {lable:"姓名"},
    {lable:"性别"},
    {lable:"年龄"},
    {lable:"手机号"},
    {lable:"国籍"},
    {
        lable:"爱好",
        width:200,
        id:"a"
    },
    {lable:"头衔"},
    {lable:"操作"}
];

/**
 * 列表数据
 */
const tableTbodyData = [
    {
        face: {
            gender: 'boy',
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name: {
            trueName: '小明',
            nickname: '夏末的晨曦'
        },
        age: {
            number: 20
        },
        phone: {
            code: '+86',
            number: 13588888888
        },
        country: {
            National_flag: 'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            { tag: '跑步', color: '#468d9c' },
            { tag: '看电影', color: '#469c4e' },
            { tag: '二次元', color: '#9c468b' },
            { tag: '小猫小狗', color: '#9c4646' },
            { tag: '小说', color: '#b9af10' }
        ],
        rank: {
            name: '小白',
            level: 2
        }
    },
    {
        face: {
            gender: 'girl',
            img:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583671638490&di=957e858d102bae600e6b5472843bdfe6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201802%2F20%2F20180220165946_RiGPS.thumb.700_0.jpeg'
        },
        name: {
            trueName: '小梅',
            nickname: '初夏'
        },
        age: {
            number: 20
        },
        phone: {
            code: '+86',
            number: 13588888888
        },
        country: {
            National_flag: 'http://www.web-jshtml.cn/curriculum/javascript/images/china.jpg',
            name: '中国',
            color: 'red'
        },
        like: [
            { tag: '跑步', color: '#468d9c' },
            { tag: '看电影', color: '#469c4e' },
            { tag: '二次元', color: '#9c468b' },
            { tag: '小猫小狗', color: '#9c4646' },
            { tag: '小说', color: '#b9af10' }
        ],
        rank: {
            name: '小白',
            level: 3
        }
    }
]