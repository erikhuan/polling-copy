/**
 * Created by Yuantien Huang on 10/1/2015.
 */
// attach events to our poll template
Template.poll.events({
    "click .delete" : function () {
        Meteor.call("deletePoll", this._id);
    }
});

Meteor.methods({
    deletePoll: function (pollId) {
        Polls.remove(pollId);
    }
});