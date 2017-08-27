import '/imports/api/constant'

window.ParsleyConfig = {
    errorTemplate: '<span></span>',
    errorsWrapper: '<span></span>',
    errorClass: 'has-error',
    successClass: '',
    trigger: 'blur',
    errorsContainer(pEle) {
        const $err = pEle.$element.siblings('.error-text');
        return $err;
    },
    classHandler(el) {
        return el.$element.parent();
    }
};


this.loginUser = (email, password,callback) => {
    Meteor.loginWithPassword(email, password, error => {
        if (error) {
            FlashMessages.sendError(error.reason);
        } else {
            FlashMessages.sendSuccess("User logged in successfully.");
            Router.go('/');
        }
    });
}

this.readCookie = (name) => {
    let nameEQ = name + "=";
    let ca = document.cookie.split(';');
    for(let i=0;i < ca.length;i++) {
        let c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

this.convertToBase64 = (id,callback) => {
      //Read File
      var selectedFile = document.getElementById(id).files;
      //Check File is not Empty
      if (selectedFile.length > 0) {
         // Select the very first file from list
         var fileToLoad = selectedFile[0];
         // FileReader function for read the file.
        var fileReader = new FileReader();
         var base64;
         // Onload of file read the file content
          fileReader.onload = function(fileLoadedEvent) {
            base64 = fileLoadedEvent.target.result;
              // Print data in console
             callback(base64);
          };
          // Convert data to base64
          fileReader.readAsDataURL(fileToLoad);
      }
  }

// get current User
Template.registerHelper('currentUser', () => {
    if (Meteor.userId())
        return Meteor.user();
    else
        return '';
});
this.showLoadingMask = () => {
    $(".loading").css("display", "block");
}

this.hideLoadingMask = () => {
    $(".loading").css("display", "none");
}
// load form validation message
Handlebars.registerHelper('loadFormValidationMessage', () => {
    Meteor.defer(() => {
        for (let i = 0; i < validationJSON.length; i++) {
            const items = $(validationJSON[i].selector);
            for (let j = 0; j < validationJSON[i].attributes.length; j++) {
                items.attr(validationJSON[i].attributes[j].name, validationJSON[i].attributes[j].value);
            }
        }
    });
    return "";
});
Handlebars.registerHelper('radioIsSelected', function (val1,val2) {
    if (val1==val2)
        return 'checked';
    else
        return '';
});

Template.registerHelper('isWeb', () => {
  var isiDevice = /ipad|iphone|ipod/i.test(navigator.userAgent.toLowerCase());
  var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
  var isWindowsPhone = /windows phone/i.test(navigator.userAgent.toLowerCase());
  if (isiDevice || isAndroid || isWindowsPhone)
    return false;
  else
    return true;

});

Handlebars.registerHelper("optionIsSelected", function(desiredValue, itemValue) {
    if ($.isArray(desiredValue)) {
        return ($.inArray(itemValue, desiredValue) >= 0) ? "selected" : "";
    } else {
        return desiredValue == itemValue ? "selected" : "";

    }
});

this.getBase64 = function(input, imgId) {
    if (input.files && input.files[0]) {
        var FR = new FileReader();
        FR.onload = function(e) {
            $('#' + imgId).attr("src", e.target.result);
        };
        FR.readAsDataURL(input.files[0]);
    }
}
