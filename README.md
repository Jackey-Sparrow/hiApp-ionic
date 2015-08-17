# hiApp-ionic

[![GitHub issues](https://img.shields.io/github/issues/Jackey-Sparrow/hiApp-ionic.svg?style=flat-square)](https://github.com/Jackey-Sparrow/hiApp-ionic/issues)
[![GitHub forks](https://img.shields.io/github/forks/Jackey-Sparrow/hiApp-ionic.svg?style=flat-square)](https://github.com/Jackey-Sparrow/hiApp-ionic/network)
[![GitHub stars](https://img.shields.io/github/stars/Jackey-Sparrow/hiApp-ionic.svg?style=flat-square)](https://github.com/Jackey-Sparrow/hiApp-ionic/stargazers)


a hybrid app basic on ionic

all the UI and function will follow [hiApp(written by F7)](http://hi.dearb.me/)

#schedule

- [x] login UI (done)
- [x] translate (done)
- [x] need a language service(done)
- [x] localStorage (done)
- [x] Tweet UI(done)
- [x] add tweet UI(done)
- [x] Contact UI(done)
- [x] contacts search bar need to optimize(done,change to height:50px;)
- [x] Setting UI
- [ ] when no more data, show message 
- [ ] add tweet comment UI
- [ ] Tweet post(including photo upload)
- [ ] use gulp to Compression the code
- [ ] use gulp-karma to run the test case
- [ ] performance optimize(including watchers / scope / digest time),should add the function at the beginning
- [ ] compress the code and upload to ionicview
- [ ] click photo and expand it
- [ ] ionic android (not ready)
- [ ] ionic ios(ready)
- [ ] make the small item to a component
- [ ] page num and total directive
- [ ] log out function

# issues

add to the github [issue](https://github.com/Jackey-Sparrow/hiApp-ionic/issues)

#remark knowledge
- $ionicHistory.goBack() won't remember scroll position unless use css class"button" css='button'
- ion-infinite-scroll call twice issue: 1 try immediate-check="false" 2 ng-if="!endOfList && items && items.length > 0" 
  3 $ionicScrollDelegate.resize() [this works];

# use gulp
- go to your directory and download the package

```

npm install

```

- configure you gulp configurations

  ##process :

  ```
  Run->Edit Configurations -> add a new configuration -> select gulp.js
  ```


  ##setting:


 ```
 Gulpfile: D:\Ionic\hiApp-ionic\hiAppGulp.js
 Node interpreter : C:\Program Files\nodejs\node.exe
 Gulp package : D:\Ionic\hiApp-ionic\node_modules\gulp
 ```
