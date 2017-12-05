var height;
var onOff;
$('.btn-top').on('click', function() {
    windowScroll(0)
})
$('header nav a').eq(0).on('click', function() {
    height = getHeight($('.info'))
    windowScroll(height)
})
$('header nav a').eq(1).on('click', function() {
    height = getHeight($('.portfolio'))
    windowScroll(height)
})
$('header nav a').eq(2).on('click', function() {
    height = getHeight($('.skill'))
    windowScroll(height)
})
$('header nav a').eq(3).on('click', function() {
    height = getHeight($('.contact'))
    windowScroll(height)
})
$('header .iconfont').on('click', function() {
    if (!onOff) {
        $('header nav').slideDown();
        onOff = true;
    } else {
        $('header nav').slideUp();
        onOff = false;
    }
})
$('header a').on('touchstart',function(){
  $('header nav').slideUp();
})
$('section').on('touchstart',function(){
  $('header nav').slideUp();
})
$(window).on('scroll', function() {
    if ($(window).scrollTop() > 100) {
        $('header').addClass('active')
    } else {
        $('header').removeClass('active')
    }
    if ($(window).scrollTop() >=getHeight($('.portfolio'))-200){
      $('.portfolio .portfolio-item').addClass('active')
    } else {
      $('.portfolio .portfolio-item').removeClass('active')
    }
    if ($(window).scrollTop() >=getHeight($('.skill'))-200){
      $('.skill .skill-item').addClass('active')
    } else {
      $('.skill .skill-item').removeClass('active')
    }
    if ($(window).scrollTop() >=getHeight($('.contact'))-200){
      $('.contact .contact-item').addClass('active')
    } else {
      $('.contact .contact-item').removeClass('active')
    }
})
$('.contact .icon-wechat').on('click',function(e){
  $('.contact img').eq(0).toggleClass('active').siblings('img').removeClass('active');
  e.stopPropagation()
})
$('.contact .icon-QQ').on('click',function(e){
  $('.contact img').eq(1).toggleClass('active').siblings('img').removeClass('active');
  e.stopPropagation()
})
$('.contact ul').on('click',function(){
  $('.contact img').removeClass('active');
})
$('.contact .contact-item').on('mouseenter',function(){
  $(this).css('animation','keke 0.4s both')
}).on('mouseleave',function(){
  $(this).css('animation','coco 0.4s both')
})


function windowScroll(height) {
    $('html,body').delay(200).animate({
        scrollTop: height
    }, 800)
}

function getHeight($element) {
    return $element.offset().top
}
