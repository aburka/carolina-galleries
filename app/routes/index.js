import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
      return Ember.$.ajax({
            url: 'https://api.artsy.net/api',
            type: 'GET',
            dataType: 'json',
            contentType: "application/json",
            beforeSend: function(xhr) {
                 xhr.setRequestHeader("Authorization", "Basic YWJ1cmthQGdtYWlsLmNvbQ==:MDcxMjE5ODk=");
            },
            success: function(data){
                console.log("success", data);
            }
        });
    }
});
