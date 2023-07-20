function Guide(){
    var Ten = document.getElementById("Ten").value;
    var email = document.getElementById("email").value;
    var Phone = document.getElementById("Phone").value;
    var Gender =document.getElementById("Gender").value;
    var Love = document.getElementById("Love").value;
    var Review =document.getElementById("Review").value;

    var bao="";
    if (Ten && email && Phone && Gender && Love && Review ) {
        
        
        
        bao+= "Chúc mừng bạn " + Ten +  " đã đăng ký thành công và là tân sinh viên năm 2099 của FPT Aptech";
        bao+= "Chúng tôi sẽ gửi đầy đủ thông tin cho bạn tại email " + email;
        bao+= "Mọi thông tin bổ sung chúng tôi sẽ liên lạc cho bạn tại số điện thoại " + Phone; 
            
        
       
    }


    document.getElementById("Thongbao").innerHTML = bao;
    return false;}
