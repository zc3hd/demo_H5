# CSS 2D rotate

## 1.辅助知识

* 顺时针：顺着我们时针的方向转动就是顺时针，同理逆时针；

## 2.代码知识

在要设置旋转样式的标签CSS写rotate
```css
img {
    width: 150px;
    /* 顺时针旋转45度 */
    transform: rotate(45deg);
    border-radius: 50%;
    border: 5px solid pink;
}
```

【使用场景1】鼠标悬浮上面进行动画旋转一定的角度
```css
img {
    width: 150px;
    /* 顺时针旋转45度 */
    /* transform: rotate(45deg); */
    border-radius: 50%;
    border: 5px solid pink;
    /* 过渡写到本身上，谁做动画给谁加 */
    transition: all 0.3s;
}

img:hover {
    transform: rotate(360deg);
}
```

【使用场景2】DIV盒子右侧的有下拉箭头，鼠标悬浮于DIV上时，箭头进行选择为上箭头；
```css
div {
    position: relative;
    width: 249px;
    height: 35px;
    border: 1px solid #000;
}

div::after {
    content: "";
    position: absolute;
    top: 8px;
    right: 15px;
    width: 10px;
    height: 10px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(45deg);
    transition: all 0.2s;
}
/* 鼠标经过div  里面的三角旋转 
注意伪类  要写在伪元素前面
*/
div:hover::after {
    transform: rotate(225deg);
}
```

在浏览器中修改 **rotate** 数值：

![4](img/4.gif)

注意：

1. `transform: rotate(18deg)`18deg代表顺时针转18度，负值代表逆时针转一定的角度;注意单位deg;
2. 默认旋转的中心点是元素的中心点;

问题：如何修改旋转的中心点？**transform-origin** 了解下

1. transform-origin: **50% 50%;** 默认值 元素的中心位置 百分比是相对于自身的宽度和高度
2. transform-origin:**top left;**  左上角   和 transform-origin：0 0;相同
3. transform-origin:**50px 50px;** 距离左上角 沿着坐标系方向移动到50px 50px 的位置作为中心点
4. transform-origin：**0**;  只写一个值的时候  第二个值默认为 50%;

代码测试旋转中心点
```html
<div class="div_1"></div>
<div class="p"></div>
```

```css
*{
    margin: 0;
    padding: 0;
}
.div_1 {
    width: 200px;
    height: 200px;
    background-color: pink;
    /*margin: 100px auto;*/
    transition: all 1s;
    /* 1.可以跟方位名词 */
    /* transform-origin: left bottom; */
    /* 2. 默认的是 50%  50%  等价于 center  center */
    /* 3. 可以是px 像素 */
    transform-origin: 50px 50px;
}

.div_1:hover {
    transform: rotate(360deg);
}

.p {
    position: absolute;
    top: 50px;
    left: 50px;
    width: 2px;
    height: 2px;
    background-color: #000;
}
```

【使用场景】鼠标悬浮上一个标签，被隐藏的标签通过指定旋转基准点的方式进入显示区；
```css
div {
    overflow: hidden;
    width: 200px;
    height: 200px;
    border: 1px solid pink;
    margin: 10px;
    float: left;
}

div::before {
    content: "黑马";
    display: block;
    width: 100%;
    height: 100%;
    background-color: hotpink;
    /* 建议书写顺序：
     1.先设置过度动画的时间
     2.设置旋转的基准点
     3.设置初始化的转动；
    */
    transition: all 0.4s;

    transform-origin: left bottom;

    transform: rotate(180deg);
}
/* 鼠标经过div 里面的before 复原 */

div:hover::before {
    transform: rotate(0deg);
}
```
