/**
 * Main application menu component
 *
 * Using vendor CSS from https://jonsuh.com/hamburgers/ to control
 * the animated toggle of the hamburger menu icon.
 */

import Ember from 'ember';

export default Ember.Component.extend({
    // Ember hook for setting the component container element
    tagName: 'div',

    // Ember hook for setting CSS classes on the component container element
    classNames: ['app-menu'],

    /**
     * Ember hook for insertion of the parent element in the DOM
     */
    didInsertElement: function () {
        // Call the parent class method
        this._super.apply(this, arguments);

        // Add an event listener for click events on the toggle icon
        this.$().on('click', 'button.hamburger', { scope: this }, this.toggleActive);
    },

    /**
     * Ember hook for removal of the parent element from the DOM
     */
    willDestroyElement: function () {
        // Call the parent class method
        this._super.apply(this, arguments);

        // Remove the event listener for click events on the toggle icon
        this.$().off('click', 'button.hamburger', this.toggleActive);
    },

    /**
     * Event-invoked method for toggling menu states on icon click
     * @param {Object} event
     */
    toggleActive: function (event) {
        var component = event.data.scope;

        // Toggle CSS classes on the affected elements
        component.$('button.hamburger').toggleClass('is-active');
        component.$('.hamburger-inner').toggleClass('expanded');
        component.$().toggleClass('expanded');
        component.$('.nav-menu').toggleClass('expanded');
        component.$('.logo').toggleClass('expanded');
    }

});
