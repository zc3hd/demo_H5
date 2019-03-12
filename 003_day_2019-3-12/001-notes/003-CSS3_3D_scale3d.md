# CSS3 3D scale3d

## 1.辅助知识

* 回顾2D学习的scale知识，缩放我们唯一需要注意的地方就是缩放的中心点在哪；
transform-origin: left bottom;

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
  
  /* 3.单独沿着某个轴向进行缩放，和简写*/
  img:hover {
      /* 缩放宽度*/
      transform: scaleX(1);
      /* 缩放高度*/
      transform: scaleY(1);
      /* 缩放厚度*/
      transform: scaleZ(1);
      
      /* 简写*/
      transform: scale3d(1 ,1,2);
  }
```

