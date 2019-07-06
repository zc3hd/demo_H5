function FN() {
  var me = this;

  // 盒子的宽高
  me.box_w = 300;
  me.box_h = 200;


  // rem划分的份数
  me.rem_fenshu = 15;
  // 750 设计稿 一个rem大小
  me.rem_px = 50;


  // 宽高方向需要rem个
  me.rem_w_numb = me.box_w / me.rem_px;
  me.rem_h_numb = me.box_h / me.rem_px;

}


FN.prototype = {
  // 
  init: function() {
    var me = this;

    // 点击确认
    me._save()
  },
  // 点击确认
  _save: function() {
    var me = this;

    // 
    $('#sure')
      .on('click', function() {

        // 盒子 宽高的重新设置
        me._save_box_init();

        // rem实例盒子重新计算
        me._save_rem_init();

        // 盒子铺满rem盒子
        me._save_rem_pu();

        // *********************等比盒子
        // 盒子宽高的显示
        $('#box_db_w').val(me.box_w * 0.8);
        $('#box_db_h').val(me.box_h * 0.8);

      });

    $('#sure').click();

  },
  // ****************************************盒子 宽高的重新设置
  _save_box_init: function() {
    var me = this;
    me.box_w = $('#box_w').val() * 1;
    me.box_h = $('#box_h').val() * 1;


    me._save_box_init_done("#box");
    // ************************等比盒子
    me._save_box_init_done("#box_db");

  },
  // 盒子 宽高的重新设置 具体操作
  _save_box_init_done: function(id) {
    var me = this;
    $(id).css({
      width: me.box_w,
      height: me.box_h,
    });
  },
  // ******************************************1rem 的重新计算
  _save_rem_init: function() {
    var me = this;

    // 份数
    me.rem_fenshu = $('#rem_fenshu').val() * 1;
    // 一个rem大小
    me.rem_px = Math.floor(750 / me.rem_fenshu * 100) / 100;



    me._save_rem_init_done('rem', '', 1);
    // ********************************等比盒子
    me._save_rem_init_done('rem', 'db_', 0.8);


  },
  _save_rem_init_done: function(id, key, bl) {
    var me = this;
    // rem 宽高
    $(`#${id}_${key}w`).html(`${me.rem_px * bl}px`);
    $(`#${id}_${key}h`).html(`${me.rem_px * bl}px`);

    // rem 盒子 设置
    $(`#${id}_${key}box`)
      .attr('style', `
      width:${me.rem_px*bl}px;
      height:${me.rem_px*bl}px;
      transform: translate(-${me.rem_px*bl + 10}px,-50%);
      `);
  },

  // ***********************************************1rem 铺设全部盒子
  _save_rem_pu: function() {
    var me = this;

    // 宽高方向需要rem个
    me.rem_w_numb = me.box_w / me.rem_px;
    me.rem_h_numb = me.box_h / me.rem_px;

    // rem 标识
    $('#rem_w_show').html(me.rem_w_numb + 'rem');
    $('#rem_h_show').html(me.rem_h_numb + 'rem');

    // *****************************等比盒子
    // rem 等比 标识
    $('#rem_db_w_show').html(me.rem_w_numb + 'rem');
    $('#rem_db_h_show').html(me.rem_h_numb + 'rem');



    // 整个文字
    var str = '';
    $('#rem_pu').html(str);
    $('#rem_db_pu').html(str);


    // *********************************************一行
    // 每个元素
    var _item_str = '';
    // 每行的整数个，往上加1
    var row_item_numb = parseInt(me.rem_w_numb) + 1;
    // 每行元素的渲染
    for (let index_row = 0; index_row < row_item_numb; index_row++) {
      _item_str += `
      <div class="rem" style='
        width:${me.rem_px - 2}px;
        height:${me.rem_px - 2}px;
      '></div>`;
    }

    // 一行的文字 
    var one_row_str = `
    <div class="row">
      ${_item_str}
    </div>`;

    // *********************************************几行
    // 每行的整数个，往上加1
    var row_numb = parseInt(me.rem_h_numb) + 1;
    // 多行元素的渲染
    for (let jndex_row = 0; jndex_row < row_numb; jndex_row++) {
      str += one_row_str;
    }




    $('#rem_pu').html(str);
    $('#rem_db_pu').html(str);

  },



}



new FN().init();