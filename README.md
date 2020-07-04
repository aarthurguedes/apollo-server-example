# apollo-server-example

Simple monorepository using pnpm for dependency management. On the server, dependencies like apollo-server-express and express were used. In the web layer, React was used, in addition to apollo dependencies.  

#### To run server layer: 
```
pnpm run dev --filter @dev-demands/server
```

#### To run web layer:
```
pnpm run start --filter @dev-demands/web
```
