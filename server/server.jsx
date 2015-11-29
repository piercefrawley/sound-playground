if(Meteor.isServer) {
  Meteor.startup(() => {
    console.log('Hello from server');
  });
}
