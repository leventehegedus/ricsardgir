$(document).ready(function() {
  $(".tinder-card-container").on("swiperight", swipeRight);
  $(".tinder-card-container").on("swipeleft", swipeLeft);
//  $(".heart").on("click", swipeRight);
//  $('#heart2').on("click", swipeRightHeart);
//  $(".stop").on("click", swipeLeft);
//  $('#stop2').on("click", swipeLeftStop);
});

function swipeLeft(){
  $(this).addClass('rotate-right').delay(700).fadeOut(1);
  $('.tinder-card-container').find('.status').remove();
  $(this).append('<div class="status dislike">Kád!</div>');

  if ($(this).is(':last-child')) {
    $('.tinder-card-container:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.dislike').remove();

  } else {
    $(this).next().removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.dislike').remove();

  }
}

function swipeRight(){
  $(this).addClass('rotate-left').delay(500).fadeOut(1);
  $('.tinder-card-container').find('.status').remove();

  $(this).append('<div class="status like">Koala!</div>');
  if ($(this).is(':last-child')) {
    $('.tinder-card-container:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.like').remove();
  } else {
    $(this).next().removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.like').remove();
  }
}

/*
function swipeRightHeart(){
  let that = $('.tinder-card-container');
  $(that).addClass('rotate-left').delay(500).fadeOut(1);
  $('.tinder-card-container').find('.status').remove();

  $(that).append('<div class="status like">Koala!</div>');
  if ($(that).is(':last-child')) {
    $('.tinder-card-container:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.like').remove();
  } else {
    $(that).next().removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.like').remove();
  }
}

function swipeLeftStop(){
  let that = $('.tinder-card-container');
  $(that).addClass('rotate-right').delay(700).fadeOut(1);
  $('.tinder-card-container').find('.status').remove();
  $(that).append('<div class="status dislike">Kád!</div>');

  if ($(that).is(':last-child')) {
    $('.tinder-card-container:nth-child(1)').removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.dislike').remove();
  } else {
    $(that).next().removeClass('rotate-left rotate-right').fadeIn(500);
    $('.status.dislike').remove();
  }
}
*/
