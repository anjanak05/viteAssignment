import React from 'react';
import EnglishPortal from './EnglishPortal';
import HindiPortal from './HindiPortal';

class BiLingualPortal extends React.Component {
  state = {
    language: 'english'
  }

  handleLanguageToggle = () => {
    this.setState(prevState => ({
      language: prevState.language === 'english' ? 'hindi' : 'english'
    }));
  }

  render() {
    return (
      <div>
        <button onClick={this.handleLanguageToggle}>Toggle Language</button>
        {this.state.language === 'english' ? <EnglishPortal /> : <HindiPortal />}
      </div>
    );
  }
}

export default BiLingualPortal;
