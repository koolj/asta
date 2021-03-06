/*
 * Licensed under TesterPRO® license, all rights reserved © 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */
namespace asta

/*
 * Events && actions-------------------------------------------------------------------------------------
 */
event AlertCanhbao {
  o String[] dulieuxuly
  o String[] dulieulichsu optional
  --> Canhbao Macanhbao optional
}
transaction Xemdulieu {
  o String Madulieu
}
transaction Guidulieu {
  o String Madulieu
  o String[] dulieuxuly
}


/*
 * Cac don vi to chuc tham gia-------------------------------------------------------------------------------------
 */
enum Loaitochuc {
  o Canhan
  o ThuocTW
  o NuocNgoai
  o Thuocdiaphuong
  o Cophan
}
enum Loaivanchuyen {
  o Duongbo
  o Duongthuy
  o Duonghangkhong
}
asset Trangthaihoatdong identified by Matrangthaihoatdong {
  o String Matrangthaihoatdong
  o String Ynghiatrangthaihoatdong optional
}
asset Gioitinh identified by Magioitinh {
  o String Magioitinh
  o String Ynghiagioitinh optional
}
asset Dialyhanhchinh identified by Madonvihanhchinh {
  o Integer Madonvihanhchinh
  o String Chitietdonvihanhchinh optional
}
asset Codezone identified by Macodezone {
  o String Macodezone
  o String Chitietcodezone optional
}
asset Diachi identified by Madiachi {
  o String Madiachi
  o String Chitiet  optional
  --> Dialyhanhchinh Matinhthanhpho  optional
  --> Dialyhanhchinh Maquanhuyen  optional
  --> Dialyhanhchinh Maxaphuong  optional
  --> Quocgia Tenquocgia  optional
  --> Codezone Macodezone optional
  --> Truongtochuc MasoTruongtochuc optional
}
asset Quocgia identified by Maquocgia {
  o String Maquocgia
  o String Ynghiaquocgia optional
}
asset Loaicanhbao {
  o String Maloaicanhbao
  o String Sohieu optional
  o String Mucdo optional
  o String Motamucdo optional
}
asset LoaiRuoubia {
  o String MaloaiRuoubia
  o String Sohieu optional
  o String Mucdo optional
  o String Motamucdo optional
}
asset LoaiChatkichthich {
  o String MaloaiChatkichthich
  o String Sohieu optional
  o String Mucdo optional
  o String Motamucdo optional
}
asset LoaiThaido {
  o String MaloaiThaido
  o String Sohieu optional
  o String Mucdo optional
  o String Motamucdo optional
}
asset LoaiTocdo {
  o String MaloaiTocdo
  o String Sohieu optional
  o String Mucdo optional
  o String Motamucdo optional
}
asset Canhbao identified by Macanhbao {
  o String Macanhbao
  --> Loaicanhbao Sohieucanhbao optional
  o String Noidungcanhbao optional
  o String Urlimg optional
  o String Motacanhbao optional
}
asset Hoatdongcanhangiaothong identified by Macanhangiaothong {
  o String Macanhangiaothong
  --> LoaiRuoubia ActRuoubia optional
  --> LoaiTocdo ActTocdo optional
  --> LoaiChatkichthich ActChatkichthich optional
  --> LoaiThaido ActThaido optional
  o String Lolat optional
  o String Lolong optional
  o String REChash optional
  o String IMGhash optional
  --> Congdan CCCD
}
asset Tieuchuancanhangiaothong identified by Matieuchuancanhangiaothong {
  o String Matieuchuancanhangiaothong
  o String MotatieuchuanCNGT optional
  --> LoaiRuoubia ActRuoubia optional
  --> LoaiTocdo ActTocdo optional
  --> LoaiChatkichthich ActChatkichthich optional
  --> LoaiThaido ActThaido optional
  o String REChash optional
  o String IMGhash optional
  --> Canhbao Macanhbao optional
}
asset Tieuchuanhoatdongphuongtien identified by Matieuchuanphuongtien {
  o String Matieuchuanphuongtien
  o String MotatieuchuanPT optional
  o String Lolat optional
  o String Lolong optional
  o String AcceX optional
  o String AcceY optional
  o String AcceZ optional
  o String GyX optional
  o String GyY optional
  o String GyZ optional
  o String GraX optional
  o String Gray optional
  o String Graz optional
  o String BahPA optional
  o String RoX optional
  o String RoY optional
  o String RoZ optional
  o String REChash optional
  --> Canhbao Macanhbao optional
}
asset Tieuchuanhoatdongcamera identified by Matieuchuancamera {
  o String Matieuchuancamera
  o String MotatieuchuanCAM optional
  o String Lolat optional
  o String Lolong optional
  o String Temp optional
  o String Humi optional
  o String Rainrate optional
  o String Windrate optional
  o String LandshakeVelo optional
  o String LandshakeFreq optional
  o String IMGdata optional
  --> Canhbao Macanhbao optional
}
asset Giaychungnhan identified by Magiaychungnhan {
  o String Magiaychungnhan
  o String Sohieugiaychungnhan
  o String Chitietgiaychungnhan  optional
  o String Urlgiaychungnhan  optional
  o String Urlimg optional
  o DateTime Ngaytaogiaychungnhan  optional
  o String Noicapgiaychungnhan  optional
  --> Truongtochuc MasoTruongtochuc
}

asset Phuongtienvanchuyen identified by Maphuongtienvanchuyen{
  o String Maphuongtienvanchuyen
  o String Tenphuongtienvanchuyen
  o String Bienkiemsoat  optional
  o String Sodangky optional
  o String Ngaydangky optional
  o String Trongluongxe optional
  o String Taitrong optional
  o String Email optional
  o String Urlimg optional
  o String Mota optional
  o String QRcode optional
  o String Barcode optional
  o Integer Dienthoaiphuongtienvanchuyen optional
  o Loaivanchuyen Kieuvanchuyen  optional
  --> Diachi Madiachi optional
  --> Giaychungnhan Magiaychungnhan  optional
  --> Trangthaihoatdong Matrangthaihoatdong  optional
  --> Codezone Macodezone optional
  --> Hosotochuc HosoTCid optional
  --> Truongtochuc MasoTruongtochuc optional
}
asset Thamgiaphuongtien identified by Mathamgiaphuongtien{
  o String Mathamgiaphuongtien
  --> Phuongtienvanchuyen MasoPhuongtien
  --> Canbotochuc MasoCanbotochuc
  --> Truongtochuc MasoTruongtochuc
}

asset Hoatdongphuongtien identified by Mahoatdongphuongtien{
  o String Mahoatdongphuongtien
  o String Lolat optional
  o String Lolong optional
  o String AcceX optional
  o String AcceY optional
  o String AcceZ optional
  o String GyX optional
  o String GyY optional
  o String GyZ optional
  o String GraX optional
  o String Gray optional
  o String Graz optional
  o String BahPA optional
  o String RoX optional
  o String RoY optional
  o String RoZ optional
  o String REChash optional
  o String Thoigiannhan optional
  --> Phuongtienvanchuyen Maphuongtienvanchuyen optional
  --> Canbotochuc MasoCanbotochuc optional
}
asset Hoatdongcamera identified by Mahoatdongcamera{
  o String Mahoatdongcamera
  o String Lolat optional
  o String Lolong optional
  o String Temp optional
  o String Humi optional
  o String Rainrate optional
  o String Windrate optional
  o String LandshakeVelo optional
  o String LandshakeFreq optional
  o String IMGhashfolder optional
  o String IMGhash optional
  o String Thoigiannhan optional
  --> Phuongtienvanchuyen Maphuongtienvanchuyen optional
  --> Canbotochuc MasoCanbotochuc optional
}

/*
 * Tai san quan ly -------------------------------------------------------------------------------------
 */
 asset Congdan identified by Macongdan {
     o String Macongdan
     o String Sodinhdanh  optional
     o String Sochungminhthunhandan  optional
     o String Hoten
     --> Gioitinh Gioitinhcanhan optional
     o DateTime Ngaythangnamsinh optional
     --> Diachi Thuongtru optional
     --> Quocgia Quoctich optional
     o Integer Sodienthoai optional
     o String Email optional
     o String Urlimg optional
     o String Mota optional
     o String QRcode optional
     o String Barcode optional
     o String FBuid optional
     o String TWuid optional
     o String ZLuid optional
     o String GOOuid optional
     --> Quanhecanhan Maquanhecanhan optional
     --> Truongtochuc MasoTruongtochuc optional
     --> Canbotochuc MasoCanbotochuc optional
 }
 asset Hosotochuc identified by HosoTCid {
     o String HosoTCid
     o String SoDangkytochuc optional
     --> Giaychungnhan Magiaychungnhan optional
     o String Tentochuc
     o String Quymo optional
     o String Dientich optional
     o Integer Soluonglaodong optional
     --> Diachi Diachitochuc optional
     --> Quocgia Quoctich optional
     o Integer Sodienthoai optional
     o String Email optional
     o String Urlimg optional
     o String Mota optional
     o String QRcode optional
     o String Barcode optional
     --> Truongtochuc MasoTruongtochuc optional
 }

 asset Quanhecanhan identified by Maquanhecanhan{
   o String Maquanhecanhan
   o String Tenquanhe optional
   --> Giong Macanhanquanhevoi optional
   o String Mota optional
}


/*
 * Doi tuong tham gia -------------------------------------------------------------------------------------
 */

participant Quantri identified by Maquantri {
    o String Maquantri
    --> Congdan CCCD
}
participant Truongtochuc identified by Matruongtochuc {
    o String Matruongtochuc
    --> Hosotochuc Thuoctochuc optional
    --> Congdan CCCD
}
participant Canbotochuc identified by Macanbotochuc {
    o String Macanbotochuc
    --> Hosotochuc Thuoctochuc optional
    --> Congdan CCCD
}
participant Viewer identified by Maviewer {
    o String Maviewer
    --> Congdan CCCD
}
