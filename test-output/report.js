$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/feature.feature");
formatter.feature({
  "line": 1,
  "name": "http://examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"\u003cusername\u003e\" \u0026 password \"\u003cpassword\u003e\" and click on login",
  "keyword": "Then "
});
formatter.examples({
  "line": 7,
  "name": "",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 8,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;1"
    },
    {
      "cells": [
        "admin",
        "admin"
      ],
      "line": 9,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2"
    },
    {
      "cells": [
        "aadmin",
        "aadmin"
      ],
      "line": 10,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;3"
    },
    {
      "cells": [
        "badmin",
        "badmin"
      ],
      "line": 11,
      "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 9,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"admin\" \u0026 password \"admin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 48853914404,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 4009503179,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "admin",
      "offset": 19
    },
    {
      "val": "admin",
      "offset": 38
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 9508231761,
  "status": "passed"
});
formatter.scenario({
  "line": 10,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"aadmin\" \u0026 password \"aadmin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 7043535113,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 10206706726,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "aadmin",
      "offset": 19
    },
    {
      "val": "aadmin",
      "offset": 39
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 7229021082,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Data Driven Login to examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;data-driven-login-to-examples.codecharge.com/taskmanager/default.php;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "launch the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "open the application",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "enter username as \"badmin\" \u0026 password \"badmin\" and click on login",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "a_validLogin.launch_the_browser()"
});
formatter.result({
  "duration": 7127017655,
  "status": "passed"
});
formatter.match({
  "location": "a_validLogin.open_the_application()"
});
formatter.result({
  "duration": 13065510767,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "badmin",
      "offset": 19
    },
    {
      "val": "badmin",
      "offset": 39
    }
  ],
  "location": "a_validLogin.enter_username_as_password_and_click_on_login(String,String)"
});
formatter.result({
  "duration": 5503834782,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "add Task in examples.codecharge.com/TaskManager/Default.php",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;add-task-in-examples.codecharge.com/taskmanager/default.php",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "open the Application",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "click on Administration2",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "login with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "click on add task",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "enter all fields",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "select Start Date",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "select End Date",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "click on Add button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "assert if added task is shown in task list table",
  "keyword": "Then "
});
formatter.match({
  "location": "c_addTask.open_the_Application()"
});
formatter.result({
  "duration": 10559620161,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    }
  ],
  "location": "c_addTask.click_on_Administration(int)"
});
formatter.result({
  "duration": 4381202303,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.login_with_valid_credentials()"
});
formatter.result({
  "duration": 2007704976,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.click_on_add_task()"
});
formatter.result({
  "duration": 5686403289,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.enter_all_fields()"
});
formatter.result({
  "duration": 2130077271,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.select_Start_Date()"
});
formatter.result({
  "duration": 7139192481,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.select_End_Date()"
});
formatter.result({
  "duration": 2962866370,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.click_on_Add_button()"
});
formatter.result({
  "duration": 9650924684,
  "status": "passed"
});
formatter.match({
  "location": "c_addTask.assert_if_added_task_is_shown_in_task_list_table()"
});
formatter.result({
  "duration": 193463446,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Search Task in Type",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;search-task-in-type",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "open the application7",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "select task in Type",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "click on Search",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "Assert if previously added task is in the table or not",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "7",
      "offset": 20
    }
  ],
  "location": "d_searchTask.open_the_application(int)"
});
formatter.result({
  "duration": 14263401982,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.select_task_in_Type()"
});
formatter.result({
  "duration": 328743397,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.click_on_Search()"
});
formatter.result({
  "duration": 6780207543,
  "status": "passed"
});
formatter.match({
  "location": "d_searchTask.assert_if_previously_added_task_is_in_the_table_or_not()"
});
formatter.result({
  "duration": 173888990,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Sort the Task Table according to finish date",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;sort-the-task-table-according-to-finish-date",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "view the website",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "click on finish date",
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "Assert if finish date is as same as previously added task finish date",
  "keyword": "Then "
});
formatter.match({
  "location": "e_sortTaskTable.view_the_website()"
});
formatter.result({
  "duration": 15765610991,
  "status": "passed"
});
formatter.match({
  "location": "e_sortTaskTable.click_on_finish_date()"
});
formatter.result({
  "duration": 3249784590,
  "status": "passed"
});
formatter.match({
  "location": "e_sortTaskTable.assert_if_finish_date_is_as_same_as_previously_added_task_finish_date()"
});
formatter.result({
  "duration": 134137085,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "screenshot the type Type from the page",
  "description": "",
  "id": "http://examples.codecharge.com/taskmanager/default.php;screenshot-the-type-type-from-the-page",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 36,
  "name": "Open the web application",
  "keyword": "Given "
});
formatter.step({
  "line": 37,
  "name": "select task in Type and search",
  "keyword": "When "
});
formatter.step({
  "line": 38,
  "name": "take screenshot the Displayed tasks",
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "assert the tasks",
  "keyword": "Then "
});
formatter.match({
  "location": "f_screenshot.open_the_web_application()"
});
formatter.result({
  "duration": 16121845766,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.select_task_in_Type_and_search()"
});
formatter.result({
  "duration": 4355449600,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.take_screenshot_the_Displayed_tasks()"
});
formatter.result({
  "duration": 5910070301,
  "status": "passed"
});
formatter.match({
  "location": "f_screenshot.assert_the_tasks()"
});
formatter.result({
  "duration": 143678754,
  "status": "passed"
});
});