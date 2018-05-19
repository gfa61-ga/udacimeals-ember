import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
    orderManager: inject('order-manager'),

    actions: {
        remove(day, menuCategory) {
            this.get('orderManager').removeMenuOption(day, menuCategory);
        },

        setDayTo(day) {
            this.get('orderManager').setSelectedDayTo(day);
        }
    }
});

/*
import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    orderManager: Ember.inject.service('order-manager')
});
*/
