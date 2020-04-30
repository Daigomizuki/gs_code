$('.thumbnail').slick({
    infinite: true, //スライドのループ有効化
    arrows: false, //矢印非表示
    fade: true, //フェードの有効化
    draggable: false, //ドラッグ操作の無効化
    autoplay: true, //自動再生
    autoplaySpeed: 5000,
  });
  $('.thumbnail-thumb').slick({
    infinite: true, //スライドのループ有効化
    slidesToShow: 8, //表示するスライドの数
    focusOnSelect: true, //フォーカスの有効化
    asNavFor: '.thumbnail', //thumbnailクラスのナビゲーション
  });

  $(function(){
    var pos = 0;
    var header = $('header');
    
    $(window).on('global-nav', function(){
      if($(this).scrollTop() < pos || $(this).scrollTop() < 500){
        //上スクロール時の処理
        header.removeClass('hide');
      }else{
        //下スクロール時の処理
        header.addClass('hide');
      }
      pos = $(this).scrollTop();
    });
  });