import Ember from 'ember';

export default Ember.Route.extend({

    /**
     *
     */
    model: function () {
        return Ember.$.getJSON('/api/results').then(function (data) {
            return data;
        });
    }

});
