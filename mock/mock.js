var indexlist = require('./index-list');
var indexlistrefresh = require('./index-list-refresh');
var indexlistmore = require('./index-list-more');
var indexlistwaterfall = require('./index-list-waterfall');
var indexlistcss3waterfall = require('./index-list-css3waterfall');
var detail = require('./detail');
var index = require('./index');
var cate = require('./cate');
var list0 = require('./list_0');
var list1 = require('./list_1');
var list2 = require('./list_2');
var list3 = require('./list_3');
var list4 = require('./list_4');
var list5 = require('./list_5');
var list6 = require('./list_6');
var list7 = require('./list_7');
var classfy=require('./classClassfy');


module.exports = function() {
    return {

        "listrefresh": indexlistrefresh,
        "listmore": indexlistmore,
        "listwaterfall": indexlistwaterfall,
        "listcss3waterfall": indexlistcss3waterfall,
        "detail": detail,
        "index":index,
        "list0": list0,
        "list1": list1,
        "list2": list2,
        "list3": list3,
        "list4": list4,
        "list5": list5,
        "list6": list6,
        "list7": list7,
        "cate":cate,
        "classfy":classfy
    }
}
