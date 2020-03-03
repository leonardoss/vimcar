










----------------
# VimCar - Interview Technical test

Application created to Frontend Technical test of VimCar

##### Application created based on

- Create-react-app
- React 16
- React-Router
- Redux
- Sagas
- Babel
- SASS
- ESLint
- Jest

## How to run
##### Run local
Node - 12.13.1

##### Install dependencies
```
$ yarn install
```
##### Run App
```
$ yarn start
```
##### Run tests
```
$ yarn test
```
Test coverage
```
$ yarn test:coverage
```
The application will be avaible on: http://localhost:3000

### Considerations
#### About the app
- I tried to use stateless components as much as possible, they're easy to read, debug and test.
- I used an approach more close to Atomic design in terms of connect componets to Store. I decided to connect only Home and spread props along the component tree. I like this approach because makes the internal components easy to test
- I choosed to use Sagas because i think they match very well with Redux and make it simple to extend funcionalities for future
- I just added the API key in a .env file, a best solution would be having a env variable in the container, event beeter a service like AWS Secrets Manager to store our API keys
- Regarding the filter there are so many ways to do. I went to an approach more simple as possible.
    - I really liked this approach https://redux.js.org/recipes/computing-derived-data/ but a little complex to start so i decided to be simple.
    - Another way could be using a copy of my 'consumers' (like 'filteredConsumers') to always maintaing the top 10 filled.

#### Tests
I made SnapShots and Smoke test for the all components
##### Missing tests:
- Reducers
- Actions
- Extend coverage for
-- /containers/Home

#### Future improvements
- Add alias to actions, reducers, sagas folders to prevent (../../../)
- Extend tests to close 100% of coverage
- using Flow (or TypeScript) to add types to our code


Thanks for the opportunity :)

----------------------------------



