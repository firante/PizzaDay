Template.addPizzaDay.events({
  'submit form' : (e) => {
    var pizzaDayDate = $(e.target).find('[name=pizzaDayDate]').val();
    var splDate = pizzaDayDate.split('-');
    var date = new Date(splDate[0], splDate[1]-1, splDate[2]);
    if (date.getDay() === 3) {
      if(pizzaDay.find({'datePizza' : pizzaDayDate }).fetch().length === 0) {
        pizzaDay.insert( { 'datePizza':pizzaDayDate, 'ovnerPizza': Meteor.users.find().fetch()[0].profile.name } );
      } else {
        alert('In this date Pizza Day is organized!');
      }
    } else {
      alert('Selected date is not wednesday.')
    }
  }
});
