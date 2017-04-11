// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      if (this.models.length === 1) {
        this.playFirst();
      }
    });
      // Listen to an 'ended' even on the collection
        // 
      // Remove first song in the queue
    this.on('ended', function() {
      this.remove(this.at(0));
      if (this.at(0)) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.at(0));
    });
  },

  playFirst: function() {
    this.at(0).play();
  }



});


// SongQueue.prototype.playFirst = function() {

// };