import Component from '@ember/component';
import {inject} from '@ember/service';

export default Component.extend({
    orderManager: inject('order-manager')
});

/*
import Component from '@ember/component';
import Ember from 'ember';

export default Component.extend({
    orderManager: Ember.inject.service('order-manager')
});
*/
