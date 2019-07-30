/*
 * Licensed under TesterPRO® license, all rights reserved © 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */

query qryTimkiemDonvibanle {
  description: "Tim kiem Congdan"
  statement:
      SELECT bnetvote.Congdan
       WHERE ((Sochungminhthunhandan == _$SoCMT) OR (Sodienthoai == _$Sodienthoai) OR (Email == _$Email))
}
query qryTimkiemPhuongtienvanchuyen {
  description: "Tim kiem Phuongtienvanchuyen"
  statement:
      SELECT bnetvote.Phuongtienvanchuyen
       WHERE ((Tenphuongtienvanchuyen == _$Tenphuongtienvanchuyen) OR (Dienthoaiphuongtienvanchuyen == _$Dienthoaiphuongtienvanchuyen))
}
