# PeliculasApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

# API endpoints

These endpoints allow you to handle Stripe subscriptions for Publish and Analyze.

## GET
`official client only` [/1/billing/retrieve-billing-data.json](#get-1billingretrieve-billing-datajson) <br/>

## POST
`official client only` [/1/billing/start-trial.json](#post-1billingstart-trialjson) <br/>
`official client only` [/1/billing/cancel-trial.json](#post-1billingcancel-trialjson) <br/>
`official client only` [/1/billing/start-or-update-subscription.json](#post-1billingstart-or-update-subscriptionjson) <br/>
`official client only` [/1/billing/cancel-subscription.json](#post-1billingcancel-subscriptionjson) <br/>
___

### GET /1/billing/retrieve-billing-data.json
Get basics billing data for the current user or for a given organization ID (as long as the current user is part of that organization). (it has been poorly implemented for now to unblock the Analyze team, and should only be used by Analyze) `official client only`




#### Put
[api/v1/members/bulk/{institutionId}](#put-apiv1membersbulkinstitutionid)
#### Patch
/api/v1/members/assign/{operation} </br>
/api/v1/members/beneficiary/{id} </br>
/api/v1/members/{id} </br>
#### Delete
/api/v1/members/beneficiary/companyId/{id} </br>
/api/v1/members/beneficiary/ownerId/{id} </br>
/api/v1/members/beneficiary/{id} </br>
/api/v1/members/companyId/{id} </br>
/api/v1/members/{id} </br>

### PUT /api/v1/members/bulk/{institutionId}
asdasd
