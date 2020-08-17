import {
  Component,
  render,
  createElement
} from './toy-react';

class MyComponent extends Component {
  render() {
    return <div>
    <h1>ABC</h1>
    {this.children}
  </div>;
  }
}

render(<MyComponent id="a" class="c" ><div>123</div><div>456</div></MyComponent>,document.body)