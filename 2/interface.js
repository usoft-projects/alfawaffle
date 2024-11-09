
function init(){
    var config = {
      apiKey: "AIzaSyDaldjIsm93aZluwjMnLzJ8Kxoeur_qayk",
      authDomain: "moloko-01.firebaseapp.com",
      databaseURL: "https://moloko-01-default-rtdb.firebaseio.com",
      projectId: "moloko-01",
      storageBucket: "moloko-01.firebasestorage.app",
      messagingSenderId: "632037249924",
      appId: "1:632037249924:web:5ed05b7d47a0a5a76983d1"
    };
    
    firebase.initializeApp(config);
    var database = firebase.database();
    
    var ref = firebase.database().ref();
    var key = []
    var data = []
    ref.on("value", function(snapshot) {
        var list_categories = document.getElementById("menu_contains")
        var test = snapshot.val()
        var keys = Object.keys(test);
        var datas =  Object.values(test) 
        key =  keys
        data =  datas
        var categories = document.getElementById("categories_list")

        // console.log(keys)
        // console.log(Object.values(test))
        categories.innerHTML = ''
        for(var i=0;i<(datas[0].length);i++){
            categories.innerHTML +=  '<a href="#'+ datas[0][i]+'"><div class="menu__content"><img src="assets/img/'+datas[0][i]+'.jpg" alt="" class="menu__img">'+
            '<h3 class="menu__name">' + datas[0][i] + '</h3> </div></a>'
        }
        
    
        // // var list_menu = document.getElementById("menu_tabs")
        list_categories.innerHTML = ""
        // // console.log(datas[0]) // 1Configurations kısmı
        for(var i=0; i<datas[0].length; i++ ){
            console.log(datas[0][i])
            var index_key = keys.indexOf(datas[0][i])
            console.log(index_key)
            list_categories.innerHTML += '<br id="'+ datas[0][i]+'"><br><br><span class="section-subtitle">' + datas[0][i] + '</span>'
            for(var k=0; k<datas[index_key].length; k++){
              list_categories.innerHTML += '<div class="menu__container">' +
              ' <div class="menu__content">' +
              '<h3 class="menu__name">' + datas[index_key][k].name + '</h3>'+
              ' <span class="menu__detail">' + datas[index_key][k].details + '</span>'+
              '<span class="menu__preci">'+datas[index_key][k].price  +' TL</span>'+
              '</div></div><br>'
            }
            // list_categories.innerHTML += '</div><br>'
            list_categories.innerHTML += '<br>'
        }
        // list_categories.innerHTML += '</div></div>'
       
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
                    <p> Mustafa Kemal, Şht. Öğretmen Şenay Aybüke Yalçın Cd. <br> \
                    No: 31b, 06530 Çankaya/Ankara <br> \
                      Çalışma Saatleri : 10:00 - 24:00</p> <br>\
                  </div> \
                  <div class="phone">\
                    <i class="bi bi-phone"></i>\
                    <h4>Telefon:</h4>\
                    <p>0530 433 99 80 </p> <br>\
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
            imageUrl: 'img/logo.jpg',
            imageAlt: 'Custom image',
          });
    }
    
