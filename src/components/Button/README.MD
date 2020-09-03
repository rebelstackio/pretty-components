# Pretty Buttons
## usage
### JS Component
```js
import {PrettyButton} from '@rebelstack-io/pretty-components';
// empty button
PrettyButton();
// type can be: primary | danger | dashed | link
PrettyButton({type: 'primary'}, 'Clickme');
// button link
PrettyButton({type: 'link', href: '#ref'}, 'Click to scroll');
```

### WebComponent 
```html
<pretty-button type="primary" value="Primary" onclick="myFunction" size="default"></pretty-button>
```
## Attributes
```js
type = ["primary", "default", "danger", "dashed"] 
//(if not defined is asumed default)
value = "TEXT-INSIDE-BUTTON" 
//(if not defined it come with "value" word)
onclick = "nameOfMyFunction"
size = ["large", "small", "default"] 
//(if not defined default asumed)
```
