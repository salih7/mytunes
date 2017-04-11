// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function(song) {
    if(arguments.length === 1) {
      this.add(song);
    }
  },

  add: function(song) {
    this.models.push(song);
    if (this.models.length === 1) {
      this.playFirst();
    }
  },

  playFirst: function() {

  }



});


// SongQueue.prototype.playFirst = function() {

// };