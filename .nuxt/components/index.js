export { default as Beta } from '../../components/beta/Beta.vue'
export { default as Footer } from '../../components/footer/Footer.vue'
export { default as Gallery } from '../../components/gallery/Gallery.vue'
export { default as Key } from '../../components/get-key/Key.vue'
export { default as Intro } from '../../components/intro/Intro.vue'
export { default as Nav } from '../../components/navbar/Nav.vue'

export const LazyBeta = import('../../components/beta/Beta.vue' /* webpackChunkName: "components/beta/Beta" */).then(c => c.default || c)
export const LazyFooter = import('../../components/footer/Footer.vue' /* webpackChunkName: "components/footer/Footer" */).then(c => c.default || c)
export const LazyGallery = import('../../components/gallery/Gallery.vue' /* webpackChunkName: "components/gallery/Gallery" */).then(c => c.default || c)
export const LazyKey = import('../../components/get-key/Key.vue' /* webpackChunkName: "components/get-key/Key" */).then(c => c.default || c)
export const LazyIntro = import('../../components/intro/Intro.vue' /* webpackChunkName: "components/intro/Intro" */).then(c => c.default || c)
export const LazyNav = import('../../components/navbar/Nav.vue' /* webpackChunkName: "components/navbar/Nav" */).then(c => c.default || c)
