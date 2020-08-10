# Pwc

Este proyecto se generó con la versión 10.0.5 de Angular CLI.10.0.5. , se integró con firebase, existen 5 componentes importantes y una clase para conexión 

1) En la carpeta shared\navbar se encuentra el componente navbar en este está el maquetado y lógica de negocio para el menu y sub menus 
2) En la carpeta auth se encuentra los componentes de login y register en estos se encuentra el maquetado y lógica de negocio para el registro e ingreso 
3) En la carpeta form se encuentra el componente form en este esta un CRUD para ingresar actualizar y eliminar registros
4) En la carpeta hom se encuentra el componente hom en este esta un banner con imágenes de PWC
5) En la carpeta services esta la clase para conexión y funciones para acceder a firebase

el funcionamiento de la web app es el siguiente existen menus y sub menus, en este esta la opción de iniciar sesión , en esta opción existe un formulario donde la persona puede ingresar, en caso de no estar registrado existe una opción en el formulario para registrarse, al estar registrado lo redireccionara a otro formulario donde podrá ingresar, editar y eliminar registros los cuales se encuentran en la BD de firebase

Esta app ya se encuentra en un ambiente productivo alojado el firebase, podrá acceder a ella en la siguiente dirección  bdpwc-81b38.web.app

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
