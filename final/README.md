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

## 每位組員之負責項目
### 張佑亘
後端課程資料抓取、後端課程篩選、前端架構和搜尋篩選。

### 陳元彬
主要負責志願序拖曳表、投影片製作及前期統整與測試。

### 吳沛昀
主要負責課表的view，前端context和deploy。協助axios前後端溝通，使Docker container環境support puppeteer。
## 對課程的建議

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
