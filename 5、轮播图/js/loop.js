var jsBox = document.getElementById("box")
var jsPic = document.getElementById("pic")
var jsLeft = document.getElementById("left")
var jsRight = document.getElementById("right")
var jsLisArr = document.getElementsByTagName("li")


//第一个li设置为红色
jsLisArr[0].style.backgroundColor = "red"

//启动一个定时器去更换jsPic中的src属性
var currentPage = 1
var timer = setInterval(startLoop,1000)
function startLoop(){
    currentPage++
    changePage()
}



function changePage() {
    if (currentPage == 9){
        currentPage=1
    } else if (currentPage == 0){
        currentPage=8
    }
    jsPic.src = "img/" + currentPage + ".jpg"

    //清空所有小圆点的颜色
    for (var i =0 ;i < jsLisArr.length;i++){
        jsLisArr[i].style.backgroundColor = "#aaa"
    }
    jsLisArr[currentPage - 1].style.backgroundColor = "red"
}

//鼠标进入box
jsBox.addEventListener("mouseover",overFunc,false)
function overFunc(){
    //停止计数器
    clearInterval(timer)
    //显示左右按钮
    jsLeft.style.display = "block"
    jsRight.style.display = "block"
}
jsBox.addEventListener("mouseout",outFunc,false)
function outFunc(){
    //重启计数器
    timer = setInterval(startLoop,1000)
    //隐藏左右按钮
    jsLeft.style.display = "none"
    jsRight.style.display = "none"

}

//点击左右按钮
jsLeft.addEventListener("mouseover",deep,false)
jsRight.addEventListener("mouseover",deep,false)
function deep() {
    this.style.backgroundColor = "rgba(0,0,0,0.6)"
}
jsLeft.addEventListener("mouseout",nodeep,false)
jsRight.addEventListener("mouseout",nodeep,false)
function nodeep() {
    this.style.backgroundColor = "rgba(0,0,0,0.2)"
}

jsRight.addEventListener("click",function() {
    currentPage++
    changePage()
},false)
jsLeft.addEventListener("click",function() {
    currentPage--
    changePage()
},false)

//进入小圆点操作
for (var i = 0;i < jsLisArr.length;i++){
    jsLisArr[i].index = i +1 /*定义下标属性值*/
    jsLisArr[i].addEventListener("mouseover",function(){
        //currentPage = parseInt(this.innerHTML)
        currentPage = parseInt(this.index)
        changePage()
    },false)
}


//swiper js插件 轮播图















