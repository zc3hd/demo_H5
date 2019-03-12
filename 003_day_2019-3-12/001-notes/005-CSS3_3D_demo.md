【综合demo1】两面转

```html
<div class="box">
    <div class="front">黑马程序员</div>
    <div class="back">pink老师这里等你</div>
</div>
```

```css
body {
    perspective: 400px;
}

.box {
    position: relative;
    width: 300px;
    height: 300px;
    margin: 100px auto;
    transition: all .4s;
    /* 让背面的紫色盒子保留立体空间 给父级添加的 */
    transform-style: preserve-3d;
}

.box:hover {
    transform: rotateY(180deg);
}

.front,
.back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 30px;
    color: #fff;
    text-align: center;
    line-height: 300px;
}

.front {
    background-color: pink;
    z-index: 1;
}

.back {
    background-color: purple;
    /* 像手机一样 背靠背 旋转 */
    transform: rotateY(180deg);
}
```

【综合demo2】四个面3D展示加动画；
```html    
<div class="box">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
</div>
```

```css
  body {
      perspective: 500px;

      /*perspective-origin:500px 500px;*/

  }
  
  .box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 100px auto;
      transition: all 2s;
      /* 让子元素保持3d立体空间环境 */
      transform-style: preserve-3d;
      
  }
  
  .box:hover {
      transform: rotateY(359deg);
  }
  
  .box div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #222;
      line-height: 200px;
      text-align: center;
      font-size: 40px;
      color: #fff;
      animation: div_2_ani 0.3s ease infinite alternate;
  }
  .box div:nth-child(1) {
      transform: translateZ(100px);
  }
  .box div:nth-child(2) {
      transform: translateX(100px) rotateY(90deg);
  }
  .box div:nth-child(3) {
      transform: rotateZ(180deg) translateZ(-100px);
  }
  .box div:nth-child(4) {
      transform: translateX(-100px) rotateY(270deg);
  }


  @keyframes div_2_ani{
      0%{
          background-color: red;
      }
      100%{
          background-color: #222;
      }
  }
```

【综合demo3】3D导航：这个案例的难点主要还是设置LI下面的盒子内的两个面的移动；
```html
<ul>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
    <li>
        <div class="box">
            <div class="front">黑马程序员</div>
            <div class="bottom">pink老师等你</div>
        </div>
    </li>
</ul>
```

```css
* {
    margin: 0;
    padding: 0;
}

ul {
    margin: 100px;

    /* 视距虽说是要放在父级的盒子，但是这里放在不同的父级的盒子上有不同的效果
      放在这里的话：就是整个下面所有的盒子都是依托在这个视距下
    */
    perspective: 500px;
}

ul li {
    float: left;
    margin: 0 5px;
    width: 120px;
    height: 35px;
    list-style: none;
    /* 放在这里的话，就是每个盒子都是自己的一个视距，相互之间没有影响 */
    /* perspective: 500px;*/
}

.box {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transition: all .4s;
}

.box:hover {
    transform: rotateX(90deg);
}

.front,
.bottom {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
}

.front {
    background-color: pink;
    z-index: 1;
    transform: translateZ(17.5px);
}

.bottom {
    background-color: purple;
    /* 这个x轴一定是负值 */
    /* 我们如果有移动 或者其他样式，一般情况先写我们的移动 再写旋转
    因为如果先写旋转的话，盒子自己默认的轴向其实都已经发生了变化，这个理解就好；
    */
    transform: translateY(17.5px) rotateX(-90deg);
}

```

【demo4】旋转木马：这个难点主要是理解 设置有移动 或者其他样式，先进行旋转，再进行移动的理解。感觉这样的业务场景下，还是这样的写法更容易理解；转动会改变本身坐标系的方向，因为绕着一个轴转，另外两个轴也会转动；

```html
<section>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
</section>
```

```css
body {
    perspective: 1000px;
}

section {
    position: relative;
    width: 300px;
    height: 200px;
    margin: 150px auto;
    transform-style: preserve-3d;
    /* 添加动画效果 */
    animation: rotate 10s linear infinite;
    background: url(media/pig.jpg) no-repeat;
}

section:hover {
    /* 鼠标放入section 停止动画 */
    animation-play-state: paused;
}

@keyframes rotate {
    0% {
        transform: rotateY(0);
    }
    100% {
        transform: rotateY(360deg);
    }
}

section div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(media/dog.jpg) no-repeat;
}

section div:nth-child(1) {
    transform: rotateY(0) translateZ(300px);
}

section div:nth-child(2) {
    /* 先旋转好了再 移动距离 */
    transform: rotateY(60deg) translateZ(300px);
}

section div:nth-child(3) {
    /* 先旋转好了再 移动距离 */
    transform: rotateY(120deg) translateZ(300px);
}

section div:nth-child(4) {
    /* 先旋转好了再 移动距离 */
    transform: rotateY(180deg) translateZ(300px);
}

section div:nth-child(5) {
    /* 先旋转好了再 移动距离 */
    transform: rotateY(240deg) translateZ(300px);
}

section div:nth-child(6) {
    /* 先旋转好了再 移动距离 */
    transform: rotateY(300deg) translateZ(300px);
}
```

