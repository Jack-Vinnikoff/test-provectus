$(document).ready(function() {
    if ($('.burgerNav').length > 0) {
        $('.burgerNav').on('click', function (e) {
            e.preventDefault();
            $(this).toggleClass('active');
            $(this).parents('.headerNav').find('ul').toggleClass('active');
        });
    }
});
