The `.vue` component base environment config.

# Initial

```
yarn install
```

Go to [yarn].

# Develop

```
npm run dev
```

Use [parcel] run the demo.

# Build

```
npm run build
```

Use [rollup] package the component to `dist` directory.

# Usage

```
import hello from 'st-hello'

Vue.component('st-hello', hello)
new Vue({
  el: "#demo"
})
```

[rollup]: https://rollupjs.org
[parcel]: https://parceljs.org
[yarn]: https://yarnpkg.com