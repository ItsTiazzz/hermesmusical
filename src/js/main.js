import '../scss/styles.scss'

import {injectNavbar, injectFooter, injectLucide, injectHeader} from './components.js';

injectNavbar();
injectHeader();
injectFooter();
await injectLucide();
