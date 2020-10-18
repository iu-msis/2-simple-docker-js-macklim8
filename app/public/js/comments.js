waitingApp = new Vue({
  el: '#commentTable',
  data: {
    comments: [{
      id: '',
      commentText: ''
    }],

    newCom: {
      id: '',
      commentText: ''
    }
  },

  created(){
    this.fetchComments();
  },

  methods: {
    fetchComments(){
      fetch('api/comments/')
      .then(response => response.json())
      .then(json => {
        this.comments=json;
        console.log(this.comments);
      });
    },

    createComment(){
        fetch('api/comments/create.php', {
          method:'POST',
          body: JSON.stringify(this.newCom),
          headers: {
            "Content-Type": "application/json; charset=utf-8"
          }
        })
        .then( response => response.json() )
        .then( json => {
          console.log("Returned from post:", json);
          this.comments = json;
          this.newCom = this.newInfo();
        });

        console.log("Creating (POSTing)...!");
        console.log(this.newCom);
      },


      newInfo() {
        return {
          id: "",
          commentText: ""
        }
      }
    },

})
