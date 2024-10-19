import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

const Latex = ({ children }) => {
  const latexRef = React.useRef(null);

  React.useEffect(() => {
    if (latexRef.current) {
      katex.render(children, latexRef.current, {
        throwOnError: false,
      });
    }
  }, [children]);

  return <span ref={latexRef} className="inline-block" />;
};

export default Latex;
