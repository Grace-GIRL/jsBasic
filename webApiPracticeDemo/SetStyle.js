//构造函数
function SetStyle(w, h, m, bg) {
    //属性绑定完成
    this.width = w;
    this.height = h;
    this.margin = m;
    this.background = bg;


    //放在构造函数中，所有的实例对象，也都是可以使用的。为什么要把公共的属性和方法绑定到原型上？
    //不知道是哪里重复了？？？？
    // this.init=function(arr) {
    //     for (var i = 0; i < arr.length; i++) {
    //         arr[i].style.width = this.width + "px";
    //         arr[i].style.height = this.height + "px";
    //         arr[i].style.margin = this.margin + "px";
    //         arr[i].style.background = this.background;
    //     }
    // }
}
//方法因为很有公共性，所以绑定到原型上 这句话很重要，这是一个优化的过程
SetStyle.prototype.init = function (arr) {
    //
    for (var i = 0; i < arr.length; i++) {
        arr[i].style.width = this.width + "px";
        arr[i].style.height = this.height + "px";
        arr[i].style.margin = this.margin + "px";
        arr[i].style.background = this.background;
    }
}


//实例对象
// var setLi=new SetStyle('50','50','10','green');
// setLi.init(liArr);
