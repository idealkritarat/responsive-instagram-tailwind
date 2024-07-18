const feed = $("#feed");
const post = $("#post");

let n = 10;
while(n--){
    const clone = $(post).clone();
    $(clone).appendTo(feed);
}