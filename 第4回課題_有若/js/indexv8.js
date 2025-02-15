$(function(){
    $(".service").click(function(){
        let id = $(this).attr("id");
        $(".service").removeClass("active");
        $(this).addClass("active");
        $(".dtext").removeClass("active");
        $("#"+id+"t").addClass("active");
    })
})

$(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });



  $(document).ready(function() {
    // 都道府県ごとの市区町村データ
    const shiData = {
        hokkaido: [
          "札幌市",
          "函館市",
          "小樽市",
          "旭川市",
          "室蘭市",
          "釧路市",
          "帯広市",
          "北見市",
          "夕張市",
          "岩見沢市",
          "網走市",
          "留萌市",
          "苫小牧市",
          "稚内市",
          "美唄市",
          "芦別市",
          "江別市",
          "赤平市",
          "紋別市",
          "士別市",
          "名寄市",
          "三笠市",
          "根室市",
          "千歳市",
          "滝川市",
          "砂川市",
          "歌志内市",
          "深川市",
          "富良野市",
          "登別市",
          "恵庭市",
          "伊達市",
          "北広島市",
          "石狩市",
          "北斗市",],
        aomori: [
          "青森市",
          "弘前市",
          "八戸市",
          "黒石市",
          "五所川原市",
          "十和田市",
          "三沢市",
          "むつ市",
          "つがる市",
          "平川市",
          ],
        iwate: [
          "盛岡市",
          "宮古市",
          "大船渡市",
          "花巻市",
          "北上市",
          "久慈市",
          "遠野市",
          "一関市",
          "陸前高田市",
          "釜石市",
          "二戸市",
          "八幡平市",
          "奥州市",
          "滝沢市",]
    };

    $("#ken").change(function() {
        let selectedPref = $(this).val(); 
        let $shiSelect = $("#shi"); 

        $shiSelect.empty().append('<option value="">選択してください。</option>');

        if (selectedPref && shiData[selectedPref]) {
            $.each(shiData[selectedPref], function(index, shi) {
                $shiSelect.append(`<option value="${shi}">${shi}</option>`);
            });
        }
    });
});



/* // ハンバーガーアイコンのクリックイベントを設定
document.querySelector('.hamburger').addEventListener('click', function() {
  // ハンバーガーアイコンとメニューのクラスをトグル
  this.classList.toggle('open');
  document.querySelector('.headerham').classList.toggle('open');
  document.querySelector('#header-menu').classList.toggle('open');
});

// メニュー項目がクリックされた場合にメニューを閉じる
const menuLinks = document.querySelectorAll('.header-menusub a');
menuLinks.forEach(link => {
  link.addEventListener('click', function() {
      // メニューが閉じる
      document.querySelector('.headerham').classList.remove('open');
      document.querySelector('#header-menu').classList.remove('open');
      document.querySelector('.hamburger').classList.remove('open');
  });
}); */




const menu = document.querySelector('#header-menu');
const btn = document.querySelector('#hamburger');

// ハンバーガーメニューの開閉
btn.addEventListener('click', () => {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
    if (menu.classList.contains("open")) {
        menu.style.height = menu.scrollHeight + 'px';
    } else {
        menu.style.height = "0";
    }
});

// メニュー項目がクリックされた場合にメニューを閉じる
const menuItems = document.querySelectorAll('.header-menusub a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        // メニューを閉じる
        menu.style.height = "0";
        btn.classList.remove('open');
        menu.classList.remove('open');
    });
});



/*   const menu = document.querySelector('#header-menu')
  const btn = document.querySelector('#hamburger')
  
  btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    menu.classList.toggle('open')
    if(menu.classList.contains("open")){
      menu.style.height = menu.scrollHeight + 'px'
    }else{
     menu.style.height = "0"
    }
  })

  メニュー項目がクリックされた場合にメニューを閉じる
  const clause = document.querySelectorAll('header-menusub');
  clause.forEach(link => {
  link.addEventListener('click', function() {
      // メニューが閉じる
      document.querySelector('hamburger').classList.remove('open');
      document.querySelector('hamburger').classList.remove('open');
      document.querySelector('hamburger').classList.remove('open');
  });
});  */

document.addEventListener("DOMContentLoaded", function () {
  var form = document.querySelector("form");
  if (!form) return; // フォームがなければ処理を終了

  form.addEventListener('submit', function(event) {
    var telInput = document.getElementById('tel');
    var telValue = telInput.value.trim();
    var telError = document.getElementById('telError');
    
  document.addEventListener("DOMContentLoaded", function() {
    var form = document.querySelector("form");
    if (!form) return;
  }) 
    // フォームがない場合は何もせず処理を終了
  // 数値チェック
/*     if (!/^\d+$/.test(telValue)) {
        telError.textContent = "電話番号は数字のみで入力してください。";
        telError.style.display = "block";
        event.preventDefault(); // フォーム送信を停止
        return false;
    } */

    // 桁数チェック
    if (telValue.length !== 10 && telValue.length !== 11 && telValue.length !== 0) {
        telError.textContent = "電話番号は10桁または11桁で入力してください。";
        telError.style.display = "block";
        event.preventDefault(); // フォーム送信を停止
        return false;
    }

    // エラーメッセージが表示されていなければ、エラーメッセージを非表示にする
    telError.style.display = "none"; 
 });
});
 


  
/* 
  $(function(){
//配列
 /*  var a = ["赤","青","緑"];
  console.log(a[1]);

  //連想配列
  var array = {red:"赤",blue:"青",green:"緑"};
  console.log(array);
  console.log(array["bule"]);
*/
  //条件分岐
/*   var value = 2; */
  
   /* 
  if(value == 1){
    console.log("valueの値は1です");
  } else if(value == 2){
    console.log("valueの値は2です");
  } else{
    console.log("valueは"+value+"です")
  } */
// if(1 <= value && value<= 2){
//  console.log("valueは1以上、2以下");

 /*  if(value == 1 || value == 2){
    console.log("valueは1か2");
 }

 var value = 1;
 var value = 1;
 var value = 1;
 if(value == 1 && valueB ==2 || valueC == 3){
  console.log(value)
 }
  */

//forループ
/* for(let index = 0; index < 10; index++){
  var element = index;
  console.log(element);
}
 */

/* //whileループ
var index=0
while(index<10){
  console.log(index);
  index++; */


/*   var array =["あ","い","う","え","お"]
  array.forEach(element => {
    if(element == "あ" || element == "お") {
      console.log(element);
    }
  }) */

/* $("form").submit(function(){
  let name = $("input[name='name']").val();
  console.log(name);
  if(name == "") {
    return false;
  }
  return true;

});

}); */
