# CSS 2D scale

## 1.辅助知识

* 缩放：在标签初始化所有有数值的属性进行缩放；

## 2.代码知识

在要设置缩放样式的标签CSS写scale
```css
/*宽变为两倍，高变为3倍*/
div {
    transform:scale(2,3);
}
```

【常见用法】
```
div {
    width: 200px;
    height: 200px;
    background-color: pink;
    margin: 100px auto;
    transition: all 0.4s;
}

div:hover {
    /* 1. 里面写的数字不跟单位 就是倍数的意思 1 就是1倍  2就是 2倍 */
    /* transform: scale(2, 2); */
    
    /* 2. 修改了宽度为原来的2倍  高度 不变 */
    /* transform: scale(2, 1); */
    
    /* 3. 等比例缩放 同时修改宽度和高度，我们有简单的写法  以下是 宽度修改了2倍，高度默认和第一个参数一样*/
    /* transform: scale(2); */
    
    /* 4. 我们可以进行缩小  小于1 就是缩放 */
    /* transform: scale(0.5, 0.5); */
    /* transform: scale(0.5); */
    
    /* 5. scale 的优势之处： 不会影响其他的盒子 而且可以设置缩放的中心点*/
    /* width 变化就会改变文档流，影响其他盒子的位置*/
    /* width: 300px;
    height: 300px; */
    transform: scale(2);
}
```

【使用场景】鼠标悬浮在某个标签图标上面，进行动画放大一定的比例
```css
div {
    overflow: hidden;
    float: left;
    margin: 10px;
}

div img {
    transition: all .4s;
}

div img:hover {
    transform: scale(1.1);
}
```

```html
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
<div>
    <a href="#"><img src="media/scale.jpg" alt=""></a>
</div>
```

注意：

1. `scale(n,m)`n,m没有单位，设置的放大缩小的比例;
2. 缩放的默认中心点是元素的中心点;修改transform-origin，也修改了缩放的基准中心点；
3. 缩放不影响其他盒子背后的原理：真实盒子的文档流位置根本没有发生变化；
4. 缩放的时候下面的所有的子标签和内部的文字都会被缩放；

-------------------

【特别之处1】：transform: translate(50%,50%)对scale的影响；

```html
<div class="rule"></div>
<div class="p_div"></div>
```

```css
/*尺子*/
.rule {
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100px;
    height: 50px;
    background-color: blue;
    z-index: 999;
}

.p_div {
    /* 这个样式，只是CSS3在页面的展现从进行了移动，但是真实盒子的文档流的位置是没有移动的。
    所以表现为基准点已经变化了。
    */
    transform: translate(50%,50%);

    width: 200px;
    height: 100px;
    /*这个背景阴影也会变化*/
    box-shadow: 0 0 50px #009dfd;
    /*transform: translateX(100px);*/
    background-color: #222;
    transition: all .4s;
/**/
/*transform-origin: 0 0;*/
}

.p_div:hover {
    transform: scale(2);
}
```

【特别之处2】：position: absolute对scale的影响；

```css
  .p_div {
    /* 注意这里，文档流的位置已经发生改变，那么基准点也发生了变化*/
    position: absolute;
    top: 50%;
    left: 50%;

    width: 200px;
    height: 100px;
    /*这个背景阴影也会变化*/
    box-shadow: 0 0 50px #009dfd;
    /*transform: translateX(100px);*/
    background-color: #222;
    transition: all .4s;
  }
```

上面两个特别的例子解释了为什么CSS3过度动画不会影响其他盒子的位置；所以要确定文档流的位置在哪？
