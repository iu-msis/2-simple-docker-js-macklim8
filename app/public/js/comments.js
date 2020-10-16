hwApp = new Vue({
  el: '#commentTable',
  data: {
    comments: [{
      firstName: '',
      lastName: '',
      userId: '',
    }],

    newCom: {
      firstName: '',
      lastName: '',
      userId: '',
    }
  },

  created(){
    this.fetchInfo();
  },

  methods: {
    fetchInfo: function(){
      fetch('api/comments/index.php')
      .then(response => response.json())
      .then(json => {
        this.users = json;
        console.log(this.users);
      });
    },
  },
})
