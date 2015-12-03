Template.pollForm.events({

  // handle the form submission
  'submit form': function(event) {

    // stop the form from submitting
    event.preventDefault();

    // get the data we need from the form
    var newPoll = {
      question: event.target.sname.value,
      choices: [
        {  text: event.target.tier.value, votes: 0 },
        {  text: event.target.rank.value, votes: 0 },
      ]
    };

    // create the new poll
    Polls.insert(newPoll);
  },
});