MVC vs REST vs serverside rendering

## DOM

dom is the memory object model of the html file

then makes requests for links in the html (css, js ... )

### Head of line blocking

http 1.1 sequential loading - depends on the slowest loading file

#### HTTP/2

parallel loading used - multiple requests using 1 connection

can push html linked files

java -> js

jvm -> js machine in browser

jdk -> HTML5 API

## Angular

### Typescript / Coffeescript

### Framework vs Library

react is a **library** full of components

programs uses components in a library

**framework** is a outer shell that takes in programs written in a specific way to reduce the amount of code written

#### React - AngularMaterialUI - Bootstrap

only UI

#### Angular

singular page apps

## Modules & Components

`ng new <appname> ` is like spring initialiser

`ng install --save <module> ` is like adding to pom.xml (actually package.json)

`ng serve -o ` <=> `mvn spring-boot:run`

1 component consists of 3 files (css, html, ts)

1 module = module.ts

component must belong to a module or it cannot be shown

module holds components and services

app loads modules, modules loads components

`ng generate component <folderName>/<componentName> --flat --skip-tests`

`ng g c <folderName>/<componentName> --flat --skip-tests`

#### there are standalone components

those are very new, dont require modules

## structural directives

ngFor

ngIf

generates new elements <...></...>


# RECAP
