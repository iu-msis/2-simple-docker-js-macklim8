var app = new Vue({
  el: '#pii',
  data: {
    userName: ' ',
    userDob: ' ',
    userAge: ' ',
    userEmail: ' ',
    userImgLarge: ' ',
    userImgThumb: ' ',
  },

  created(){
    this.fetchInfo();
  },

  methods: {
    fetchInfo: function(){
      fetch('https://randomuser.me/api/')
      .then(response => response.json())
      .then(data => {
        var userInfo = data.results[0];
        console.log(userInfo);
        this.userName = userInfo.name.first + " " + userInfo.name.last;
        this.userDob = userInfo.dob.date;
        this.userAge = userInfo.dob.age;
        this.userEmail = userInfo.email;
        this.userImgLarge = userInfo.picture.large;
        this.userImgThumb = userInfo.picture.thumbnail;
      });
    },
        formatDate(d) {return moment(d).format("MMM Do YYYY");
      }
  },
})
