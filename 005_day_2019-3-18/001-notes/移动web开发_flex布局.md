# 移动web开发——flex布局

## 1. 了解

### 1.1 flex布局与传统布局的对比

* 传统布局：兼容性好；布局繁琐；局限性，不能再移动端很好的布局。
* flex布局：操作方便，布局极其简单，移动端使用比较广泛；pc端浏览器支持情况比较差；IE11或更低版本不支持flex或仅支持部分

### 1.2 建议

* 如果是pc端页面布局，还是采用传统方式
* 如果是移动端或者是不考虑兼容的pc则采用flex

## 2. flex布局

### 2.1 原理

* flex 是 flexible Box 的缩写，意为"弹性布局"，用来为盒状模型提供最大的灵活性，任何一个容器都可以指定为 flex 布局。
* 当我们为父盒子设为 flex 布局以后，子元素的 float、clear 和 vertical-align 属性将失效。
* flex布局又叫伸缩布局 、弹性布局 、伸缩盒布局 、弹性盒布局 
* 采用 Flex 布局的元素，称为 Flex 容器（flexcontainer），简称"容器"。它的所有子元素自动成为容器成员，称为 Flex 项目（flexitem），简称"项目"。
* 就是通过给父盒子添加flex属性，来控制子盒子的位置和排列方式。

## 3. 父项设置

### 3.1 属性 

* flex-direction：设置主轴的方向
* justify-content：设置主轴上的子元素排列方式
* flex-wrap：设置子元素是否换行；
* align-items：设置侧轴上的子元素排列方式（单行）
* align-content：设置侧轴上的子元素的排列方式（多行）
* flex-flow：复合属性，相当于同时设置了 flex-direction 和 flex-wrap

### 3.2 flex-direction 设置主轴的方向

* 在 flex 布局中，是分为主轴和侧轴两个方向，同样的叫法有 ：行和列、x 轴和y 轴；
* 默认主轴方向就是 x 轴方向，水平向右
* 默认侧轴方向就是 y 轴方向，水平向下

<img src="./images/1.jpg">

* 注意:主轴和侧轴是会变化的，就看 flex-direction 设置谁为主轴，剩下的就是侧轴。其中坐标系就是我们已经确认的那个坐标系，设置其中一个伪主轴，另外一个为侧轴。而我们的子元素是跟着主轴来排列的;

<img src="./images/2.jpg">


### 3.3 justify-content

* 只是设置主轴上元素的排列方式；

<img src="./images/3.jpg">

### 3.4 flex-wrap 设置是否换行

* 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，flex布局中默认是不换行的。
* nowrap 不换行；（当设置不换行的时候，子项目加起来的宽度超过父级的宽度时，宽度会被缩小）
* wrap 换行；（子项目加起来的宽度超过父级的宽度时，换行；）

### 3.5 align-items

* 该属性是控制子项在侧轴（默认是y轴）上的排列方式  在子项为单项（单行）的时候使用；
* flex-start 从头部开始
* flex-end 从尾部开始
* center 居中显示
* stretch 拉伸。
* 总结：其实就是在调整主轴线的位置和元素在侧轴上的对齐方式；

### 3.6 align-content

* 设置子项在侧轴上的排列方式 并且只能用于子项出现 换行 的情况（多行），也就我们设置了换行，这个属性的设置才有效，在单行下是没有效果的。

<img src="./images/4.jpg">

* 总结：align-items到align-content只是多了换行，就相当于在列的方向上，有几行子项，所以想下出现 space-around和 space-between 也是合理。

### 3.7 align-content 和 align-items区别

* align-items  适用于单行情况下， 只有 上对齐、下对齐、居中和 拉伸
* align-content 适应于换行（多行）的情况下（单行情况下无效）， 可以设置 上对齐、下对齐、居中、拉伸以及平均分配剩余空间等属性值。 
* 总结：就是单行找align-items  多行找 align-content；

### 3.8 flex-flow 

* 属性是 flex-direction 和 flex-wrap 属性的复合属性
```
flex-flow:row wrap;
```
### 3.9 通常步骤

> 1. 设置父级为flex布局；
> 2. 根据业务布局设置主轴方向；
> 3. 根据业务布局设置 是否要换行；
> 4. 根据业务布局设置 主轴上的子项的排布方式；
> 5. 根据业务布局设置 侧轴上的子项的排布方式（其实就是设置主轴在侧轴方向的上的排布）；


## 4. 子项设置

### 4.1 属性

* flex：子项目占的份数（没有设置宽度高度，分配的剩余空间）；
* align-self：控制子项，自己在侧轴的排列方式
* order：属性定义子项的排列顺序（前后顺序）

### 4.2 flex属性

* flex 属性定义子项目分配剩余空间，数值用flex来表示占多少份数。百分比就是分配剩余空间的百分比；

```css
.item {
    /* 默认值 0 */
    flex: <number>; 
}
```

### 4.3 align-self

* 控制子项自己在侧轴上的排列方式
* 该属性允许单个项目有与其他项目不一样的侧轴上对齐方式，可覆盖align-items 属性。
* 默认值为 auto，表示继承父元素的 align-items 属性，如果没有父元素，则等同于 stretch。

```css
span:nth-child(2) {
  /* 设置自己在侧轴上的排列方式 */
  align-self: flex-end;
}
```

### 4.4 order 

* 属性定义子项目的排列顺序，数值越小，排列越靠前，默认为0。可以设置为负数；注意和 z-index 不一样。

```css
.item {
    order: <number>;
}
```

## 5. 携程网首页案例制作

* 携程网链接：http://m.ctrip.com
* 1.技术选型

> 1. 方案：我们采取单独制作移动页面方案
> 2. 技术：布局采取flex布局

* 2.搭建相关文件夹

<img src="./images/5.jpg">

* 3.设置视口标签以及引入初始化样式

```html
<meta name="viewport" content="width=device-width, user-scalable=no,initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">

<link rel="stylesheet" href="css/normalize.css">
<link rel="stylesheet" href="css/index.css">
```

* 4.常用初始化样式

```css
body {
  max-width: 540px;
  min-width: 320px;
  margin: 0 auto;
  font: normal 14px/1.5 Tahoma,"Lucida Grande",Verdana,"Microsoft Yahei",STXihei,hei;
  color: #000;
  background: #f2f2f2;
  overflow-x: hidden;
  -webkit-tap-highlight-color: transparent;
}
```

* 5.模块名字划分(这个依据个人习惯)

<img src="./images/6.jpg">

* 6.flex布局注意：

> 1. 父级宽度和高度一般都不用设置，除非是特别指出，一般都是内部的子项目往起撑；
> 2. 设置子项为flex:1,子项会把父级在宽度和高度的剩余空间全部吃掉，然后自己设置margin: 7px 10px;会先吃一部分高度，接着再次设置高度，就是按照设置的来；弹性盒子竟然有点CSS3盒子模型的感觉；因为在flex:1上设置border等都是在分配的高度或者宽度上进行占有你的所占空间；

```css
.search_ipt {
  flex: 1;
  /* 这个真的很奇怪啊，没有设置宽的时候，margin先进行设置 */
  margin: 7px 10px;
  border: 1px solid #ccc;
  height: 26px;
  line-height: 24px;
  color: #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .2);
  padding-left: 30px;
  position: relative;
}
```
> 3. 做小导航的时候，习惯使用ul>li>a进行包裹，a也设置display:flex，上下这种布局，就直接设置内部子项高度即可，撑起来a，撑起来全部，不需要设置内部子项flex:1；
> 4. 使用伪元素进行填充时，形成块级元素后，靠margin进行居中定位，同时也把父级元素撑起来；
```css
.user {
  width: 44px;
  height: 44px;
  text-align: center;
  font-size: 12px;
  color: #2eaae0;
}

.user::before {
  content: "";
  display: block;
  width: 23px;
  height: 23px;
  background: url(../images/sprite.png) no-repeat -59px -194px;
  background-size: 104px auto;
  margin: 3px 10.5px -2px;
}
```
> 5. flex布局，最为核心的一点，找到一个父级元素的高度是怎么来的？是自己设置的？还是靠子项内的元素撑起来的；












 

