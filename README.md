## hubaaa:easy-service-config

Automatically loads all the [loginWith](http://docs.meteor.com/#/full/meteor_loginwithexternalservice) related service configurations it finds in the settings file under `serviceConfigurations` into meteor's `ServiceConfiguration.configurations` collection, so you won't have to configure your app's accounts-whatever package in meteor manually on first time use.