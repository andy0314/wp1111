# Web Programming HW#9

網址：https://wp1111-andy-frontend.onrender.com/

內容為hw6，使用的平台為render.com

步驟：

1. 註冊登入

2. 把專案的前端和後端丟進同一個git專案裡面

3. 選擇web service並選擇git repository後connect

4. 首先先deploy後端至網路上

4-1. 命名並選擇branch

4-2. 選擇root directory為backend

4-3. build command為yarn install，start command為yarn server/yarn start(depend on what you write in package.json)，此時相當於在root directory的backend執行這兩行，會先install package再開啟server

5. 此時會得到一個server的網址，複製後取代frontend axios的baseURL

6. 再使用同個專案deploy前端，僅有root directory改為frontend，即完成

優點：超方便

缺點：免錢方案非常慢，可能會需要等待一秒左右才會有資料