# smallchat_twitter
![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_1.png)

Roll20에서 twitter 형태의 채팅을 할 수 있게 해주는 API 스크립트입니다.  
양천일염님의 smallchat_split.js https://github.com/kibkibe/roll20-api-scripts/tree/master/smallchat_split 를 기반으로 만들어졌습니다.    

## 각 파일에 대한 설명
셋 중 하나만 사용하시면 됩니다.  

**smallchat_twitter.js**   
핸드아웃으로만 트위터형 채팅이 출력됩니다.

**smallchat_twitter_onlychat.js**  
채팅창에만 트위터형 채팅이 출력됩니다.

**smallchat_twitter_both.js**  
핸드아웃과 채팅창 두곳에 트위터형 채팅이 출력됩니다.


## 사용방법
1. `사용하고 있는 캐릭터의 이미지`를 **트위터 프로필 이미지**로 사용하며 `캐릭터의 이름`을 **계정명**으로 사용합니다.<br> 계정 잠금을 표현하고 싶다면 🔒︎를 캐릭터 이름 뒤에 붙여넣어주세요.  
※ 캐릭터의 이미지를 정사각형으로 해야 동그랗게 나옵니다.


2. **트위터의 계정 id**는 `플레이어의 이름`을 가져옵니다. 플레이어의 이름란에 트위터 id를 입력하고 저장해주시면 됩니다.  

    ![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_2.png)  

3. 멘션을 하고 싶은 경우  `@(멘션을 하고 싶은 id) (하고 싶은 말)`을 적어주시면 됩니다.<br>단, 이 명령어는 맨 앞이어야하고 영어가 아니면 파랗게 변하지 않음에 주의해주세요.  

    ![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_3.png)  
 
 ![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_4.png)  

4. 이미지를 삽입하고 싶은 경우  `[아무말](이미지주소)`를 적어주시면 아래에 이미지가 출력됩니다.  
이미지를 어느 위치에 적었든 아래쪽에 출력됩니다.  

   ![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_5.png)  

![](https://raw.githubusercontent.com/kthelimit/roll20_tips/main/images/twitter_chat_6.png)  
