# hiApp-ionic
a hybrid app basic on ionic

all the UI and function will follow [hiApp(written by F7)](http://hi.dearb.me/)

#schedule

- login UI (done)
- translate (done)
- need a language service(done)
- localStorage (done)
- Tweet UI(done)
- add tweet UI(done)
- Contact UI
- Setting UI
- add tweet comment UI
- Tweet post(including photo upload)
- use gulp to Compression the code
- contacts search bar need to optimize
- performance optimize(including watchers / scope / digest time)
- cancel add tweet(hide $ionicModal), scroll position lost
- compress the code and upload to ionicview
- click photo and expand it
- ionic android (not ready)
- ionic ios(ready)
- plan to dump $ionicModal


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
