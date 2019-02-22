// Run On Page Load
$(window).on("load", function() {

    //Preloader
    $('#loader-wrapper').fadeOut(1600, function() { $(this).remove(); });

    /* activate jquery isotope */
    var $container = $('#portfolio-container');
    $container.isotope({
        masonry: {
            columnWidth: '.portfolio-item'
        },
        itemSelector: '.portfolio-item'
    });
    $('#filters').on('click', 'li', function() {
        $('#filters li').removeClass('active');
        $(this).addClass('active');
        var filterValue = $(this).attr('data-filter');
        $container.isotope({ filter: filterValue });
    });

    $('#lionhero').owlCarousel({
        nav: true,
        navText: [
            "PREV",
            "NEXT"
        ],
        items: 1,
        navSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $('#lionportfolio').owlCarousel({
        nav: true,
        navText: [
            "PREV",
            "NEXT"
        ],
        items: 1,
        navSpeed: 400,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
    });

    $("#liontestimonial").owlCarousel({

        nav: true,
        navText: [
                '<i class="fa fa-angle-left"></i>',
                '<i class="fa fa-angle-right"></i>'
            ],
        items: 1,
        navSpeed: 400,
        loop: true, 
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            1024: {
                items: 1
            }
        }
    });


});

$(document).ready(function() {
	//console.log(screen.width);
	if(screen.width > '900')
	{
		document.getElementById("mySidenav").style.width = "150px";
	    document.getElementById("mynav").style.display = "none";
	}
        $('#pagepiling').pagepiling({
        menu: '#menu',
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6', 'page7'],
        navigation: {
            'textColor': '#f2f2f2',
            'bulletsColor': '#ccc',
            'position': 'right',
            'tooltips': ['morly主 页', '美景预览', '最新景点推荐', '旅游攻略推荐', '热门景点门票', 'morly旅游圈']
        }
    });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "150px";
    document.getElementById("mynav").style.display = "none";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("mynav").style.display = "block";
}

(function(){
    var bp = document.createElement('script');
    var curProtocol = window.location.protocol.split(':')[0];
    if (curProtocol === 'https'){
   bp.src = 'https://zz.bdstatic.com/linksubmit/push.js';}
  else{bp.src = 'http://push.zhanzhang.baidu.com/push.js';}
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(bp, s);})();

var url = window.location.href;
if (url.indexOf("https") < 0) {
url = url.replace("http:", "https:");
window.location.replace(url);
}

var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?a8693f0eea0200c5d3c74d2a5f05bdec";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
