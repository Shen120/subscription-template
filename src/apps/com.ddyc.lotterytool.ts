import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ddyc.lotterytool',
  name: '彩虹多多',
  groups: [
    {
      key: 0,
      name: '开屏广告-倒计时关闭',
      desc: '关闭开屏广告的倒计时进度条',
      rules: [
        {
          key: 0,
          name: '开屏广告-倒计时关闭',
          fastQuery: true,
          activityIds: ['.module.startup.StartupActivity'],
          matches: ["[vid='countTimeProgressView']"],
          action: 'click',
          actionDelay: 1000,
          snapshotUrls: ['https://i.gkd.li/i/23573036'],
        },
      ],
    },
    {
      key: 1,
      name: '应用更新弹窗',
      rules: [
        {
          key: 0,
          name: '应用更新弹窗',
          fastQuery: true,
          matches: [
            "[vid='versionchecklib_version_dialog_cancel'][text='下次更新']",
          ],
          snapshotUrls: ['https://i.gkd.li/i/23573041'],
          action: 'click',
        },
      ],
    },
    {
      key: 2,
      name: '首页推荐弹窗',
      rules: [
        {
          key: 0,
          name: '首页推荐弹窗',
          fastQuery: true,
          matches: ["[id='com.ddyc.lotterytool:id/pop_dismiss_btn']"],
          action: 'click',
          actionDelay: 800,
          snapshotUrls: ['https://i.gkd.li/i/23573044'],
        },
      ],
    },
    {
      key: 3,
      name: '分类详情页广告',
      rules: [
        {
          key: 0,
          name: '分类详情页广告',
          fastQuery: true,
          matches: [
            "[id='com.ddyc.lotterytool:id/iv_close']",
            "[id='com.ddyc.lotterytool:id/iv_close'][clickable=true]",
          ],
          action: 'click',
          snapshotUrls: ['https://i.gkd.li/i/23573046'],
        },
      ],
    },
    {
      key: 4,
      name: '推荐流广告',
      rules: [
        {
          key: 0,
          name: '推荐流广告',
          fastQuery: true,
          matches: [
            "[id='com.ddyc.lotterytool:id/iv_close']",
            "[id='com.ddyc.lotterytool:id/iv_close'][visibleToUser=true]",
          ],
          actionDelay: 800,
          snapshotUrls: ['https://i.gkd.li/i/23573054'],
        },
      ],
    },
  ],
});
