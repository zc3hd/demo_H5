# demo_001

# HTML5

## 语义化标签

* 语法：

```
<header></header>
<nav></nav>

<!-- 块级标签，大DIV -->
<section></section>
```

## 多媒体

### 音频

* 语法：

```
<!-- 页面执行的时候，从上到下一个一个执行，遇见哪个能用就用哪个 -->
<audio controls="controls">
    <source src="media/snow.mp3" type="audio/mpeg" />
    <source src="media/snow.ogg" type="audio/ogg" />
    <source src="media/snow.wav" type="audio/wav" />
        您的浏览器不支持播放声音（IE678）
</audio>
```

* audio标签属性：

| key      | val                                        |
| -------- | ------------------------------------------ |
| controls | 控件，各家浏览器的控件的样式不同           |
| loop     | 开启循环播放                               |
| autoplay | 自动播放（谷歌是不允许自动播放的，用户体验 |

* source标签属性：

| key  | val                                |
| ---- | ---------------------------------- |
| src  | 视频的文件地址                     |
| type | audio/mpeg   audio/ogg   audio/wav |

### 视频

* 语法：

```
<video muted="muted" loop="loop" poster="media/pig.jpg" controls>
    <source src="media/video.mp4" type="video/mp4" />
    <source src="media/video.ogg" type="video/ogg" />
    您的浏览器太low了，不支持播放此视频
</video>
```

* 属性：

```css
【video】
controls:控件
loop：是否开启循环播放
autoplay：自动播放 （谷歌浏览器禁用自动。IE没问题）
muted：是否静音播放。（muted=muted解决谷歌浏览器禁用自动播发，就是静音播发。）
poster：poster="media/pig.jpg"就是第一帧的画面，不自动播放的时候。
```

### 表单

```html
<form action="">
    <ul>
        <li>邮箱: <input type="email" /></li>
        <li>网址: <input type="url" /></li>
        <li>日期: <input type="date" /></li>
        <li>日期: <input type="time" /></li>
        <li>数量: <input type="number" /></li>
        <li>手机号码: <input type="tel" /></li>
        <li>搜索: <input type="search" /></li>
        <li>颜色: <input type="color" /></li>
        <li> <input type="submit" value="提交"></li>
    </ul>
</form>
```

### 表单属性

![](./asserts/5.jpg)

# CSS3

## 属性选择器

* 语法：`E[attr]`之间无空格，`[attr]`中括号内属性无引号。`E`为标签、类、ID都可以；

![](./asserts/6.jpg)

##  结构伪类选择器

* :nth-child(n) 找排位的子元素

```css
/* 进行偶数命中 */
ul li:nth-child(even) {
    background-color: pink;
}

/* 进行奇数命中 */
ul li:nth-child(odd) {
    background-color: hotpink;
}


ul li:nth-child(2n) { 0 2 4 6
    background-color: red;
} 

ul li:nth-child(2n+1) { 1 3 4 6 
 background-color: red;
} 【如果n从1开始，那么直接命中就是3】


ul li:nth-child(5n) { 0 5 10
    background-color: pink;
} 

ul li:nth-child(n+5) { 5 6 7 
    background-color: pink;
} 

ul li:nth-child(-n+5) {  5 4 3 2 1
    background-color: pink;
}【选择前面五个】
```

* :nth-of-type(n)  找同类型的第几个；

## 伪元素

* 语法：

```css
div::before {
    content: "";
}
```

* 行内元素
* 必须使用在双标签
* ::before:hover不生效；

## 2D

### 移动

* x, y：固定PX值，或者%，相对于自身宽高；

```
transform: translate(x, y)
```

### 旋转 rotate

```
transform: rotate(45deg);
```

### 缩放

```
transform:scale(2,3);
```

* 下面所有的子元素、文字、属性都会被跟着缩放；

### 中心点

* 语法：影响到旋转和缩放；

```css
/* 具体PX值*/
transform-origin:100px 100px;
/* 百分数*/
transform-origin:50% 50%;
/* 方位名词*/
transform-origin:left bottom;

/* 单个参数，第二个值默认为50%*/
transform-origin:0;
```

### 简写

* 语法：旋转在前面会改变初始轴向

```css
/* 旋转在前面 */
transform: rotate(90deg) translate(x,y) scale(x,y);
```

## 3D

### 移动

* 语法：Z方向只能设置PX值；

```
    /* 单独分开写 使用1*/
    transform: translateX(100px);
    transform: translateY(-100px);
    transform: translateY(100%);
    transform: translateZ(100px);
    
    /* 写在一起*/
    transform: translateX(100px) translateY(100px) translateZ(100px);

    /* 三个方向同时写的简写 使用2*/
    transform: translate3d(100px,100px,100px);
```

### 旋转

* 语法：

```css
transform: rotateX(45deg);

/* 1, 1, 0为空间向量坐标 x y z */
transform: rotate3d(1, 1, 0, 45deg);
```

* 左手
  * 左手的手拇指指向 某一 轴的正方向；
  * 其余手指的弯曲方向就是该元素 绕着 某一 轴旋转的方向 为顺时针正方向；
  * **想方便的观测到如何旋转，要把轴向指向你的眼睛。**

### 缩放

* 语法：Z方向没有缩放

```
/* 宽，高 缩放一倍，厚度放大两倍 */
transform: scale3d(1,1,2)

/* 宽 缩放 */
transform: scaleX(1);
/* 高 缩放 */
transform: scaleY(1);

/* 厚度 缩放？没有厚度 */
transform: scaleZ(1); 
```

### 视距

* 语法：透视感

```
perspective: 1000px;
```

* 位置：加在不同的位置，就以不同的观测角度进行观测；
  * body：统一视角
  * 父级：各个父亲的视角；
* 值：越小，透视感越强；

### 3D呈现

* 语法：给子元素开启3D权限

```
/* 设置在有子元素的父级上； */
/* 默认值：不开启*/
transform-style: flat;
/* 给子元素开启3D环境*/
transform-style: preserve-3d; 
```

* 位置：**必须加在亲生父亲上；**

## 动画

### 基本

* 语法：

```css
/* 1. 定义:*/帧
@keyframes dong_hua {
    /* 开始状态:*/
    from {
        transform: translateX(0px);
        background-color: red;
    }
    /* 结束状态 */
    to {
        transform: translateX(1000px);
        background-color: #222;
    }
}

div {
    /* 2. 调用:*/
    animation-name: move;
    
    /* 3. 时间:*/
    animation-duration: 3s;
}
```

### 序列

* 语法：

```css
@keyframes name {
    /* 开始状态:*/
    from {
    }
    /* 结束状态 */
    to {
    }
}

@keyframes name {
    /* 开始状态:*/
    0% {
    }
    
    50% {
    }
    75% {
    }
    /* 结束状态 */
    100% {
    }
}
```

### 属性

* animation-timing-function：动画 运动 速度曲线：速度快慢的体现；

```css
    /* 匀速  */
    animation-timing-function: linear;

    /* 慢-快-慢  默认值  */
    animation-timing-function: ease;

    /* 慢-快  */
    animation-timing-function: ease-in;

    /* 快-慢  */
    animation-timing-function: ease-out;

    /* 慢-快-慢  */
    animation-timing-function: ease-in-out;
```

* animation-timing-function：step(n)  分步实现；分帧图，两个节点，分帧图数的步骤；

* animation-delay：动画推迟多久执行；动画得等待。
* animation-iteration-count：播放循坏次数 1 2  infinite无限次 

- animation-direction：循环方向

```css
div{
    /*1 默认值 0-100 */
    animation-direction: normal;
    
    /*2 100-0 */
    animation-direction: reverse;
    
    /*3 0-100-0 */
    animation-direction: alternate;

    /*4 100-0-100 */
    animation-direction: alternate-reverse;
}
```

- animation-fill-mode：动画等待或者结束的状态

```css
div{
    /*1 动画结束后，元素样式停留在 100% 的样式 */
    animation-fill-mode: forwards;
    
    /*2 在延迟等待的时间内，元素样式停留在 0% 的样式 
    动画结束的时候，回到div本身的样式（回到起始状态）
    */
    animation-fill-mode: backwards;
    
    /*3 同时设置了 forwards和backwards两个属性值
    在动画等待时间，样式为元素样式停留在 0% 的样式，
    动画结束时，元素样式停留在 100% 的样式
     */
    animation-fill-mode: both;
}
```

- animation-play-state：暂停和播放，得配合hover类

```css
div{
    /*1 播放 */
    animation-play-state: running;
    /*2 暂停*/
    animation-play-state: paused;
}
```

* 简写：

```css
animation: name duration timing-function delay iteration-count direction fill-mode;

组动画
animation: name_1 5s linear,name_2 2s linear;
```

### 案例

* 几个动画节点？
* 节点设置如何？
* 动画属性有关？




