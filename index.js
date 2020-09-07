$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function requestInvite() {
  var firstname = document.getElementById("first_name");
  var lastname = document.getElementById('last_name');
  var phone = document.getElementById('phone');
  var email = document.getElementById('your_email');

  var lst = ['reason1','reason2','reason3'];
  var reasons = [];
  for(var i=0;i<2;i++); {
   reasons.push(document.getElementById(lst[i]))
  }

  var body = " " + firstname+" "+lastname + " \n" + phone + "\n" + email;
  var subject = "Vision2030 Proposal " + firstname+" "+lastname;
  window.open('mailto:blangodd33@gmail.com?subject=subject&body=body');
}

function contact() {
  var fullname = document.getElementById("name");
  var email = document.getElementById('email');
  var purpose = document.getElementById('purpose');
  var message = document.getElementById('message');

  var body = " " + fullname + " \n" + email + " \n" + message;
  var subject = "Vision2030 "+ purpose + " " + fullname;
  window.open('mailto:blangodd33@gmail.com?subject=subject&body=body');
}