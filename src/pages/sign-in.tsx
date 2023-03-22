import { Button } from '@/features/ui';
import IconLanguage from '~icons/app-icons/language';

export default function SignIn() {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center bg-[url('@/assets/img/bg-gray-line.png')] px-6">
      <div className="mb-8">
        <img src="/logo/logo-with-text.svg" alt="logo" className="mx-auto w-4/5" />
      </div>
      <div className="w-full rounded-xl border bg-white p-6 shadow-[0_0_2rem_0_rgba(0,0,0,0.16)]">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-3xl text-primary-500">登入</h1>
          <IconLanguage className="text-black-200" />
        </div>

        <form action="">
          <div className="flex flex-col gap-y-6">
            <div>
              <label htmlFor="email" className="text-sm text-black-600">
                信箱
              </label>
              <input
                id="email"
                className="block w-full border-b border-b-black-400 p-2"
                type="text"
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm text-black-600">
                密碼
              </label>
              <input
                id="password"
                className="block w-full border-b border-b-black-400 p-2"
                type="text"
              />
            </div>

            <Button type="button" variant="filled" color="primary" isFullWidth>
              登入
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
