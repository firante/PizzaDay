Template.addPizzaDay.events({
  'submit form' : (e) => {
    var pizzaDayDate = $(e.target).find('[name=pizzaDayDate]').val();
    var splDate = pizzaDayDate.split('-');
    var date = new Date(splDate[0], splDate[1]-1, splDate[2]);
    Meteor.subscribe('employers');
    
    var emplList = employers.find().fetch().map(function(value) { // list all employers for pizza day
      alert(value.firstName + " " + value.lastName)
      return value.firstName + " " + value.lastName;
    });

    if (date.getDay() === 3) {
      if(pizzaDay.find({'datePizza' : pizzaDayDate }).fetch().length === 0) {
        pizzaDay.insert( { 'datePizza':pizzaDayDate, 'ovnerPizza': Meteor.users.find().fetch()[0].profile.name, 'allEmploy': emplList,
          'successEmpl': []});
      } else {
        alert('In this date Pizza Day is organized!');
      }
    } else {
      alert('Selected date is not wednesday.')
    }
  }
});
