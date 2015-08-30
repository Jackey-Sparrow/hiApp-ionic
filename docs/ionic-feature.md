# ionic-features
an introduction about ionic features

# 手势支持 Gestures andEvents

手势事件有：
```bash
on-hold on-tap on-double-tap on-touch on-release
on-drag on-drag-up on-drag-right on-drag-down on-drag-left
on-swipe on-swipe-up on-swipe-down on-swipe-left on-swipe-right
$ionicGesture
```
用法usage
 ```js
 <div class="scroll-content padding"
		on-swipe-up="onSwipeUp()"
		on-swipe-down="onSwipeDown()"
		on-swipe-left="onSwipeLeft()"
		on-swipe-right="onSwipeRight()">
		<p class="padding">按住鼠标快速划！</p>
		<i class="icon {{icon}}"></i>
	</div>
 ```

# 列 list
使用css class 的类 list包裹外层,使用item css class包裹里层，再配合使用ng-repeat遍历数据

 use the css class 'list' and 'item' and angular's 'ng-repeat'

 ```html
 <ul class="list">
	<li class="item" ng-repeat="item in items">{{item}}</li>
  </ul>
 ```

# 内容区 ion-content

 ion-content占据header和footer意外的剩余区域，当内容茶瓯过可视区域时，ion-content可以滚动去显示被隐藏的部分
 ```html
 <ion-content></ion-content>
 ```

# ion-scroll

 ion-scoll属性

 - direction 内容可以滚动的方向 x|y|xy,默认为y
 - zooming 支持涅拉缩放。允许值true|false

**note**在使用ion-scroll时，需要显式指定滚动框元素以及内容元素的大小（高度和宽度）

```html
<ion-scroll class="has-header" zooming="true" direction="xy" style="width: 500px; height: 500px">
		<div style="width: 5000px; height: 5000px; background: url('img/0021.png') repeat"></div>
	</ion-scroll>
```

# 拉动刷新 ion-refresher

可以为滚动容器ion-scroll / ion-content 增加拉动刷新pull to refresh的功能

```js
<ion-refresher></ion-refresher>
```
ion-refresher包含以下属性（the properties in ion-refresher）

- on-refresh 用户向下拉动足够的距离并且松开屏幕时，执行此表达式
- on-pulling 用户开始向下拉动时，执行此表达式
- pulling-text 用户向下拉动时，显示的文本
- pulling-icon 用户向下拉动时，显示的图标
- refreshing-icon 用户向下拉动并且松开后，显示的等待图标。推荐使用spinner属性，就是下面需要介绍的
- spinner 功能和refreshing-icon一样，只是它是基于SVG
- disable-pulling-rotation 禁止下拉图标旋转动画

**note** 刷新完毕之后，应当使用作用于的$broadcast()方法通知框架已经完成刷新
```js
$scope.$broadcast("scroll.refreshComplete");
```

用法usage

**html**
```html
<ion-content>
	<ion-refresher
		pulling-text="Pull to refresh..."
		on-refresh="doRefresh()">
	</ion-refresher>
	<ul class="list">
		<li class="item" ng-repeat="item in items">{{item}}</li>
	</ul>
</ion-content>
```

**js controller**
```js
$scope.doRefresh = function() {
		for(var i=0;i<10;i++,base++)
			$scope.items.unshift(["item ",base].join(""));
		// Stop the ion-refresher from spinning
		$scope.$broadcast("scroll.refreshComplete");
	};

```

# 滚动刷新 ion-infinite-scroll

使用ion-infinite-scroll指令可以为滚动ion-scroll或者ion-content增加滚动刷新功能

```js
<ion-infinite-scroll></ion-infinite-scroll>
```

ion-infinite-scroll 具有的属性

- on-infinite 滚动到底部时执行此表达式
- distance 可选。距离底部百分比，当距离底部超过此数值，执行on-infinite。默认为1%
- icon 可选。载入时显示的图标。默认为ion-load-d.推荐使用spinner代替icon属性
- spinner 可选。载入时的spinner。默认为ionSpinner
- immediate-check 可选。是否在载入时立即检查滚动框范围，以便触发ion-infinite事件
- ng-if 决定是否继续显示ion-infinite-scroll

 **note** 刷新完毕之后，应当使用作用于的$broadcast()方法通知框架已经完成刷新

用法usage

**html**

```html
<ion-content>
	<ul class="list">
		<li class="item"  ng-repeat="item in items">{{item}}</li>
	</ul>
	<ion-infinite-scroll on-infinite="load_more()">
	</ion-infinite-scroll>
	</ion-content>
```

**js**

```js
$scope.load_more = function(){
		$timeout(function(){
			for(var i=0;i<10;i++,base++)
				$scope.items.push(["item ",base].join(""));
			$scope.$broadcast("scroll.infiniteScrollComplete");
		},500);
	};
```


# $ionicScrollDelegate 滚动服务

可以使用服务$ionicScrollDelegate，通过脚本来控制滚动容器(ion-scroll|ion-content)

$ionicScrollDelegate属性

- resize() 重新计算容器的尺寸，当父元素大小变化时，应当调用此方法
- scrollTop([shouldAnimate]) 滚动到内容顶部。参数shouldAnimate参数是boolean:true|false.表示是否使用动画
- scrollBottom([shouldAnimate]) 滚动到内容底部。参数shouldAnimate参数是boolean:true|false.表示是否使用动画
- scrollTo(left,top,[shouldAnimate]) 滚动到指定位置。left|top分别表示x坐标和y坐标
- scrollBy(left,top,[shouldAnimate]) 滚动偏移量
- getScrollPosition() 读取当前试图位置。返回值是一个json对象，具有left和top属性。分别为x|y坐标


```html
<body ng-controller="ezCtrl">
	<ion-header-bar class="bar-positive">
		<h1 class="title">$ionicScrollDelegate</h1>
	</ion-header-bar>
	<ion-content>
		<ul class="list">
			<li class="item"  ng-repeat="item in items">{{item}}</li>
		</ul>
	</ion-content>
	<ion-footer-bar class="bar-positive">
		<a class="button" ng-click="gotop();">GO TOP!</a>
		<a class="button" ng-click="gobottom();">GO BOTTOM!</a>
	</ion-footer-bar>
</body>
```

```js
$scope.gotop = function(){
	$ionicScollDelegate.scrollTop(true);
}
$scope.gobottom = function(){
	$ionicScollDelegate.scrollBottom(true);
}

```

working....
