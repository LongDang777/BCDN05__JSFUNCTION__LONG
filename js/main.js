// sơ đồ 3 khối

/**
 * khối1: khai báo biến và gán giá trị nhập vào từ form
 * 
 * khối2: 
 * b1: lấy giá trị từ form
 * 
 * b2:
 * ktr có bị điểm 0 ? => tớt
 * tongDiem >= điem chuẩn => đậu
 * tongDiem < diem chuẩn =? rớt 
 * 
 * 
 * b3: tổng điểm
 * 
 * khối3: xuất kết quả, ĐẬU or KHÔNG ĐẬU
 */



function tinhDiem(){
    var t = Number(document.getElementById('inpDiemChuan').value);
    var a = Number(document.getElementById('inpScore1').value);
    var b = Number(document.getElementById('inpScore2').value);
    var c = Number(document.getElementById('inpScore3').value);
    var k = Number(document.getElementById('aria').value);
    var u = Number(document.getElementById('user').value);

    var  o = a + b +c + k + u;
    if (a <=0 || b <=0 || c <=0) {
        document.getElementById('txtResult').innerHTML = ' Bạn đã rớt. do có môn nhỏ hơn hoặc bằng 0. tổng điểm : '+ o;
    }else {
        if ( o >= t) {
        document.getElementById('txtResult').innerHTML = ' Bạn đã đậu. tổng điểm : '+ o;
            
        }else {
        document.getElementById('txtResult').innerHTML = ' Bạn đã rớt. tổng điểm : '+ o;
    
        }
    }
}

// bài 2 tính tiền điện

const   giaDau = 500,
        gia50kw = 650,
        gia100kw = 850,
        gia150kw = 1100,
        giaCaoNhat = 1300;

    

function tinhTientheoKW(soKw,giaDau, gia50, gia100, gia150, giaCaoNhat) {
    if(0 < soKw && soKw <= 50){
        return  soKw * giaDau;
        
    }else if (50 < soKw && soKw <= 100){
        return  (50 * giaDau) + (soKw - 50)* gia50;
        
    }else if (100 < soKw && soKw <= 200){
        return  (50 * giaDau) + (50 * gia50)+ (soKw - 100)*gia100;
        
    }else if (200 < soKw && soKw <= 350){
        return  (50 * giaDau) + (50 * gia50)+ (100* gia100) + (soKw - 200) * gia150;
       
    }
    else if(350 < soKw){
        return  (50 * giaDau) + (50 * gia50)+ (100* gia100) + (150 * gia150) + (soKw -350)*giaCaoNhat;
        
    }else {
        alert('Hãy nhập lại số KW');
        return 0;
    }
}    

function tienDien(){
    var name = document.getElementById('inpHoTen').value;
    var soKw = Number(document.getElementById('inpKw').value);

     var total = tinhTientheoKW(soKw, giaDau, gia50kw, gia100kw, gia150kw, giaCaoNhat);
     var fomatTotal =  new Intl.NumberFormat("vn-VN").format(total);
    document.getElementById('txtTienDien').innerHTML = 'Họ và Tên: '+ name + '. Tiền Điện: '+ fomatTotal;

}
document.getElementById('btnTinh').onclick = tienDien;