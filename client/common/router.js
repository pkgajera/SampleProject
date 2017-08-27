// import {
//     Users
// } from '/imports/api/collections/user';

Router.configure({
    layoutTemplate: "appLayout",
    loadingTemplate: 'loading',
    notFoundTemplate: "notFound",
    onAfterAction:function() {
      $('html,body').animate({
            scrollTop: 0
        }, 1000);
        return ''
    },
});

const roleMap = [{
        route: "home",
        roles: ["user"]
    },
];

// this function returns true if user is in role allowed to access given route
this.routeGranted = function(routeName) {
    if (!routeName) {
        // route without name - enable access (?)
        return true;
    }

    if (!roleMap || roleMap.length === 0) {
        // this app don't have role map - enable access
        return true;
    }

    var roleMapItem = _.find(roleMap, function(roleItem) {
        return roleItem.route == routeName;
    });
    if (!roleMapItem) {
        // page is not restricted
        return true;
    }

    if (!Meteor.user() || !Meteor.user().profile.role) {
        // user is not logged in
        return false;
    }

    // this page is restricted to some role(s), check if user is in one of allowedRoles
    var allowedRoles = roleMapItem.roles;

    var granted = _.intersection(allowedRoles, [Meteor.user().profile.role]);
    if (!granted || granted.length === 0) {
        return false;
    }

    return true;
};

let loginpath = "/login";

function loginrequired() {
    debugger;
    if (Meteor.userId()) {
        if (!routeGranted(this.route.getName())) {
            Router.go(loginpath);
        } else {
            this.next();
        }
    } else {
        Router.go(loginpath);
    }
};




if (Meteor.isClient) {
    Router.onBeforeAction(loginrequired, {
        except: ['UserLogin', 'home', 'UserRegister', 'forgotpassword', 'resetpassword', 'verify-email'],
    });
}

Router.map(function() {
    this.route('UserLogin', {
        path: '/login',
        fastRender: true
    });
    this.route('UserRegister', {
        path: '/register',
        fastRender: true
    });
    this.route('forgotpassword', {
        path: '/forgot-password',
        fastRender: true
    });
    this.route('resetpassword', {
        path: '/reset-password/:token',
        fastRender: true
    });

    this.route('verify-email', {
    path: '/verify-email/:token',
    action: function() {
        Accounts.verifyEmail(this.params.token, (err) => {
            if (err) {
                if (err.message == 'Verify email link expired [403]' && !verificationFlag) {
                    FlashMessages.sendError("Verify email link expired.");
                } else {
                    FlashMessages.sendError(err.reason);
                }
                Router.go('/login');
            } else {
                FlashMessages.sendSuccess("Your account verified successfully.");
                Router.go('/login');
            }

        });
    }

});
    this.route('changepassword', {
        path: '/change-password',
        fastRender: true
    });
    this.route('home', {
        path: '/',
        fastRender: true,
      //  layoutTemplate: false
    });
    this.route('dashBoard', {
        path: '/dashboard',
        fastRender: true
    });
});
