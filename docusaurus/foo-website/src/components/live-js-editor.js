import React, { useRef } from 'react';

export default function LiveJsEditor() {
  const outputRef = useRef();

  function runCode(code) {
    try {
      // Minimal sandbox: never use eval like this in production!
      // For real use, use an iframe sandbox or something like sandpack.
      // eslint-disable-next-line no-eval
      const result = eval(code);
      outputRef.current.textContent = result;
    } catch (e) {
      outputRef.current.textContent = e.toString();
    }
  }

  return (
    <div>
      <textarea id="js-input" rows={8} cols={40} defaultValue={'console.log("Hello, world!")'} />
      <button
        onClick={() => {
          const code = document.getElementById('js-input').value;
          runCode(code);
        }}
      >
        Run
      </button>
      <pre ref={outputRef}></pre>
    </div>
  );
}
