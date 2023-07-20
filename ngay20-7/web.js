document.getElementById("1").addEventListener("submit", function(thong_bao) {
    thong_bao.preventDefault();

var name = document.getElementById("Ten").value;
var email = document.getElementById("email").value;
var phone = document.getElementById("Phone").value;

if (name && email && phone) {
    document.getElementById("Thongbao").innerHTML += "Chúc mừng bạn " + name +  " đã đăng ký thành công và là tân sinh viên năm 2099 của FPT Aptech";
    document.getElementById("Thongbao").innerHTML += "Chúng tôi sẽ gửi đầy đủ thông tin cho bạn tại email " + email;
    document.getElementById("Thongbao").innerHTML += "Mọi thông tin bổ sung chúng tôi sẽ liên lạc cho bạn tại số điện thoại " + phone; 
    document.getElementById("1").reset();
}
});
