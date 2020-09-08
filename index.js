$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

function requestInvite() {
  var firstname = encodeURIComponent(document.getElementById("first_name").value);
  var lastname = encodeURIComponent(document.getElementById('last_name').value);
  var phone = encodeURIComponent(document.getElementById('phone').value);
  var email = encodeURIComponent(document.getElementById('your_email').value);
  var website = encodeURIComponent(document.getElementById('website').value);
  var subj = "Vision2030 Proposal-" + firstname +" "+lastname;
  var body = "phone: " + phone + "    website:" + website;

  var req = "mailto:ysf.nrabc@gmail.com"
             + "?cc=" + email
             + "&subject=" + subj
             + "&body=" + body
  ;
  window.location.href = req;
}

function contact() {
  var fullname = encodeURIComponent(document.getElementById("name").value);
  var email = encodeURIComponent(document.getElementById('email').value);
  var purpose = encodeURIComponent(document.getElementById('purpose').value);
  var message = encodeURIComponent(document.getElementById('message').value);
  var subj = "Vision2030-"+ purpose + "-" +fullname;
  var link = "mailto:blankgodd33@gmail.com"
             + "?cc=" + email
             + "&subject=" + subj
             + "&body=" + message
  ;
  window.location.href = link;
}