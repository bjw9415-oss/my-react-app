import { Content } from '@/components/Content';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { useToggle } from '@/hooks/useToggle';

export default function UseTogglePage() {
  const { value: isOpen, setTrue: handleClick, setFalse: handleClose } = useToggle();
  // const [isOpen, setIsOpen] = React.useState(false);

  // const handleClick = () => {
  //   setIsOpen(true);
  // };

  // const handleClose = () => {
  //   setIsOpen(false);
  // };

  const { value: checked, toggle: handleChange } = useToggle();

  // const [checked, setChecked] = React.useState(false);
  // const handleChange = () => {
  //   setChecked(!checked);
  // };

  const { value, toggle } = useToggle();
  // const [checked1, setChecked1] = React.useState(false);
  // const handleChange1 = () => {
  //   setChecked1(!checked1);
  // };

  return (
    <div>
      <Header />
      <Content className="flex flex-col gap-2">
        UseToggle Page
        <input type="checkbox" checked={checked} onChange={handleChange} />
        <input type="checkbox" checked={value} onChange={toggle} />
        <button type="button" onClick={handleClick}>
          모달
        </button>
        <Modal isOpen={isOpen} onClose={handleClose} />
      </Content>
      <Footer />
    </div>
  );
}

// 모달 컴포넌트
function Modal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;

  return (
    <div className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
        <h3 className="mb-4 text-2xl font-bold">🎉 모달 창</h3>
        <p className="mb-6 text-gray-600">
          useToggle Hook을 사용하여 모달을 쉽게 관리할 수 있습니다.
        </p>
        <button
          onClick={onClose}
          className="w-full rounded-lg bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-600"
        >
          닫기
        </button>
      </div>
    </div>
  );
}
