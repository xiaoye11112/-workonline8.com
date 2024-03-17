$(function(){
    var whatsappList =  [
        "https://line.me/ti/p/423GWRREUT",
        "https://line.me/ti/p/0jNcZijRv4", 
    ];
    var index = Math.floor((Math.random() * whatsappList.length));
    $('.waNum').html(whatsappList[index]);
    $(".jump").click(function () {
        window.location.href=''+whatsappList[index];
    });
});


