import React from 'react';

function IfElse() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  let content;
  if (isLoggedIn) {
    content = <p>환영합니다, 사용자님!</p>;
  } else {
    content = <p>로그인 해주세요.</p>;
  }

  return (
    <div>
      IfElse Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {content}
    </div>
  );
}

function Ternary() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      삼항연산자 Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {isLoggedIn ? <p>환영합니다, 사용자님!</p> : <p>로그인 해주세요.</p>}
    </div>
  );
}

function LogicalAnd() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      논리 AND Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {isLoggedIn && <p>환영합니다, 사용자님!</p>}
    </div>
  );
}

function LogicalOr() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <div>
      논리 OR Component
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Toggle Login</button>
      {!isLoggedIn || <p>환영합니다, 사용자님!</p>}
    </div>
  );
}

export default function Condition() {
  return (
    <div>
      <h1>Condition Page</h1>
      <IfElse />
      <Ternary />
      <LogicalAnd />
      <LogicalOr />
    </div>
  );
}