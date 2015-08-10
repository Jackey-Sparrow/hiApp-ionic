# hiApp-ionic
a hybrid app basic on ionic

all the UI and function will follow [hiApp](http://hi.dearb.me/)

#schedule

- login UI (done)
- translate (done)
- need a language service(done)
- localStorage (done)
- Tweet UI(done)
- Contact UI
- Setting UI
- Tweet post(including photo upload)
- use gulp to Compression the code
- contacts search bar need to optimize
- performance optimize(including watchers / scope / digest time)
- cancel add tweet(hide $ionicModal), scroll position lost


#remark knowledge
- $ionicHistory.goBack() won't remember scroll position unless use css class"button" css='button'
- ion-infinite-scroll call twice issue: 1 try immediate-check="false" 2 ng-if="!endOfList && items && items.length > 0" 
  3 $ionicScrollDelegate.resize() [this works];

# how to use gulp
- go to your directory and download the package

```

npm install

```

- configure you gulp configurations
  process : Run->Edit Configurations -> add a new configuration -> select gulp.js
  setting: Gulpfile: D:\Ionic\hiApp-ionic\hiAppGulp.js
           Node interpreter : C:\Program Files\nodejs\node.exe
           Gulp package : 