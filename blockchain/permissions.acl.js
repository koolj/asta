/*
 * Licensed under TesterPRO® license, all rights reserved © 2019.
 * Created by KoolJ, aka koolj@testerpro.org.
 * Feb 8, 2019.
 */

rule R001_quyenQuantri {
    description: "Quyen quan tri he thong"
    participant: "bnsc.Quantri"
    operation: ALL
    resource: "bnsc.**"
    action: ALLOW
}
rule R001_quyenQuantri1 {
  description: "System ACL to permit all access"
  participant: "org.hyperledger.composer.system.NetworkAdmin#admin"
  operation: ALL
  resource: "bnsc.**"
  action: ALLOW
}



rule R002_quyenTruongTochuc {
    description: "Can bo to chuc"
    participant(t): "bnsc.Truongtochuc"
    operation: READ, CREATE, UPDATE
    resource(c): "bnsc.**"
    condition: (c.MasoTruongtochuc.getIdentifier() == t.getIdentifier())
    action: ALLOW
}


rule R003_quyenCanboTochuc {
  description: "Can bo to chuc"
  participant(t): "bnsc.Canbotochuc"
  operation: READ, CREATE, UPDATE
  resource(c): "bnsc.**"
  condition: (c.MasoCanbotochuc.getIdentifier() == t.getIdentifier())
  action: ALLOW
}
rule R003_quyenCanboTochuc1 {
  description: "Can bo to chuc"
  participant(t): "bnsc.Canbotochuc"
  operation: CREATE, UPDATE
  resource(c): "bnsc.Congdan"
  condition: (c.MasoCanbotochuc.getIdentifier() == t.getIdentifier())
  action: DENY
}

rule R003_quyenCanboTochuc5 {
  description: "Can bo to chuc"
  participant(t): "bnsc.Canbotochuc"
  operation: CREATE, UPDATE
  resource(c): "bnsc.Thamgiaphuongtien"
  condition: (c.MasoCanbotochuc.getIdentifier() == t.getIdentifier())
  action: DENY
}


rule R004_quyenViewer {
    description: "Cong dan binh thuong"
    participant: "bnsc.Viewer"
    operation: READ
    resource: "bnsc.**"
    action: ALLOW
}
rule R004_quyenViewer1 {
    description: "Cong dan binh thuong"
    participant: "bnsc.Viewer"
    operation: READ
    resource: "bnsc.Congdan"
    action: DENY
}
rule R004_quyenViewer2 {
    description: "Cong dan binh thuong"
    participant: "bnsc.Viewer"
    operation: READ
    resource: "bnsc.Quanhecanhan"
    action: DENY
}


rule SystemACL {
  description: "System ACL to permit all network admin access"
  participant: "org.hyperledger.composer.system.NetworkAdmin#admin"
  operation: ALL
  resource: "org.hyperledger.composer.system.**"
  action: ALLOW
}
rule SystemACL1 {
  description: "System ACL to permit all access"
  participant: "org.hyperledger.composer.system.NetworkAdmin"
  operation: ALL
  resource: "org.hyperledger.composer.system.**"
  action: ALLOW
}
rule SystemACL2 {
  description: "System ACL to permit all access"
  participant: "ANY"
  operation: ALL
  resource: "org.hyperledger.composer.system.**"
  action: ALLOW
}
