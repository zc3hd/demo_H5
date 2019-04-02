# CSS3 2D transform

* 转换 transform 是CSS3中具有颠覆性的特征之一，可以实现元素的位移、旋转、变形、缩放。

## 2D转化 transform

* 缩放：scale
* 移动：translate 2D:两个2 direction：X Y轴
* 旋转：rotate


## 位移：transform: translate(x, y)

* 以前：定位。margin
* 现在：translate(x, y)可以使具体的px,也可以使%。
* 2D：
```css
transform: translateX(100px);
transform: translateY(100px);
transform: translate(x, y)
```

* 特点：
```
定义 2D 转换，沿着 X 和 Y 轴移动元素
translate中的百分比单位是相对于自身元素的 translate:(50%,50%);
translate类似定位，不会影响到其他元素的位置。
对行内标签没有效果
```

* 不会影响其他盒子，两个盒子，没有设置定位，一个盒子使用`transform: translate(100px,100px);`,这个盒子会相对自己的原来的位置进行移动。
* 但是如果下面的盒子使用的是定位，也不影响下面的盒子，但是下面盒子的层级比他高。
* 可以先简单了解下，translate和relative有什么区别：http://www.caotama.com/4285.html；


* 场景：让一个盒子上下左右居中；
* 以前：
```html
<div>
    <p></p>
</div>
```

```css
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
```css
p {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 200px;
    height: 200px;
    background-color: purple;
    /* translate(-50%, -50%)  盒子往右走自己宽度的一半，往下走高度的一半  */
    transform: translate(-50%, -50%);
}
```
