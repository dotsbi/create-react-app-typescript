import * as React from 'react';
import history from '../../utils/history';

const Link = (props: any) => {
  const onClick = (e: MouseEvent) => {
    const aNewTab = e.metaKey || e.ctrlKey;
    const anExternalLink = props.href.startsWith('http');

    if (!aNewTab && !anExternalLink) {
      e.preventDefault();
      history.push(props.href);
    }
  };

  return <a {...props} href="#" onClick={onClick} />;
};

export default Link;
