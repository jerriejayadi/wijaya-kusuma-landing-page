export default function Footer() {
  return (
    <footer className={`py-4 bg-white w-full max-w-[1240px] px-10 `}>
      <div
        className={`max-w-[1240px] w-full flex items-center justify-between mx-auto text-xs font-semibold`}
      >
        <div>
          &copy;<span className={`ml-1`}>2024</span>
        </div>
        <p className={`tracking-wide `}>Made with love 💙 UD Wijaya Kusuma</p>
        <div></div>
      </div>
    </footer>
  );
}
