# easyTooltip: 鼠标移上去出现提示内容

## 工具参数和调用
```javascript
$("#testId").easyTooltip({
	targetEleId: "testId",/*触发 tooltip 的元素 ID*/
	xOffset: 10,/*tooltip 在 X 轴离鼠标的距离*/       
	yOffset: 10,/*tooltip 在 Y 轴离鼠标的距离*/
	tooltipDir: "top",/*tooltip 出现的方向*/
	tooltipId: "easyTooltip",/*tooltip 最外层元素的 ID*/
	tooltipClass: "easyTooltip",/*tooltip 最外层元素的 Class*/
	clickRemove: false,/*是否点击隐藏 tooltip*/
	content: "",/*设置 tooltip 的内容，内容里可以包含 html 标签元素*/
	existedContentId: ""/*将已有元素的内容作为 tooltip 的内容，若不为空，则将替换 content 所设置的内容*/
});
```
**参数之间的关系说明：**
- 当 targetEleId 不为空时，tooltip 不会随鼠标的移动而移动；且 tooltip 会出现小三角；
- 当 existedContentId 为空时，tooltip 里的内容是 content，当 existedContentId 不为空时，不管 content 是否为空，tooltip 里的内容都是 existedContentId；
- tooltip 里小三角不是用伪元素画出来的，而是一个 class 为 arw 的 span 元素： **&lt;span class="arw">**
- tooltip 的央视代码如下：
  ```css
  position: absolute;
  display: none;
  padding: 10px 15px;
  background-color: #aaa;
  font-size: 14px;
  line-height: 24px;
  color: #000;
  opacity: 0.9;
  border-radius: 4px;
  ```
- 小三角 arw 的央视代码为：
  ```css
  display: inline-block;
  position: absolute;
  width: 10px;
  height: 10px;
  background-color: #aaa;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  ```

## 工具调用示例

[easyTooltip]()
