/***
    Copyright (c) Microsoft. All rights reserved.  Licensed under the MIT license. See LICENSE file in the project root for full license information.
*/

///<reference path='..\typings\cordova\cordova.d.ts' />
///<reference path='..\typings\winjs\winjs.d.ts'/>
///<reference path='..\typings\azure-mobile-services-client\AzureMobileServicesClient.d.ts'/>
/// <reference path="services.ts" />
/// <reference path="todo.ts" />

module Todo {
  "use strict";

  /**
   * Container for app state
   */
  export var app: ToDo = new ToDo();

}