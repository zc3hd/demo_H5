# CSS3 3D rotate3d

## 1.辅助知识

* 方向：和translate3D一样，既然是旋转，就要知道什么顺时针，什么是逆时针；
* rotate的选择只有一个方向，要知道它是围绕垂直屏幕的Z轴进行旋转的；正值就是顺时针；
* rotate3d旋转：3d旋转指可以让元素在3维平面内沿着 **x轴，y轴，z轴或者自定义轴**进行旋转  对于元素旋转的方向的判断 我们需要先学习一个**左手准则**
* 左手准则：1.左手的手拇指指向 x轴的正方向；2. 其余手指的弯曲方向就是该元素沿着x轴旋转的方向了；
* 我们站在垂直正向的X方向，发现：其实就是顺时针；


## 2.代码知识

```css
  /* 1.在父级上设置视距*/
  body {
      perspective: 300px;
  }
  
  /* 2.设置过度，以便观测*/
  img {
      display: block;
      margin: 100px auto;
      transition: all 1s;
  }
  
  /* 3.绕着X轴方向，顺时针旋转45度*/
  img:hover {
      transform: rotateX(45deg);
  }
```

其他轴向选择，自己感受下；
自定义轴向进行旋转：
```css
  /* 1.在父级上设置视距*/
  body {
      perspective: 300px;
  }
  
  /* 2.设置过度，以便观测*/
  img {
      display: block;
      margin: 100px auto;
      transition: all 1s;
  }
  
  /* 3.绕着自定义轴方向，顺时针旋转45度*/
  img:hover {
      transform: rotate3d(1, 1, 0, 45deg);
  }
```

如何确认自定义轴：1,1,0代表这个点在X轴上为1，Y轴上为1，Z轴的坐标是0，从原点出发，穿过这条线，方向就是原点到这个点的方向为正向，顺时针就是站在正向的角度，顺时针的方向；
```css
  img:hover {
      transform: rotate3d(1, 1, 0, 45deg);
  }
```

注意：只能绕着一个轴的方向进行旋转；



