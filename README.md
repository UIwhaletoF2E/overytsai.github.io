The F2E 2022 Week1 v.1.0
=======

### 作品說明：
Week 1 - The F2E 活動網站設計
---------
採用邱仲德設計師製作的 UI設計稿 https://reurl.cc/ROOZK9，
經過評估後認為需要客製處理的 components 過多，本次尚未使用任何前端框架

### 資料夾說明
1. CSS: 內含字型資料夾，主要樣式、 CSS 動畫暫時都放置於 main.css，後續逐步更新會使用 SASS 撰寫
2. js： 主要執行的 GSAP 控制項及 RWD 選單相關的 DOM 都寫在 index.js

### 使用技術
1. jQuery: DOM 好朋友，再戰十年
2. GSAP： 根據視覺稿及動畫演示的說明，分別使用GSAP Timeline、Tween、ScrollTrigger等動畫
3. mousemove 事件：視覺稿有提及希望眼球可以跟著滑鼠移動轉動，由於動畫處理佔大多數時間，這部份會於v2.0實作
4. CSS Animation: 很多閃爍的部份、跑馬燈效果都使用 CSS 動畫

### 第三方服務
1. GSAP：捲動十載入動畫等互動幾乎倚賴 GSAP 完成
2. type.js：首頁 Banner 打字動畫效果由 type.js完成


