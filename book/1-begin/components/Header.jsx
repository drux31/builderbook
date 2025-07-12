import Link from 'next/link';

const Header = () => (
  <div>
    <Link href="/login">
      <span style={{ margin: '0px 20px 0px auto' }}>Log in</span>
    </Link>
  </div>
);

export default Header;
