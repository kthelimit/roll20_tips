/* 원본 : 양천일염님의 smallchat_split.js https://github.com/kibkibe/roll20-api-scripts/tree/master/smallchat_split */
/* 이 코드는 양천일염님의 코드를 기반으로 만들어졌습니다. 대부분 양천일염님이 작업하셨고 저는 출력형식에만 조금 손을 댔습니다.*/
/* 배포를 허가해 주셔서 감사해요! */
/* (smallchat_twitter.js) 220913 코드 시작 */
on('ready', function() {
    if (!state.smallchatlog) state.smallchatlog = [];
    if (!state.smallchatonair) state.smallchatonair = [];
});
on("chat:message", function(msg)
{
if (msg.type == "api"){
    if (msg.content.indexOf("! ") === 0) {
        try {
        // option
        // 트윗 내역을 저장할 핸드아웃의 이름을 지정합니다.
        var logname = '(트위터)';
        // 실시간 트윗을 표시할 별도의 핸드아웃의 이름을 지정합니다.
        var onair_name = '(실시간 탐라)';
        // 실시간 트윗용 핸드아웃에서 최신순으로 몇개까지 채팅을 표시할지를 지정합니다.
        var onair_lines = 8;
        // 핸드아웃에 표시하는 채팅시각의 표준시간대를 지정합니다. 기본값은 KST(UTC+9)입니다.
        var timezone = 9;
  
        var ho = findObjs({ _type: 'handout', name:logname});
        var player = getObj('player',msg.playerid);
        
        var split;

        if (ho.length > 0) {
            ho = ho[0];
        } else {
            ho = createObj('handout', {
                notes: ' ',
                inplayerjournals: 'all',
                name: logname
            });
        }

       let content_str = msg.content.substring(2); 
       var res = content_str.match(/@\w+ /g);
       if (res) {
       for (var i=0;i<res.length;i++) {
        content_str = content_str.replace(res[i],"<span style='color:##58ACFA'>"+res[i]+"</span>");
       }
       }
var res_img = content_str.match(/\[.+\]\(http.+\)/g);
let img_str = "";
if (res_img) {
for (var i=0;i<res_img.length;i++) {
 content_str = content_str.replace(res_img[i],"");
 img_str += "<div style ='border-radius:15px;overflow:hidden;text-align:center;border:1px solid #C4CFD6;margin-top:10px;margin-left:60px;margin-right:10px;'><img src ='" 
 + res_img[i].replace(/\[.+\]\(/g,"").replace(")","") + "'></div>";
}
}
        var d = new Date();
        var tz = d.getTime() + (d.getTimezoneOffset() * 60000) + (timezone * 3600000);
        d.setTime(tz);
        var final_str = "<div width=70 style='border-radius:70%;overflow:hidden;valign:top;float:left;margin-right:10px'>"
                +"<img src='"+findCharacterWithName(msg.who).get('avatar')+"' width=50 height=50>" + "</div>"
                +"<div style='valign:top;'>"
                +"<span style='font-size:11pt'><b>"
                + msg.who + "</b>" + "</span>"
                + "<span style='color:#848484;font-size:10pt;'>" + " @"+player.get('_displayname') +" · "
                + d.getFullYear() + "년 " + (d.getMonth()+1) + "월 " + d.getDate() + "일 " + "</span>" 
                + "<div style='float:right;valign:top;'><img src='https://i.imgur.com/MONxPND.png'></div>" + "<br><div><span style='font-size:11pt;'>"
                + content_str
                +"</span><br><div style='clear:both;'>"
                + img_str
                +"<div style='margin-left:50px;float:left;width: 21%;'><img src='https://i.imgur.com/3n6ZKwZ.png'></div>"
                +"<div style='float:left; width: 21%;'><img src='https://i.imgur.com/Wt5bQ5S.png'></div>"
                +"<div style='float:left; width: 21%;'><img src='https://i.imgur.com/6mnK0lU.png'></div>"
                +"<div style='float:left;width: 21%;'><img src='https://i.imgur.com/WuZtI1V.png'></div>"
                +"</div>"+"<div style='border-bottom:1px solid #ebeef0;clear:both;'></div>";

            var oa = findObjs({ _type: 'handout', name:onair_name});
            if (oa.length > 0) {
                oa = oa[0];
            } else {
                oa = createObj('handout', {
                    notes: ' ',
                    inplayerjournals: 'all',
                    name: onair_name
                });
            }
            oa.get('notes',function(text) {
                var final_split = (text.length > 0 && text != 'null' ? text.split("<br><i></i>") : []);
                final_split.push(final_str);
                if (final_split.length > onair_lines) {
                    final_split.splice(0,1);
                }
                state.smallchatonair.push(final_split.join("<br><i></i>"));
                if (state.smallchatonair.length > 0) {
                    oa.set({notes: state.smallchatonair[0]});
                    state.smallchatonair.splice(0,1);
                }
            });
        
        ho.get('notes',function(text) {
            state.smallchatlog.push((text.length > 0 && text != 'null' ? text : "") + "<br><i></i>" + final_str);
            if (state.smallchatlog.length > 0) {
                ho.set({notes: state.smallchatlog[0]});
                state.smallchatlog.splice(0,1);
            }
        });
	} catch (error) {
        sendChat('error','/w GM '+error,null,{noarchive:true});
	}
    }
}
});
const findCharacterWithName = function(who) {
    let chat_cha = findObjs({ _type: 'character', name: who});
    return (chat_cha.length > 0) ? chat_cha[0] : null;
};
/* (smallchat_twitter.js) 220913 코드 종료 */