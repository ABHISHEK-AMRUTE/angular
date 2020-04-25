var app = angular.module('plunker', ['ngTagsInput']);
var arr =[];
var real_services=[
  { text: "Lipid-Profile",id: 1 ,state:"off"},
  { text: "Liver-Function Test",id: 2 ,state:"off" },
  { text: "Complete-Hemogram",id: 3 ,state:"off" },
  { text: "Thyroid-Profile-Total",id: 4 ,state:"off" },
  { text: "Kidney-Function-Test",id: 5 ,state:"off" },
  { text: "Urine-Routine-&-Microscopy",id: 6 ,state:"off" },
  { text: "HbA1c",id: 7 ,state:"off" },
  { text: "Blood-Glucose-Fasting",id: 8 ,state:"off" }, {text: "Vitamin-B12-Cyanocobalamin",id: 9 ,state:"off" },{ text: "Vitamin-D-Total-25-Hydroxy",id: 10,state:"off"  },{ text: "HPlus-Healthy-2020-Package",id: 11,state:"off"},{ text: "Healthians-Full-Body-Checkup-with-Thyroid-and-CBC ", id: 12,state:"off"},{ text: "Basic-Screening-Package", id: 13,state:"off"},{ text: "Healthians-Basic-Health-Checkup", id: 14,state:"off"},{ text: "Healthy-Indian-Days-Special-Package", id: 15,state:"off"},{ text: "OnePlusOne-Extended-Package-1599", id: 16,state:"off"},{ text: "OnePlusOne-Be-Healthy-Package", id: 17,state:"off"},{ text: "STI-Detection-Package", id: 18,state:"off"},{ text: "Healthians-Low-Energy-checkup", id: 19,state:"off"}]

app.config(['$locationProvider', function ($locationProvider) {

    if (window.history && window.history.pushState) {
        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true,
            rewriteLinks: false
        });
    }
    else {
        $locationProvider.html5Mode(false);
    }
}]);
app.controller('MainCtrl', function($scope, $http) {
  $scope.tags = [
    
  ];
  
  
   $scope.loadTags = function(query) {
    return $http.get('tags.json');
  };
  
  
  
  $scope.onTagAdded = function($tag) {
    var currentId = 0;
    if ($scope.tags.length > 1) {
              var previousTagIdx = $scope.tags.indexOf($tag) - 1;
              var previousTag  = $scope.tags[previousTagIdx];
              currentId = previousTag.id + 1;
              
      }
      $tag.id = currentId;
      var ob = {
        text :$tag.text,
        id:$tag.id,state:"on"
      }
      arr.push(ob);
      

      real_services.forEach(element => {
        if(element.text==$tag.text)
        {
          element.state="on"
        }
        
      });
      console.log(arr)
      
     
  }

  $scope.onTagRemoved = function($tag) {
    
     
    real_services.forEach(element => {
      if(element.text==$tag.text)
      {
        element.state="off"
      }
     
    });
  
  }
 

 $scope.v = function (text)
  { 
    console.log(text)
  
    real_services.forEach(element => {
     if(element.text==text||element.id==text)
     {
           if(element.state=='off')
           {
               element.state='on'
               $scope.tags.push({
                text:element.text,
                id:element.id
              })
              arr.push({
                text:element.text,
                id:element.id
              })
               
           }
           console.log(arr)
     }
    });
    
  };
  
});


// load()
// function load()
// { 
//   var tabel = document.getElementById('table')
//   tabel.innerHTML= ""
//   var tr = document.createElement('tr')
//   var th =  document.createElement('th')
//   th.innerHTML="Popular Services"
//   tr.append(th)
//   tabel.append(tr)
  

//   real_services.forEach(element => {
   
//     var tr = document.createElement('tr')
//     var td =  document.createElement('td')
//     var td1 =  document.createElement('td')
//     td.innerHTML = element.text
//     tr.setAttribute('id','table_row')
//     td.setAttribute('ng-click','v(this.innerHTML)')
//     td1.setAttribute('ng-click','v(this.innerHTML)')
//     if(element.state=='on') td1.innerHTML = "-"
//     else  td1.innerHTML = "+"
//     tr.append(td)
//     tr.append(td1)
//     tabel.append(tr)
//   });



// }