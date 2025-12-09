// 部署完成后在网址后面加上这个，获取自建节点和机场聚合节点，/?token=xxoo&tag=jichang
// 部署完成后在网址后面加上这个，只获取自建节点，/?token=xxoo

const mytoken = 'eee8caa5-038a-43e8-a20a-14b86c8d5bba'; //可以随便取，或者uuid生成，https://1024tools.com/uuid
const tgbottoken ='6501178601:AAHCFpVn9K_TWy0nuewm1homvqeFchg7oZk'; //可以为空，或者@BotFather中输入/start，/newbot，并关注机器人
const tgchatid ='1028572195'; //可以为空，或者@userinfobot中获取，/start

//自建节点
const MainData = `
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@shanqian.ssk123.cloudns.org:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#edgetunnel
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq01.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS01
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq02.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS02
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq03.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS03
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq04.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS04
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq05.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS05
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq06.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS06
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq07.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS07
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq08.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS08
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq09.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS09
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq10.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS10
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq11.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS11
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq12.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS12
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq13.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS13
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq14.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS14
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq15.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS15
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq16.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS16
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq17.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS17
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq18.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS18
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq19.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS19
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sq20.660085.xyz:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-CFIPauto-HTTPS20

vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@proxy.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS01
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@bestproxy.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS02
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ali.055500.xyz:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS03
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cdn-b100.xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS04
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cdn.shanggan.pp.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS05
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.shopify.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS06
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS07
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@fmkorea.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS08
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@gamer.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS09
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@bestcf.onecf.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS10
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.udacity.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS11
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@acsg3.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS12
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.okcupid.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS13
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cdn.anycast.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS14
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@shuuemura.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS15
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@acjp2.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS16
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS17
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.zsu.gov.ua:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS18
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.udemy.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS19
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.co.jp:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS20
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@tasteatlas.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS21
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@fbi.gov:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS22
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sabona.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS23
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sp.rweek.top:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS24
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.gov.se:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS25
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@edtunnel-dgp.pages.dev:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS26
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@email.lg.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS27
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.csgo.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS28
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@pixiv.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS29
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS30
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@listerine.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS31
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com.sg:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS32
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.glassdoor.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS33
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@digitaljournal.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS34
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.digitalocean.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS35
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@livescore.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS36
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cfip.xxxxxxxx.tk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS37
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@acquisition.genesis.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS38
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.4chan.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS39
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cdn.aisere.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS40
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.boba88slot.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS41
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.baipiao.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS42
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@segwangmall.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS43
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@log.bpminecraft.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS44
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@xn--b6gac.eu.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS45
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@suwhc.or.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS46
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@tipu.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS47
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.d-555.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS48
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@comicabc.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS49
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.iakeys.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS50
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@game.freespacefest.hk:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS51
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@bachelorstudies.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS52
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@themomstory.co.kr:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS53
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@opencart.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS54
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@acsg.cloudflarest.link:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS55
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@toy-people.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS56
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@steamdb.info:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS57
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@icook.tw:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS58
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@tcafe2a.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS59
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@silkbook.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS60
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@russia.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS61
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.whoer.net:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS62
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.whatismyip.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS63
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@singapore.com:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS64
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@dnschecker.org:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS65
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.gco.gov.qa:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS66
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ip.sb:443?encryption=none&security=tls&sni=shanqian.ssk123.cloudns.org&fp=random&type=ws&host=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS67
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sp.rweek.top:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS68
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@icook.hk:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS69
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cdn-b100.xn--b6gac.eu.org:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS70
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@time.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS71
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ns5.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS72
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.udacity.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS73
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.epik.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS74
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@visa.cn:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS75
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@visa.com.tw:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS76
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@gamer.com.tw:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS77
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.epicgames.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS78
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@hcaptcha-assets.ecosec.on.epicgames.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS79
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@radar.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS80
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@staging.cloudflare.tv.cdn.cloudflare.net:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS81
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cf-imgs.hcaptcha.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS82
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cloudflare.tv:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS83
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.spaceship.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS84
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@shopify.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS85
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@cloudflare.tv.cdn.cloudflare.net:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS86
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@live.cloudflare.tv.cdn.cloudflare.net:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS87
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.cloudflare.tv.cdn.cloudflare.net:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS88
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@performance.radar.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS89
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@blog.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS90
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com.hk:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS91
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@staging.cloudflare.tv:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS92
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@sso.cloudflare.dev:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS93
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.adultpayperview.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS94
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@dreamsofspanking.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS95
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@isbgpsafeyet.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS96
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.namesilo.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS97
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@gur.gov.ua:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS98
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@log.bpminecraft.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS99
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.fortnite.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS100
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@caribbean.visa.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS101
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@discord.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS102
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@one.dash.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS103
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@pages.dev:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS104
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@qa.visamiddleeast.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS105
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@gates.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS106
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.gov.ua:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS107
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@privacypass.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS108
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@xn--b6gac.eu.org:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS109
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@arena.lmsys.org:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS110
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ppc.land:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS111
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.iakeys.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS112
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@edtunnel-dgp.pages.dev:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS113
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.geolocation.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS114
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.ipget.net:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS115
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.visa.com.sg:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS116
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ns.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS117
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@abuse.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS118
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@www.d-555.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS119
vless://cd64c60d-f627-45c6-2ae5-f1884c26f868@ns7.cloudflare.com:443?security=tls&type=ws&host=shanqian.ssk123.cloudns.org&sni=shanqian.ssk123.cloudns.org&path=%2F&encryption=none&allowInsecure=1#ssk-HTTPS120
`

//机场信息，可多个，也可为0
const urls = [
  '',
  ''
  // 添加更多订阅,支持base64
];

addEventListener('fetch', event => { event.respondWith(handleRequest(event.request)) })


async function handleRequest(request) {
    const url = new URL(request.url);
    const tag = url.searchParams.get('tag');
    const token = url.searchParams.get('token'); // Get the token from the URL

    if (token !== mytoken) {
      //await sendMessage("#Token错误信息", request.headers.get('CF-Connecting-IP'), `Invalid Token: ${token}`);
      return new Response('Invalid token???', { status: 403 });
    }
  
    let req_data = "";
    req_data += MainData
    if (tag) {
        switch (tag) {
          case 'jichang':
            const responses = await Promise.all(urls.map(url => fetch(url)));
    
            for (const response of responses) {
              if (response.ok) {
                const content = await response.text();
                req_data += atob(content) + '\n';
              }
            }
            
            break;
    
          default:
            
            break;
      }
    } 
  
    await sendMessage("#访问信息", request.headers.get('CF-Connecting-IP'), `Tag: ${tag}`);
    //修复中文错误
    const utf8Encoder = new TextEncoder();
    const encodedData = utf8Encoder.encode(req_data);
    const base64Data = btoa(String.fromCharCode.apply(null, encodedData));
    return new Response(base64Data);
  }
  


// 代码参考：https://azhuge233.com/cloudflare-workers-%E8%BD%AC%E5%8F%91-telegram-bot-%E6%8E%A8%E9%80%81%E4%BF%A1%E6%81%AF/
async function sendMessage(type, ip, add_data = "") {
  const OPT = {
    BotToken: tgbottoken, // Telegram Bot API
    ChatID: tgchatid, // User 或者 ChatID，电报用户名
  }

  let msg = "";

  const response = await fetch(`http://ip-api.com/json/${ip}`);
  if (response.status == 200) { // 查询 IP 来源信息，使用方法参考：https://ip-api.com/docs/api:json
    const ipInfo = await response.json();
    msg = `${type}\nIP: ${ip}\nCountry: ${ipInfo.country}\nCity: ${ipInfo.city}\n${add_data}`;
  } else {
    msg = `${type}\nIP: ${ip}\n${add_data}`;
  }

  let url = "https://api.telegram.org/";
  url += "bot" + OPT.BotToken + "/sendMessage?";
  url += "chat_id=" + OPT.ChatID + "&";
  url += "text=" + encodeURIComponent(msg);

  return fetch(url, {
    method: 'get',
    headers: {
      'Accept': 'text/html,application/xhtml+xml,application/xml;',
      'Accept-Encoding': 'gzip, deflate, br',
      'User-Agent': 'Mozilla/5.0 Chrome/90.0.4430.72'
    }
  });
}
