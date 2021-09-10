class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: 'Hello world',
    };
  }

  handleChange = () => {
    this.setState({
      value: this.refs.textarea.value,
    });
  };

  rawMarkup = () => {
    return {
      __html: marked(this.state.value),
    };
  };

  render() {
    return (
      <div className="markdownEditor">
        <div className="input">
          <h3>Input</h3>
          <textarea
            onChange={this.handleChange}
            ref="textarea"
            defaultValue={this.state.value}
          />
        </div>
        <div className="output">
          <h3>Output</h3>
          <div className="content" dangerouslySetInnerHTML={this.rawMarkup()} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<MarkdownEditor />, document.querySelector('.container'));
