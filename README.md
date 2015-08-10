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
- cancel add tweet, scroll position lost


#remark knowledge
- $ionicHistory.goBack() won't remember scroll position unless use css class"button" css='button'
- ion-infinite-scroll call twice issue: 1 try immediate-check="false" 2 ng-if="!endOfList && items && items.length > 0" 
  3 $ionicScrollDelegate.resize() [this works];
