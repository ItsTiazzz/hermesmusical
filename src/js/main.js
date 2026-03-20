import '../scss/styles.scss'

import {injectNavbar, injectFooter, injectLucide, injectHeader, injectBootstrap} from './components.js';

injectNavbar();
injectHeader();
injectFooter();
await injectLucide();
await injectBootstrap();
