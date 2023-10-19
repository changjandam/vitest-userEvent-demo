# testing 筆記：user-event 多次觸發

## 1. 問題描述

使用`label`标签包裹`input`标签，使用`userEvent.click`触发`label`标签，会触发两次`click`事件。

## 2. 問題重現

如`App.tsx`。

## 3. 解決方案

修改測試環境，從`happy-dom`改為`jsdom`。


看線上課程時老師說用`happy-dom`可能速度比較快，所以我就用`happy-dom`，
結果上班時遇到這個問題，只能先繞過但不知道解決辦法，
回家後準備到react-testing-library的github上提問，
但用jest環境時沒有發生問題，開始往測試環境找原因，
多次修改測試環境後，發現改成`jsdom`就沒問題了。
因此推測是`happy-dom`的問題，但要找出原因還需要更多時間。