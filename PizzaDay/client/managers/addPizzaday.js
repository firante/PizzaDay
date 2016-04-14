Template.addPizzaDay.events({
  'submit form' : (e) => {
    var pizzaDayDate = $(e.target).find('[name=pizzaDayDate]').val();
    var splDate = pizzaDayDate.split('-');
    var date = new Date(splDate[0], splDate[1]-1, splDate[2]);
    if (date.getDay() === 3) {
      
    } else {
      alert('selected date is not wednesday.')
    }
  }
});
