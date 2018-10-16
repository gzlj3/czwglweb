﻿DROP TABLE  IF EXISTS `house`;
CREATE TABLE `house` (
  `houseid` varchar(32) NOT NULL COMMENT '房屋ID',
  `yyhid` varchar(32) NOT NULL COMMENT '云用户ID',
  `fwmc` varchar(20) NOT NULL COMMENT '房屋名称',
  `zhxm` varchar(50) DEFAULT NULL COMMENT '租户姓名',
  `sfzh` varchar(18) DEFAULT NULL COMMENT '身份证号',
  `dhhm` varchar(50) DEFAULT NULL COMMENT '电话号码',
  `czje` int(11) DEFAULT NULL COMMENT '出租金额',
  `yj` int(11) DEFAULT NULL COMMENT '押金',
  `htrqq` date DEFAULT NULL COMMENT '合同日期起',
  `htrqz` date DEFAULT NULL COMMENT '合同日期止',
  `szrq` date DEFAULT NULL COMMENT '下次收租日期',
  `dqsds` int(11) DEFAULT NULL COMMENT '电起始读数',
  `sqsds` int(11) DEFAULT NULL COMMENT '水起始读数',
  `dfdj` decimal(5,2) DEFAULT NULL COMMENT '电费单价',
  `sfdj` decimal(5,2) DEFAULT NULL COMMENT '水费单价',
  `wlf` int(11) DEFAULT NULL COMMENT '网络费',
  `glf` int(11) DEFAULT NULL COMMENT '管理费',
  `ljf` int(11) DEFAULT NULL COMMENT '垃圾费',
  `qtf` int(11) DEFAULT NULL COMMENT '其它费',
  `bz` varchar(500) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`houseid`),
  UNIQUE KEY `ind_fwmc` (`yyhid`,`fwmc`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

DROP TABLE  IF EXISTS `housefy`;
CREATE TABLE `housefy` (
  `housefyid` varchar(32) NOT NULL COMMENT '房屋费用表ID',
  `houseid` varchar(32) NOT NULL COMMENT '房屋ID',
  `fwmc` varchar(20) NOT NULL COMMENT '房屋名称',
  `zhxm` varchar(50) DEFAULT NULL COMMENT '租户姓名',
  `rq1` date DEFAULT NULL COMMENT '收租日期起',
  `rq2` date DEFAULT NULL COMMENT '收租日期止',
  `dscds` int(11) DEFAULT NULL COMMENT '电上次读数',
  `dbcds` int(11) DEFAULT NULL COMMENT '电本次读数',
  `dgtds` int(11) DEFAULT NULL COMMENT '电公摊度数',
  `ddj` decimal(5,2) DEFAULT NULL COMMENT '电单价',
  `sscds` int(11) DEFAULT NULL COMMENT '水上次读数',
  `sbcds` int(11) DEFAULT NULL COMMENT '水本次读数',
  `sgtds` int(11) DEFAULT NULL COMMENT '水公摊度数',
  `sdj` decimal(5,2) DEFAULT NULL COMMENT '水单价',
  `wlf` int(11) DEFAULT NULL COMMENT '网络费',
  `glf` int(11) DEFAULT NULL COMMENT '管理费',
  `ljf` int(11) DEFAULT NULL COMMENT '垃圾费',
  `qtf` int(11) DEFAULT NULL COMMENT '其它费',
  `czje` int(11) DEFAULT NULL COMMENT '房租费',
  `sfsz` varchar(1) DEFAULT NULL COMMENT '是否收租(0:未收，1:已收)',
  `szrq` date DEFAULT NULL COMMENT '下次收租日期',
  `bz` varchar(100) DEFAULT NULL COMMENT '备注',
  PRIMARY KEY (`housefyid`),
  KEY `ind_houseid_rq12` (`houseid`,`rq1`,`rq2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `housesdb` (
  `houseid` varchar(32) NOT NULL COMMENT '房屋ID',
  `cbrq` date DEFAULT NULL COMMENT '抄表日期',
  `dbcds` int(11) DEFAULT NULL COMMENT '电本次读数',
  `sbcds` int(11) DEFAULT NULL COMMENT '水本次读数'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
