/**
 * Created by Yuantien Huang on 10/1/2015.
 */
Polls = new Mongo.Collection('polls');

if (Meteor.isClient) {
    Meteor.subscribe("polls")

    Template.body.helpers({

    })

    Template.body.events({
        "submit .new-poll": function (event) {
            // Prevent default browser form submit
            event.preventDefault();

            // Get value from form element
            var text = event.target.text.value;

            // Insert a task into the collection
            Meteor.call("addPoll", text);

            // Clear form
            event.target.text.value = "";
        }
    })
}