# Css3

* 不神奇：就是新样式；
* 移动端优于PC，对于我们程序员同样是更友好的开发；

## 2D转化transform

* 2D:两个2 direction：X Y轴
* 缩放：scale
* 移动：translate
* 旋转：rotate
* 倾斜：skew


## 移动：transform: translate(x, y)

* 以前：定位。margin
* 现在：translate(x, y)可以使具体的px,也可以使%。移动要有个基准点，这个基准点默认就是当前标签左上角的位置。
```
transform: translateX(100px);
transform: translateY(100px);
```

* 特点：
```
定义 2D 转换，沿着 X 和 Y 轴移动元素
translate中的百分比单位是相对于自身元素的 translate:(50%,50%);
translate类似定位，不会影响到其他元素的位置。
对行内标签没有效果
```

* 不会影响其他盒子，两个盒子，没有设置定位，一个盒子使用`transform: translate(100px,100px);`,这个盒子会相对自己的原来的位置进行移动。
* 但是如果下面的盒子使用的是定位，也不用影响下面的盒子，但是下面盒子的层级比他高。
* 简单了解下，translate和relative有什么区别：http://www.caotama.com/4285.html，
* 这个在面试的时候可能会问到，有关页面性能方面，这是其中一点。


* 场景：让一个盒子上下左右居中；
* 以前：
```
<div>
    <p></p>
</div>

div {
    position: relative;
    width: 500px;
    height: 500px;
    background-color: pink;
}

p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: purple;
    margin-top: -100px;
    margin-left: -100px; 
}
```

* 现在：
```
p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: purple;
    /* translate(-50%, -50%)  盒子往上走自己高度的一半   */
    transform: translate(-50%, -50%);
}
```
