$(document).ready(function() {
    $( "#search" ).submit(function(event) {
        event.preventDefault();
        console.log($( "#keyword ").val())
        const link = $( "#keyword ").val()
     });
    $.ajax ({
        url:`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${ link }&type=video&key=AIzaSyA9gQZ-oYomFypZN7PsupZJtOfQqA6Q3qw`,
        type:"GET",
        success:function(data){
            const nextPageToken = data.nextPageToken
            if(data.items.length != 0 ){
                const listVideo = data.items
                for (let i  = 0; i < listVideo.length; i++){
                    let videoData = listVideo[i];
                    const videoId = `${videoData['videoId']}`;
                    const thumbnails = `${videoData['snippet']['thumbnails']['default']}`;
                    const title = `${videoData['snippet']['thumbnails']['title']}`;
                    const description = `${videoData['snippet']['description']}`;
                    const page = 
                    div class="row">
                        <div class="col-md-12" id="result-list">
                            <a href="" class="result col-md-12" target="_blank">
                            <img src="${}" alt="">
                            <div class="video_info">
                                <h2 class="title"></h2>
                                <p class="description"></p>
                                <span>View</span>
                            </div>
                            </a>
                        </div>
                    </div>
                    $('#result_list').append(page)
                }
                
            }
           
        }

    })
});

