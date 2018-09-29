// const titles = [
//   'Alipay',
//   'Angular',
//   'Ant Design',
//   'Ant Design Pro',
//   'Bootstrap',
//   'React',
//   'Vue',
//   'Webpack',
// ];
// const avatars = [
//   'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
//   'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png', // Angular
//   'https://gw.alipayobjects.com/zos/rmsportal/dURIMkkrRFpPgTuzkwnB.png', // Ant Design
//   'https://gw.alipayobjects.com/zos/rmsportal/sfjbOqnsXXJgNCjCzDBL.png', // Ant Design Pro
//   'https://gw.alipayobjects.com/zos/rmsportal/siCrBXXhmvTQGWPNLBow.png', // Bootstrap
//   'https://gw.alipayobjects.com/zos/rmsportal/kZzEzemZyKLKFsojXItE.png', // React
//   'https://gw.alipayobjects.com/zos/rmsportal/ComBAopevLwENQdKWiIn.png', // Vue
//   'https://gw.alipayobjects.com/zos/rmsportal/nxkuOJlFJuAUhzlMTCEe.png', // Webpack
// ];

// const avatars2 = [
//   'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/cnrhVkzwxjPwAaCfPbdc.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/gaOngJwsRYRaVAuXXcmB.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/ubnKSIfAJTxIgXOKlciN.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/WhxKECPNujWoWEFNdnJE.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/jZUIxmJycoymBprLOUbT.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/psOgztMplJMGpVEqfcgF.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/ZpBqSxLxVEXfcUNoPKrz.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/laiEnJdGHVOhJrUShBaJ.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/UrQsqscbKEpNuJcvBZBu.png',
// ];

// const covers = [
//   'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png',
//   'https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png',
// ];
// const desc = [
//   '那是一种内在的东西， 他们到达不了，也无法触及的',
//   '希望是一个好东西，也许是最好的，好东西是不会消亡的',
//   '生命就像一盒巧克力，结果往往出人意料',
//   '城镇中有那么多的酒馆，她却偏偏走进了我的酒馆',
//   '那时候我只会想自己想要什么，从不想自己拥有什么',
// ];

const user = [
  '付小小',
  '曲丽丽',
  '林东东',
  '周星星',
  '吴加好',
  '朱偏右',
  '鱼酱',
  '乐哥',
  '谭小仪',
  '仲尼',
];

function fyglList(count) {
  const list = [];
  for (let i = 0; i < count; i += 1) {
    list.push({
      fwmc: `${(i % 4) + 1}0${(i % 5) + 1}`,
      zhxm: user[i % 10],
      szrq: new Date(new Date().getTime() - 1000 * 60 * 60 * 2 * i),
      dhhm: '13312345678',
    });
  }

  return list;
}

function getFyglList(req, res) {
  const params = req.query;

  const count = params.count * 1 || 20;

  const result = fyglList(count);
  return res.json(result);
}

export default {
  'GET /api/fygl_list': getFyglList,
};
