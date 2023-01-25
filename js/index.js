import {layoutControl} from './layout/index.js'
import {documentHelper} from './model/documentHelper.js'

// get the layout first
let layout = (new layoutControl()).Run();
// layout will fetch the components and sections


let docu = new documentHelper(layout.Header);
docu.setContent(layout);