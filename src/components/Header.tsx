import { NavLink } from 'react-router';

export function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-slate-300 gap-3">
      <div>Logo</div>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <NavLink to="/" className="text-slate-300 hover:text-slate-400">
              홈
            </NavLink>
          </li>
          <li>
            <NavLink to="/product-detail" className="text-slate-300 hover:text-slate-400">
              상품 상세
            </NavLink>
          </li>
          <li>
            <NavLink to="/cart" className="text-slate-300 hover:text-slate-400">
              장바구니
            </NavLink>
          </li>
          <li>
            <NavLink to="/order" className="text-slate-300 hover:text-slate-400">
              주문
            </NavLink>
          </li>
           <li>
            <NavLink to="/concerts" className="text-slate-300 hover:text-slate-400">
              콘서트
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
