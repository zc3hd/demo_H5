# CSS3 3D transform-style

## 1.辅助知识

* transform-style：结合3d立方体案例理解，给父级盒子下面的子盒子是否开启3维立体环境;

## 1.代码知识

```html
  <div class="box">
      <div></div>
      <div></div>
  </div>
```

```css
  /* 1.在父级上设置视距*/
  body {
      perspective: 500px;
  }
  
  .box {
      position: relative;
      width: 200px;
      height: 200px;
      margin: 100px auto;

      /* 设置过度 */
      transition: all 2s;

      /* 只是让子元素保持3d立体空间环境
      这个要注意，不是加载body上；
       */
      transform-style: preserve-3d;
  }
  
  .box:hover {
      /* 绕着Y轴旋转60度 */
      transform: rotateY(60deg);
  }
  

  /* 父级盒子下的子盒子样式 */
  .box div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: pink;
  }
  
  /* 第二个子盒子绕着X轴正向转60 */
  .box div:last-child {
      background-color: purple;
      transform: rotateX(60deg);
  }
```

