# 網服專題開發紀錄
## localhost安裝
### .env
create .env file, insert MONGO_URL.
### command
(at root)
cd backend 
yarn install --freeze-lockfile
cd ../frontend
yarn install --freeze-lockfile
cd ..
yarn server
(wait until server log shows "insert (a number)")
yarn start

##本地執行

cd frontend
yarn init -y
yarn install
yarn start

cd backend
yarn init -y
yarn install
放入自己的.env
將MONGO_URL= 設成自己的
yarn server
開啟網頁
有帳號直接login，沒帳號要Sign Up 註冊

未登入時會顯示登入畫面，登入後可以用關鍵字及時間、開課系所等資訊搜尋課程並顯示到搜尋介面上，點選加入課程時，若使用者尚未加入該課程，可以將課程加入志願序的尾端，課表頁面會顯示該時間段中志願序排在最前面的課程，志願序清單中則可以支援拖動改變順序及刪除課程的功能，按下Save可以儲存志願序，離開志願序頁面時則會取消未儲存的志願序更動。

## 每位組員之負責項目
### 張佑亘
後端課程資料抓取、後端課程篩選、前端架構和搜尋篩選。

### 陳元彬
主要負責志願序拖曳表、投影片製作及前期統整與測試。

### 吳沛昀
主要負責課表的view，前端context和deploy。協助axios前後端溝通，使Docker container環境support puppeteer。
## 對課程的建議

## 心得

B10902021 張佑亘
這學期的課程是我第一次接觸到網路服務的技術，這次專案，我負責的部分主要有爬蟲以及後端課程搜尋的部分，要負責完成一個和上課所學內容幾乎不重疊的部分坦白說壓力很大，但這也使得我在專題製作的過程中學到了更多上課沒講的東西，雖然因為身為組長的我很缺乏和他人一起處理專題的經驗，導致專案完成進度控制得不太好，但我們最後還是在巨大的時間壓力之下完成一個完整的作品了，因此我想要感謝我的兩個組員，也謝謝這次的期末專題讓我得到了跟他人合作的寶貴經驗。
B10902045 吳沛昀
我這次沒有運用到重大的新技術，但在deploy和axios方面幾乎是重新學起來，比聽課時進步許多，能自己成功debug。很感謝兩位組員在我常常不在時撐起project的兩大骨幹爬蟲和draggable list! 合作專案是能受用許久的進步經驗。
B10902038 陳元彬 我這次負責Drag list ，原本以為是一個小部分，沒想到加Delete及記數等功能後便使困難度急遽攀升，除此之外，途中也接觸了不少 後端套件，使我對網路服務程式設計的學習更加完善。

## 12/28更新(by 張佑亘)

sidebar加入collapse功能
架設後端、前端HomePage暫放連線測試

## 12/27更新(by 張佑亘)

sidebar完成、加入collapse變數
searchbar工作中

## 12/26更新(by 張佑亘)

sidebar工作中

## 12/23更新(by 張佑亘)

已完成useContext及前端Router

## 12/22更新(by 張佑亘)

前端框架工作中

## 12/11更新(by 張佑亘)

### 已加入模組：

#### 前端

antd

axios

styled-components

react-beautiful-dnd

react-router-dom

#### 後端

express

nodemon

babel

dotenv

mongoose

python-shell
