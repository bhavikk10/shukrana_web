import { SubtleIcon } from './SubtleIcon';

export default function Divider() {
  return (
    <div className="flex items-center justify-center w-full py-16 relative">
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent flex-grow max-w-[200px] md:max-w-[400px] opacity-80"></div>
      <div className="mx-6 text-gold relative flex items-center justify-center">
        <SubtleIcon className="w-3 h-3" />
      </div>
      <div className="h-[1px] bg-gradient-to-l from-transparent via-gold to-transparent flex-grow max-w-[200px] md:max-w-[400px] opacity-80"></div>
    </div>
  );
}
