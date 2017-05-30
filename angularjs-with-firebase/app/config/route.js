// unmatched url
app.config(function ($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/login");
});

app.config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider.state('login', {
        url: "/login",
        views: {
            'header': {
                templateUrl: "/app/component/views/layout/un-authenticated.html",
            },
            'content': {
                templateUrl: "/app/component/views/account/login.html",
                controller: "accountCtrl"
            }
        },
        onEnter: ['$state', 'commonSvc', function ($state, commonSvc) {
            isAuthenticated($state, commonSvc);
        }]
    })
    $stateProvider.state('register', {
        url: "/register",
        views: {
            'header': {
                templateUrl: "/app/component/views/layout/un-authenticated.html",

            },
            'content': {
                templateUrl: "/app/component/views/account/register.html",
                controller: "accountCtrl"
            }
        },
        onEnter: ['$state', 'commonSvc', function ($state, commonSvc) {
            isAuthenticated($state, commonSvc);
        }]
    })

    .state('addPost', {
        url: "/post/add",
        views: {
            'header': {
                templateUrl: "/app/component/views/layout/authenticated.html",
                controller:"authenticatedHeaderCtrl"
            },
            'content': {
                templateUrl: "/app/component/views/post/post-add.html",
                controller: "postCtrl"
            }
        },
        onEnter: ['$state', 'commonSvc', function ($state,commonSvc) {
            isNotAuthenticated($state, commonSvc);
        }]
    })
    .state('posts', {
        url: "/posts",
        views: {
            'header': {
                templateUrl: "/app/component/views/layout/authenticated.html",
                controller: "authenticatedHeaderCtrl"
            },
            'content': {
                templateUrl: "/app/component/views/post/post-list.html",
                controller: "postCtrl"
            }
        },
        onEnter: ['$state', 'commonSvc', function ($state, commonSvc) {
            isNotAuthenticated($state, commonSvc);
        }]
    })
    .state('page-not-exist', {
        url: "/page-not-exist",
        views: {
            'content': {
                templateUrl: "/app/component/views/page-not-exist.html"
            }
        }
    })
});

function isNotAuthenticated($state,commonSvc)
{
    if (commonSvc.getUser() == null)
    {
        $state.go("login");
    }
}

function isAuthenticated($state, commonSvc) {
    if (commonSvc.getUser() != null) {
        $state.go("posts");
    }
}