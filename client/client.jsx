if(Meteor.isClient){
  const { Router, Route, IndexRoute } = ReactRouter;
  const history = ReactRouter.history.useQueries(ReactRouter.history.createHistory)()

  Accounts.ui.config({
    passwordSignupFields: "USERNAME_ONLY"
  });

  Meteor.startup(() => {
    AppRoutes = (
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home}/>
          <Route path="login" component={Login} />
        </Route>
      </Router>
    );

    ReactRouterSSR.Run(AppRoutes);
  });
}
