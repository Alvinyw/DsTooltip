# easyTooltip: 鼠标移上去出现提示内容

## 工具参数和调用
‘‘‘javascript
$("#testId").easyTooltip({
	targetEleId: "testId",/*触发 tooltip 元素 ID*/
	xOffset: 10,/*tooltip 在 X 轴离鼠标的距离*/       
	yOffset: 10,/*tooltip 在 Y 轴离鼠标的距离*/
	tooltipDir: "top",/*tooltip 出现的方向*/
	tooltipId: "easyTooltip",/*tooltip 最外层元素的 ID*/
	tooltipClass: "easyTooltip",/*tooltip 最外层元素的 Class*/
	clickRemove: false,/*是否点击隐藏 tooltip*/
	content: "",/*设置 tooltip 的内容，内容里可以包含 html 标签元素*/
	existedContentId: ""/*将已有元素的内容作为 tooltip 的内容，若不为空，则将替换 content 所设置的内容*/
});
‘‘‘

## 工具调用示例

[easyTooltip]()
