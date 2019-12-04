function FN() {
  var me = this;

  // 盒子计算倍数
  me.box_w_beishu = 2;
  me.box_h_beishu = 2;

  // rem 划分的份数
  me.fenshu = 10;

  // 档位
  me.dangW_arr = [320, 360, 375, 384, 400, 414, 424, 480, 540, 720, 750, ];

  // 1rem 最大值
  me.max_rem = me.dangW_arr[me.dangW_arr.length - 1] / me.fenshu;

  // 盒子的最大宽
  me.max_box_w = me.max_rem * me.box_w_beishu + 20;

}


FN.prototype = {
  // 
  init: function() {
    var me = this;


    // 档位初始
    me.dangW_init();

    me.dangW_ev()
  },
  // 数据初始化
  dangW_ev: function() {
    var me = this;

    $('#yes')
      .on('click', function() {
        // 份数
        me.fenshu = $('#ipt_fenshu').val() * 1;

        // 1rem 最大值 保证rem 显示宽度；
        me.max_rem = me.dangW_arr[me.dangW_arr.length - 1] / me.fenshu;

        // 盒子宽度方向的倍数
        me.box_w_beishu = $('#ipt_box_w').val() * 1 / me.max_rem;
        // 高度方向的倍数
        me.box_h_beishu = $('#ipt_box_h').val() * 1 / me.max_rem;

        // 盒子的最大宽
        me.max_box_w = me.max_rem * me.box_w_beishu + 20;


        // 档位初始
        me.dangW_init();
      });
  },
  // 档位初始化
  dangW_init: function() {
    var me = this;

    var str = '';
    $('#box').html(str);
    me.dangW_arr.forEach(ele => {
      str += `
      <div class="item" style="line-height: ${ele / me.fenshu * me.box_h_beishu+20}px;">
        <div class="info">范围：${ele}px<=w </div>

        <div class="info">1rem = ${Math.floor(ele / me.fenshu*100)/100}px </div>

        <div class="pic" style="width: ${me.max_rem+20}px;">
          <div style="width: ${ele / me.fenshu}px;height:${ele / me.fenshu}px;"></div>
        </div>

        <div class="pic target" style="width: ${me.max_box_w}px;">
          <div style="width: ${ele / me.fenshu * me.box_w_beishu}px;height:${ele / me.fenshu * me.box_h_beishu}px;line-height: ${ele / me.fenshu * me.box_h_beishu}px;">
            w:${me.box_w_beishu}rem  h:${me.box_h_beishu}rem
          </div>
        </div>

      </div>
      `;
    });
    $('#box').html(str);

  },
}



new FN().init();