# 面試 Project : 透過 React 製作無限輪播圖

## Demo : https://dracarys55.github.io/Sliders/
### 需安裝 : create-react-app + react-slick 
<br>

## 功能要求:

打勾為已完成功能 <br> 
1.無限輪播 (圖1至4 再由圖4至1 重複循環)✅ <br> 
2.自動輪播 (當鼠標不再圖片時，自動播放，鼠標在圖片時，自動播放暫停)✅ <br>
3.輪播圖下方小點，自行控制顯示哪張圖片 ✅<br>
4.輪播圖可超連結至其他網頁✅ <br>

<br><br>

## 如何實現:
 
透過製作一個 Component 並引入 react-slick (Node Package) 來進行開發 <br> 
相關的功能實現都是透過 react-slick 的 settings 來進行設定 <br> 
可維護性應該不錯，要更改相關設定只需要到 settings 改數值即可 <br> 
圖片方面是放入一個陣列並給予相關屬性，在個別 <br> 
render 到圖片上，超連結部分使用在基礎HTML學到的 anchor tag 包住img 的作法 <br> 
並在圖片陣列上，加入href屬性。

<br><br>

## 開發過程:

在一開始開發時，對於 React 相關的概念幾乎是零，所以很快速的了解一遍基礎的觀念，並透過 <br>
React 官方的文件了解 Component 與JSX語法的概念，也參考的絕大部分網路上的 tutorial 最後 <br>
結合了維護性較高且自己能理解並實作出來的方式。<br>

<br><br>
### 感謝閱讀 ! 如有任何疑問，請不吝指教 



