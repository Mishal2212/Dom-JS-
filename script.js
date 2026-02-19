const reels = [
  {
    username: "rohit_mehra",
    isMuted:true,
    likeCount: 12450,
    isLiked: false,
    commentCount: 320,
    caption: "Morning workout done right 💪",
    video: "./reels/video1.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/11.jpg",
    shareCount: 210,
    isFollowed: false
  },
  {
    username: "priya_sharma",
    isMuted:true,
    likeCount: 9850,
    isLiked: true,
    commentCount: 150,
    caption: "Sunset vibes 🌇",
    video: "./reels/video2.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/12.jpg",
    shareCount: 120,
    isFollowed: true
  },
  {
    username: "tech_with_aman",
    isMuted:true,
    likeCount: 15230,
    isLiked: false,
    commentCount: 410,
    caption: "Best coding setup 2026 🔥",
    video: "./reels/video3.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/13.jpg",
    shareCount: 330,
    isFollowed: false
  },
  {
    username: "foodie_diaries",
    isMuted:true,
    likeCount: 20450,
    isLiked: true,
    commentCount: 620,
    caption: "Street food tour in Delhi 😍",
    video: "./reels/video4.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/14.jpg",
    shareCount: 540,
    isFollowed: true
  },
  {
    username: "travel_with_kabir",
    isMuted:true,
    likeCount: 17890,
    isLiked: false,
    commentCount: 275,
    caption: "Mountains are calling 🏔️",
    video: "./reels/video5.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/15.jpg",
    shareCount: 290,
    isFollowed: false
  },
  {
    username: "fitness_freak",
    isMuted:true,
    likeCount: 11200,
    isLiked: true,
    commentCount: 180,
    caption: "Leg day pain is real 😅",
    video: "./reels/video6.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/16.jpg",
    shareCount: 95,
    isFollowed: true
  },
  {
    username: "makeup_by_riya",
    isMuted:true,
    likeCount: 22340,
    isLiked: false,
    commentCount: 530,
    caption: "Quick party makeup tutorial 💄",
    video: "./reels/video7.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/17.jpg",
    shareCount: 410,
    isFollowed: false
  },
  {
    username: "gamer_zone",
    isMuted:true,
    likeCount: 30120,
    isLiked: true,
    commentCount: 720,
    caption: "Clutch moment in last round 🎮",
    video: "./reels/video8.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/18.jpg",
    shareCount: 670,
    isFollowed: true
  },
  {
    username: "nature_clicks",
    isMuted:true,
    likeCount: 8940,
    isLiked: false,
    commentCount: 110,
    caption: "Peaceful waterfall sound 🌿",
    video: "./reels/video9.mp4",
    userprofile: "https://randomuser.me/api/portraits/women/19.jpg",
    shareCount: 75,
    isFollowed: false
  },
  {
    username: "dance_with_sam",
    isMuted:true,
    likeCount: 26780,
    isLiked: true,
    commentCount: 840,
    caption: "Trending dance challenge 💃",
    video: "./reels/video10.mp4",
    userprofile: "https://randomuser.me/api/portraits/men/20.jpg",
    shareCount: 590,
    isFollowed: true
  }
];

var allReels=document.querySelector('.all-reels')

function addData(){
  var sum=''
  reels.forEach(function(elem,idx){
    sum=sum+`<div class="reel">
          <video autoplay loop ${elem.isMuted?'muted':''} src="${elem.video}"></video>
          <div class="mute" id=${idx}>
          ${elem.isMuted?'<i class="ri-volume-mute-fill"></i>':'<i class="ri-volume-up-line"></i>'}
    </div> 
          <div class="bottom">
            <div class="user">
              <img src="${elem.userprofile}" alt="">
              <h4>${elem.username}</h4>
              <button id=${idx} class="follow">${elem.isFollowed?'UnFollow':'Follow'}</button>
            </div>
            <h3>${elem.caption}</h3>
          </div>
          <div class="right">
          <div id=${idx} class="like">
          <h4 class="like-icon">${elem.isLiked?'<i class="love ri-heart-3-fill"></i>':'<i class="ri-heart-line"></i>'}</h4>
              <h6>${elem.likeCount}</h6>
            </div>
            <div class="comment">
              <h4 class="comment-icon"><i class="ri-chat-3-line"></i></h4>
              <h6>${elem.commentCount}</h6>
            </div>
            <div class="share">
              <h4 class="share-icon"><i class="ri-send-ins-line"></i></h4>
              <h6>${elem.shareCount}</h6>
            </div>
            <div class="menu">
              <h4 class="menu-icon"><i class="ri-more-2-fill"></i></h4>
            </div>
          </div>
        </div>`
})
allReels.innerHTML=sum;
}

addData();


allReels.addEventListener('click',function(dets){
  if(dets.target.className=="like"){
    if(!reels[dets.target.id].isLiked){
    reels[dets.target.id].likeCount++;
    reels[dets.target.id].isLiked=true;
  }else{
    reels[dets.target.id].likeCount--;
    reels[dets.target.id].isLiked=false;
  }
  addData();
  }
  

  if(dets.target.className=="follow"){
    if(!reels[dets.target.id].isFollowed){
      reels[dets.target.id].isFollowed=true;
    }
    else{
      reels[dets.target.id].isFollowed=false;
    }
    addData();
  }

  if(dets.target.className=="mute"){
    if(!reels[dets.target.id].isMuted){
    reels[dets.target.id].isMuted=true;
  }else{
    reels[dets.target.id].isMuted=false;
  }
  addData();
  }

  
})