import * as React from 'react';
// import { Layout } from 'antd';
import styles from './style.less';

// const { Header } = Layout;

// @observer
class WelcomeComponent extends React.Component<{}, {}> {

  constructor(props: {}) {
    super(props);
  }

  componentDidMount() {
    console.log('');
  }

  render() {
    return (
      <section>
        <header>
          <div className={styles.bgScene} />
          <div className={styles.intro}>
            <p className={styles.introText}>
              欢迎使用 react-sail
            </p>
          </div>
        </header>
      </section>
    );
  }

}

export default WelcomeComponent;
