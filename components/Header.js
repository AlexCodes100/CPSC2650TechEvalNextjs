import Link from 'next/link';

export default function Header() {
    return (
      <div className="w-full py-2 bg-blue-600 fixed top-0 left-0">
        <h1 className="text-white text-center text-lg">Tech Eval ToDo list</h1>
        <nav className="flex justify-center mt-2">
          <Link legacyBehavior href="/"><a className="text-white px-2">Home</a></Link>
          <Link legacyBehavior href="/about"><a className="text-white px-2">About</a></Link>
        </nav>
      </div>
    );
  }
  