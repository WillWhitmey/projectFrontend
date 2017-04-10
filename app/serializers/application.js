import DS from 'ember-data';
import Ember from 'ember';

function randomId() {
  return Math.random().toString(36).substring(7);
}

export default DS.RESTSerializer.extend({

  isNewSerializerAPI: false,

  // extractId() {
  //   return this._super(...arguments) || randomId();
  // },
  //
  // normalizeArrayResponse(store, primaryType, payload) {
  //   let normalisedArray = {};
  //   normalisedArray[Ember.String.pluralize(primaryType.modelName)] = payload;
  //
  //   return this._super.call(this, store, primaryType, normalisedArray, ...arguments);
  // },
  //
  // normalizeSingleResponse(store, primaryType, payload, id) {
  //   let normalisedData = {};
  //   normalisedData[primaryType.modelName] = payload;
  //
  //   if (!payload.id && typeof payload !== 'string') {
  //     payload.id = id;
  //   }
  //
  //   return this._super.call(this, store, primaryType, normalisedData, ...arguments);
  // },
  //
  // serializeIntoHash(hash, typeClass, snapshot, options) {
  //   return Ember.merge(hash, this.serialize(snapshot, options));
  // }

});
