$j=jQuery.noConflict();
$j(document).ready(function() {
var n=$j("#nav-top select").length;
if (n > 1) {
$j("#nav-top .tinynav").first().remove();
}
$j("ul.sf-menu").find(".current,.current_page_item,.current_page_parent,.current_page_ancestor,.current-cat,.current-cat-parent,.current-cat-ancestor,.current-menu-item,.current-menu-ancestor,.current-menu-parent,.current-post-ancestor,.current-post-parent").addClass('active');
    var id = "tinynav";
    $j('.'+id).after("<ul class='suf-nav-collapse' />")
        .children("option").each(function() {
            $j(".suf-nav-collapse").append('<li><a href="'+$j(this).val()+'">'+$j(this).text()+"</a></li>");
        })
        .end().remove();
	$j('.suf-nav-collapse li a').each(function() {
		if ($j.trim ($j(this).text()) === "") {
			var path_home_icon=$j('.home-icon')[0].src;
			$j(this).prepend('<img class="home-icon" src="' + path_home_icon + '" alt="home-icon" />');
		}
	});
     var navigation = responsiveNav(".suf-nav-collapse", {
        animate: true,
        transition: 284,
        label: "Menu",
        insert: "before",
        customToggle: "",
        closeOnNavClick: false,
        openPos: "relative",
        navClass: "suf-nav-collapse",
        navActiveClass: "active",
        jsClass: "js",
        init: function(){},
        open: function(){},
        close: function(){}
      });
});