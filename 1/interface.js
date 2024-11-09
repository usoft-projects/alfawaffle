
function init(){
    var config = {
      apiKey: "AIzaSyDaldjIsm93aZluwjMnLzJ8Kxoeur_qayk",
      authDomain: "moloko-01.firebaseapp.com",
      databaseURL: "https://moloko-01-default-rtdb.firebaseio.com",
      projectId: "moloko-01",
      storageBucket: "moloko-01.appspot.com",
      messagingSenderId: "632037249924",
      appId: "1:632037249924:web:5ed05b7d47a0a5a76983d1"
    };
    
    firebase.initializeApp(config);
    var database = firebase.database();
    
    var ref = firebase.database().ref();
    var key = []
    var data = []
    ref.on("value", function(snapshot) {
        var list_categories = document.getElementById("menu_card")
        var test = snapshot.val()
        var keys = Object.keys(test);
        var datas =  Object.values(test) 
        key =  keys
        data =  datas
        var categories = document.getElementById("categories")

        // console.log(keys)
        // console.log(Object.values(test))
        categories.innerHTML = ''
        for(var i=0;i<(datas[0].length);i++){
            // categories.innerHTML += '<li class="nav-item">' +
            // '<a class="d-flex align-items-center text-start mx-3 ms-0 pb-3" active href="#'+datas[0][i]+'">' +
            // '<div class="ps-3">'+
            // '<h6 class="mt-n1 mb-0">'+datas[0][i]+'</h6>'+
            // '</div></a></li>'
        }
        
    
        // // var list_menu = document.getElementById("menu_tabs")
        list_categories.innerHTML = ""
        // // console.log(datas[0]) // 1Configurations kısmı
        for(var i=0; i<datas[0].length; i++ ){
            console.log(datas[0][i])
            var index_key = keys.indexOf(datas[0][i])
            console.log(index_key)
            list_categories.innerHTML += '<br><div id="'+datas[0][i]+'" class="tab-pane fade show p-0 active">'+
            '<h4 class="mt-n1 mb-0">'+datas[0][i]+'</h4>'+
            '<div class="row g-4"><br><br>'+
            ''
            for(var k=0; k<datas[index_key].length; k++){
                list_categories.innerHTML += ' <div class="col-lg-6">'+
                '<div class="d-flex align-items-center">'+
                '<img class="flex-shrink-0 img-fluid rounded" src='+datas[index_key][k].image+' alt="" style="width: 80px;"></img>'+
                '<div class="w-100 d-flex flex-column text-start ps-4">'+
                '<div class="w-100 d-flex flex-column text-start">'+
                '<h6 class="d-flex justify-content-between pb-2">'+
                    '<span>'+datas[index_key][k].name+'</span>'+
                    '<span class="text-primary">'+datas[index_key][k].price+' TL</span>'+
                '</h6>'+
                '<small class="fst-italic border-bottom ">'+datas[index_key][k].details+'</small>'+
                '</div></div></div> <br> <br>'
            }
            list_categories.innerHTML += '</div></div>'
            // list_categories.innerHTML += '<hr>'
        }
        list_categories.innerHTML += '</div></div>'
       
    },function (error) {
        console.log("Error: " + error.code);
    });
    
    }
    setTimeout(() => {     init() }, 1500);

    function about_comp(){
        var text =  '        <section id="contact" class="contact" id="conts"> \
          <div class="container" data-aos="fade-up"> \
            <div class="section-title"> \
              <h2>İletişim</h2> \
              <p>İletişime Geçin</p> \
            </div> \
          </div> \
          <div class="container" data-aos="fade-up"> \
            <div class="row mt-5"> \
              <div class="col-lg-4"> \
                <div class="info"> \
                  <div class="address"> \
                    <i class="bi bi-geo-alt"></i> \
                    <h4>Yer/Konum:</h4> \
                    <p> İstanbul <br> \
                    Türkiye <br> \
                      Çalışma Saatleri : 10:00 - 24:00</p> <br>\
                  </div> \
                  <div class="phone">\
                    <i class="bi bi-phone"></i>\
                    <h4>Telefon:</h4>\
                    <p> 0 </p> <br>\
                  </div>\
                  <div class="email">\
                    <i class="bi bi-envelope"></i>\
                    <h4>Email:</h4>\
                    <p>--</p>\
                  </div> <br>\
                </div>\
              </div>\
            </div>\
          </div> \
        </section>'
        Swal.fire({
            toast: true,
            html:text   ,
            imageUrl: 'img/home.png',
            imageAlt: 'Custom image',
          });
    }
    
