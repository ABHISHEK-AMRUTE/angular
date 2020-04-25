var app = angular.module('plunker', ['ngTagsInput']);
var arr =[];
var final_amount=0;
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
      generate_results()
      
     
  }

  $scope.onTagRemoved = function($tag) {
    
     
    real_services.forEach(element => {
      if(element.text==$tag.text)
      {
        element.state="off"
      }
     
    });
    generate_results()
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

function generate_results()
{
  document.getElementById('package_info').style.display='block'
  var st =""
  var c=1;
  arr.forEach(element => {
    if(c%2==0){
      st+=element.text+"<br>"
    c++;
    }
    else{
    c++;
    st+=element.text+" , "
    }
      
  });
  document.getElementById('content_of_package').innerHTML=st;
  var price = 99*arr.length
  document.getElementById('price_package').innerHTML=price ;
  var big_ele =document.getElementById('individual_results')
{/* <div-container  class="w3-container" style="margin-top: 50px;">
      <div-row class='w3-row w3-border'>

        <div-row1 class="w3-col l5 m5" style="vertical-align: middle;">
          <div-divimg class='w3-card ' style="float:right;vertical-align: middle;">
  
            <img src="./hormones.png" width="300px" height="300px" class='w3-img w3-padding' >
          </div>
        </div>

        <div-row2 class="w3-col l7 m7">
          <div-mmain class='' style="float:left;padding:50px;">
            <h1- class='w3-xxlarge' id="heading"
              style="text-align:center;margin-top:10px; font-family: 'Times New Roman', Times, serif;"><b><i>Your Complete Package</i></b></h1>
            <p  id='content_of_package' class='w3-large' style="font-family: 'Times New Roman', Times, serif;text-align:center">
            </p>
            <div-center style="text-align: center;">
              <div-price id="pack_price"class='w3-xxlarge' style='font-style: italic;color:green;font-weight:bold'>RS 100</div>
            
              <button class="w3-button w3-white w3-border w3-border-blue w3-round-large">Buy Now</button>
            </div>
            
          </div>
        </div>
      </div>
  
    </div> */}
  arr.forEach(element => {
    var  container= document.createElement('div')
    var row = document.createElement('div')
    var row1 = document.createElement('div')
    var row2 = document.createElement('div')
    var  divimg= document.createElement('div')
    var  img= document.createElement('img')
    var  mmain= document.createElement('div')
    var  h1= document.createElement('h1')
    var  p= document.createElement('p')
    var  center= document.createElement('div')
    var  price= document.createElement('div')
    var  button= document.createElement('button')
    divimg.append(img)
    row1.append(divimg)
    center.append(price)
    center.append(button)
    mmain.append(h1)
    mmain.append(p)
    mmain.append(center)
    row2.append(mmain)
    row.append(row1)
    row.append(row2)
    container.append(row)
    container.setAttribute('class','w3-container')
    container.setAttribute('style','margin-top: 50px;')
    row.setAttribute('class','w3-row w3-border')
    row1.setAttribute('class','w3-col l5 m5')
    row1.setAttribute('style','vertical-align: middle;')
    divimg.setAttribute('class','w3-card')
    divimg.setAttribute('style','float:right;vertical-align: middle;')
    img.setAttribute('src','./hormones.png')
    img.setAttribute('style','width: 300px;height: 300px;')
    img.setAttribute('class','w3-img w3-padding')
    row2.setAttribute('class','w3-col l7 m7')
    mmain.setAttribute('style','float:left;padding:50px;')
    h1.setAttribute('class','w3-xxlarge')
    
    h1.setAttribute('style',"text-align:center;margin-top:10px; font-family: 'Times New Roman', Times, serif;")
   
    p.setAttribute('class','w3-large')
    p.setAttribute('style',"font-family: 'Times New Roman', Times, serif;text-align:center")
    center.setAttribute('style','text-align: center;')
    
    price.setAttribute('class','w3-xxlarge')
    price.setAttribute('style','font-style: italic;color:green;font-weight:bold')
    button.setAttribute('class','w3-button w3-white w3-border w3-border-blue w3-round-large')
    button.setAttribute('data-target','#login')
    button.setAttribute('data-toggle','modal')
    h1.innerHTML = element.text
    console.log('adding : '+element.text)
    p.innerHTML = "Secure trusted and 100% effective<br>Hurry up!" 
    price.innerHTML = "Rs 99"
    big_ele.append(container)
    button.innerHTML = "Buy Now"
  });

}
function save(){
  final_amount = document.getElementById('price_package').innerHTML;
  console.log(final_amount);
}
function show(){
  document.getElementById('payment').style.display='block'
  if(final_amount!=0)
  document.getElementById('final_invoice_price').innerHTML = final_amount
  else document.getElementById('final_invoice_price').innerHTML = 99
  document.getElementById('package_info').style.display='none'
  
  document.getElementById('individual_results').style.display='none'
}