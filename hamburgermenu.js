class FloatingMenuItem extends React.Component {
  handleClick() {
    this.props.action();
  }

  render() {
    const buttonStyle = {
      backgroundImage: `url(${this.props.icon})`,
    };
    let label;
    if (this.props.label) {
      label = /* #__PURE__ */ React.createElement(
          'label',
          null,
          this.props.label,
      );
    }
    return /* #__PURE__ */ React.createElement(
        'div',
        {
          onClick: this.handleClick.bind(this),
          className: 'floating-menu-item',
        },
        label,
        /* #__PURE__ */ React.createElement(
            'div',
            {
              className: 'floating-menu-icon',
            },
            /* #__PURE__ */ React.createElement(
                'i',
                {
                  className: 'material-icons',
                },
                this.props.icon,
            ),
        ),
    );
  }
}
class FloatingMenu extends React.Component {
  constructor() {
    super();
    this.state = {
      toggled: false,
    };
  }

  toggleMenu() {
    this.setState({
      toggled: !this.state.toggled,
    });
  }

  render() {
    const buttons = [];
    let className = 'floating-menu';
    let icon = 'add';
    if (this.state.toggled) {
      className += ' open';
      icon = 'clear';
      buttons.push(
          /* #__PURE__ */ React.createElement(FloatingMenuItem, {
            label: 'Item 1',
            icon: 'create',
            action: '',
            key: 'i1',
          }),
      );
      buttons.push(
          /* #__PURE__ */ React.createElement(FloatingMenuItem, {
            label: 'Item 2',
            icon: 'drafts',
            action: '',
            key: 'i2',
          }),
      );
    }
    buttons.push(
        /* #__PURE__ */ React.createElement(FloatingMenuItem, {
          label: '',
          icon,
          action: this.toggleMenu.bind(this),
          key: 'm',
        }),
    );
    return /* #__PURE__ */ React.createElement(
        'div',
        {
          className: 'container',
        },
        /* #__PURE__ */ React.createElement(
            'div',
            {
              className,
            },
            buttons,
        ),
    );
  }
}
ReactDOM.render(
    /* #__PURE__ */ React.createElement(FloatingMenu, null),
    document.getElementById('app'),
);
