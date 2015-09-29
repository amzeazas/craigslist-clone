import Ember from 'ember';

export default Ember.Component.extend({
  sortedListingsProps: ['date_added:desc'],
  sortedListings: Ember.computed.sort('listings', 'sortedListingsProps'),
});
