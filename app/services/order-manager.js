import Service from '@ember/service';

export default Service.extend({
    selectedDay: 'Monday',

    init() {
        this._super(...arguments); // Is required as first line in init() function

        this.menuSelection = {  // menuSelection will hold the orders for each day
            Monday: {},
            Tuesday: {},
            Wednesday: {},
            Thursday: {},
            Friday: {}
        };
    },

    setSelectedDayTo(day) {
        this.set('selectedDay', day);
    },

    chooseMenuOption(mealCategory, menuItemName) {
        this.set('menuSelection.' + this.get('selectedDay') + '.' + mealCategory, menuItemName);
    },

    removeMenuOption(day, mealCategory) {
        this.set('menuSelection.' + day + '.' + mealCategory, '');
    }
});
