function ajaxQuote() {
    $.ajax({
        url: 'https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1',
        success: function(data) {
            var post = data.shift(); // The data is an array of posts. Grab the first one.
            console.log(post.content);
            $("#text-quote").empty().append(post.content);
            $("#author-quote").empty().append(post.title);
            },
        cache: false
    });
};

$(document).ready(ajaxQuote);

$("#new-quote").on("click", ajaxQuote);

$("#share-twitter").click(function() {
    alert("button share twitter")
});

