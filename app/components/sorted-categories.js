import Ember from 'ember';

export default Ember.Component.extend({
  sortedCategoriesProps: ['name'],
  sortedCategories: Ember.computed.sort('categories', 'sortedCategoriesProps'),
});
