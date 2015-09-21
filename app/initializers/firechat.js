
export function initialize(container, application) {
  var chatRef = new Firebase('https://carolina-galleries.firebaseio.com/chat');
  application.register('service:firebase-ref', chatRef, {instantiate:false});
  application.inject('component:fire-chat', 'fireRef', 'service:firebase-ref');
}

export default {
  name: 'firechat',
  initialize: initialize
};
