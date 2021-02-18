# pokedex

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# POKEDEX
## Por Mateo Montanez Baron


Para la elaboración de este proyecto se utilizó:

- Vuejs ^2
- VueCli
- PokeApi

## Planeación

El proyecto lo dividí en dos vistas Home y PokemonsDashboard
- **Home:** 
    Aquí se encontrará la vista asociada con la ruta "/"
- **PokemonsDashboard:**
    Aqui irán los respectivos componentes de **busqueda**, **lista de pokemons** y **el footer con los buttons**. Asociado a la ruta "/pokemons"

Sin embargo, pensé como prioridad, controlar los llamados de la API. Creando asi el archivo **api.js**, donde utilicé fetch y llamadas asíncronas 

Siendo asi, en total fueron 6 componentes:
**-DetailsModal:** Para los detalles del pokemón. Estos se pediran al api.js y se alojarán en el modal
**-ListButton:** Su funcion es servir de template para crear botones en el Footer del PokemonsDashboard. Decidí no utilizar <slot> porque creí no serían suficientes botones, sorprendido caí en cuenta que fue un error menor que me pudo haber salvado tiempo
**-PokemonItem:** Componente individual que representa cada pokemon (item) de las lista de pokemones
**-SearchFilter:** Componente vista asignado al filtrado de los pokemones segun la lista seleccionada. 
**-Loader:** Componente para el loader de la aplicación
**-NotFound:** Componente utilizado para rutas erroneas, o para cuando no hay pokemones en la lista

El proyecto lo empecé a las 8:00 am del dia 16 de Febrero del 2021
**Para la elobarcion de este readme utilicé dillinger**

