# react-contenteditable

React Compenent for a div with `contentEditable = "true"`


## Usage 

```javascript
var ContentEditable = require("react-contenteditable");
var MyComponent = React.createClass({
    getInitialState: function(){
      return {html: "<b>Hello <i>World</i></b>"};
    },

    handleChange: function(evt){
      this.setState({html: evt.target.value});
    },

    handleFocus: function(){
        // do something
    }

    handleBlur: function(){
        // do something
    }

    render: function(){
      return <ContentEditable
                html={this.state.html} // innerHTML of the editable div
                disabled={false}       // use true to disable edition
                onChange={this.handleChange} // handle innerHTML change
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
              />
    }
  });
```

## Structure of this repository
+ lib/ compiled javascript, usable directly in the browser
+ src/ source javascript. Uses JSX and ES6.
