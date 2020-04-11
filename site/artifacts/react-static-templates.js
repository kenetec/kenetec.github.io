

import React from 'react'
import universal, { setHasBabelPlugin } from '/home/kenetec/kenetec.github.io/site/node_modules/react-universal-component/dist/index.js'

setHasBabelPlugin()

const universalOptions = {
  loading: () => null,
  error: props => {
    console.error(props.error);
    return <div>An error occurred loading this page's template. More information is available in the console.</div>;
  },
  ignoreBabelRename: true
}

const t_0 = universal(import('/home/kenetec/kenetec.github.io/site/src/pages/404.js'), universalOptions)
      t_0.template = '/home/kenetec/kenetec.github.io/site/src/pages/404.js'
      
const t_1 = universal(import('/home/kenetec/kenetec.github.io/site/src/pages/about.js'), universalOptions)
      t_1.template = '/home/kenetec/kenetec.github.io/site/src/pages/about.js'
      
const t_2 = universal(import('/home/kenetec/kenetec.github.io/site/src/pages/blog.js'), universalOptions)
      t_2.template = '/home/kenetec/kenetec.github.io/site/src/pages/blog.js'
      
const t_3 = universal(import('/home/kenetec/kenetec.github.io/site/src/pages/index.js'), universalOptions)
      t_3.template = '/home/kenetec/kenetec.github.io/site/src/pages/index.js'
      
const t_4 = universal(import('/home/kenetec/kenetec.github.io/site/src/containers/Post'), universalOptions)
      t_4.template = '/home/kenetec/kenetec.github.io/site/src/containers/Post'
      

// Template Map
export default {
  '/home/kenetec/kenetec.github.io/site/src/pages/404.js': t_0,
'/home/kenetec/kenetec.github.io/site/src/pages/about.js': t_1,
'/home/kenetec/kenetec.github.io/site/src/pages/blog.js': t_2,
'/home/kenetec/kenetec.github.io/site/src/pages/index.js': t_3,
'/home/kenetec/kenetec.github.io/site/src/containers/Post': t_4
}
// Not Found Template
export const notFoundTemplate = "/home/kenetec/kenetec.github.io/site/src/pages/404.js"

