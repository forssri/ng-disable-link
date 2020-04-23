# NgDisableLink

Directive to disable anchor tag in Angular

## Install

Install the package by running `npm install ng-disable-link`

## Usage

Import the module `NgDisableLinkModule` in the module where the directive will be used
Use the directive `ngDisableLink` with a boolean value in anchor tag

``` html
<a href="https://example.com" [ngDisableLink]="!enabled">Example link</a>
```

In the component, you can implement custom logic to enable/disable the link

``` ts
enabled = false;
```

## Styling

The anchor tag when disabled will have the `aria-disabled` attribute set to true, so css selector `a[aria-disabled="true"]` can be used for styling
