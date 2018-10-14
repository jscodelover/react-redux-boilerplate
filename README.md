# Codebase

Stripped down codebase to start the any project.

## Folder structure

```
.
├── config                   # All config-related code
├── lib                      # All third library wrappers and initialization
├── public                   # Static public assets (not imported anywhere in source code)
├── src                      # Application source code
│   ├── index.html           # Main HTML page container
│   ├── main.jsx             # Application bootstrap and rendering
│   ├── assets               # Application assets
│   ├── components           # Global Reusable Components
│   ├── modules              # Components that dictate major functionalities
│   ├── pages                # Main route definitions and split points
│   ├── services             # Application wide services
│   ├── store                # Redux-specific pieces
│   │   ├── createStore.js   # Create and instrument redux store
│   │   ├── reducers.js      # Reducer registry and injection
│   │   └── rootSaga.js      # Application root saga
│   ├── styles               # Application-wide styles
│   └── utils                # Application-wide utilities
└── webpack                  # Webpack-specific pieces
```

## Developer guidelines

### modules

- Are concerned with functionalities
- Contains components, container, store, services, utilities, etc.

### pages

- Composition of modules
- Are concerned with routes
- Are main split points

### components

- Are concerned with how things look.
- Don't specify how the data is loaded
- Receive data and callbacks exclusively via props.
- Rarely have their own state (when they do, it’s UI state rather than data).
- React components that are driven solely by props and don't talk to Redux. Same as “dumb components”. They should stay the same regardless of your router, data fetching library, etc.

### containers

- Are concerned with how things work.
- Provide the data and behavior to presentational or other container components.
- Call actions and provide these as callbacks to components
- Most of the type are stateful
- Are generated using HOC component()
- are aware of Redux, Router, etc
