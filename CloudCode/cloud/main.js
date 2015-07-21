/* globals Parse */
// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("like", function(request, response) {
  var user = request.user;
  var query = new Parse.Query("Artwork");
  query.equalTo('id', 'artwork.id');
    user.addUnique("Artwork", request.params.artwork).save();

  response.success({
    artwork: request.params.artwork,
  });
});

Parse.Cloud.define("unlike", function(request, response) {
  var user = request.user;
  user.remove("Artwork", request.params.artwork).save();

  response.success({
    artwork: request.params.artwork,
  });
});
