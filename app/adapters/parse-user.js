import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
  buildURL: function(record, suffix) {
    return this._super(record,suffix) + "?include=likes";
  }
});
