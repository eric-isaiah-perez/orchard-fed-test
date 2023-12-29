import './styles.css';

jQuery(document).ready(function () {
    AOS.init();

    // Display the title of the post when the user clicks on the anchor
    jQuery('.post-anchor, .read-more').on('click', function () {
        var nearestPostTitle = $(this).closest('.card-content').find('.post-title').text();
        console.log('The element you clicked is ' + nearestPostTitle);
    })
});