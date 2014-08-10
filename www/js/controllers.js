angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('TabCtrl', function($scope) {
  $scope.alert_right = function() {
    alert('blog: mpr0xy.com');
  }
})

.controller('SettingCtrl', function($scope, $http, $ionicSlideBoxDelegate) {
  var imgClass = function(){
    var imgs = window.document.getElementsByTagName('img');
    for(var i = 0; i < imgs.length; i++){
      if (imgs[i].width > imgs[i].height){
        imgs[i].className = 'img-box img-box-rotate';
      }
      else{
        imgs[i].className = 'img-box'
      }
    }
    console.dir(imgs);
  }

  if (!window.localStorage['urls']){
    $scope.urls = {
      T1: 'http://img0.ph.126.net/om-IEVP2F1TRXQ2vj0RUUg==/6619460221444107243.jpg',
      T2: 'http://img1.ph.126.net/kfDIv9CoGCl7lvWyL9A2iQ==/1461136604205246298.jpg',
      T3: 'http://img2.ph.126.net/Y4n-HwNssjW4CCHgQqmjBw==/4903575569376583895.jpg',
      T4: 'http://img1.ph.126.net/5pGahxCg6s5vo5A-FZ2KHA==/861876378788382802.jpg',
      T5: 'http://img0.ph.126.net/kRbzBftQ2YhEnHLvIy7Xzg==/6619256811792968202.jpg',
      T6: 'http://img2.ph.126.net/ej73pEtClbFaYJYrvvYzoA==/1872090070203215486.jpg',
      T0: 'http://img2.ph.126.net/fFmOD9NX2CRaDtnlD6oXPw==/6597418311843311201.jpg'
    }
    window.localStorage['urls'] = angular.toJson($scope.urls)
    window.localStorage['urlId'] = '8';
  }
  else{
    $scope.urls = angular.fromJson(window.localStorage['urls'])
  }
  BaseUrl_5 = 'http://115.29.37.205:8080/5/'
  BaseUrl_2 = 'http://115.29.37.205:8080/2/'
  $scope.flip = false;
  
  $scope.slideHasChanged = function(index) {
    console.log(index);
    if (index === 6){
      $http.get(BaseUrl_5 + window.localStorage['urlId']).success(function(data){
        for(var key in data){
          $scope.urls[key] = data[key]
          window.localStorage['urls'] = angular.toJson($scope.urls)
        }
      });
      window.localStorage['urlId'] = Number(window.localStorage['urlId']) + 5
      $scope.flip = true;
    }

    if (index === 1 && $scope.flip){
      $http.get(BaseUrl_2 + window.localStorage['urlId']).success(function(data){
        for(var key in data){
          $scope.urls[key] = data[key]
          window.localStorage['urls'] = angular.toJson($scope.urls)
        }
      });
      window.localStorage['urlId'] = Number(window.localStorage['urlId']) + 2
      $scope.flip = false; 
      
    }

    var img = window.document.getElementById('T' + String(index))
    if (img.width > img.height){
      img.className = 'img-box img-box-rotate';
    }
    else{
      img.className = 'img-box'
    }

    var preImg = window.document.getElementById('T' + String((index + 6) % 7))
    if (preImg){
      preImg.className = 'img-box'  
    }
    // T_index = (index + 1) % 3;
    // var T = document.getElementById('T' + String(T_index));
    // T.src = 'http://a.hiphotos.baidu.com/image/w%3D2048/sign=0572060839f33a879e6d071af2641038/55e736d12f2eb9384b1bffcad6628535e5dd6f90.jpg'
  };
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});


function ContentController($scope, $ionicSideMenuDelegate) {
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
}
