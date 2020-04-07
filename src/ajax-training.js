$.ajax ("https://api.github.com/repos/thomasdavis/backbonetutorials/contributors", {
  success: function(data) {
    for (let i=0;i<30;i++) {
    $('.contributor-field').append(`
    <div class = "contributor__list-cell">
      <img class="contributor__avatar" src=${data[i].avatar_url}></img>
      <div class="contributor__logins")>${data[i].login}</div>
    </div>  
    `);
    }
  }
})
