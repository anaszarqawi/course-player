import Modal from '@/components/Modal';

const motivationalMessages: Record<string, { message: string; emoji: string }> = {
  '20': {
    message: 'لسه في البداية، شد حيلك يا صديقي! عايز أشوف اسمك بين المتصدرين في الليدر بورد!',
    emoji: '🔥',
  },
  '50': {
    message: 'منتصف الطريق! أداءك أفضل من نصف الطلبة، كمّل بنفس الحماس، الليدر بورد في انتظارك!',
    emoji: '📈',
  },
  '75': {
    message: 'عظيم يا صديقي.. أداءك في الكورس ده أفضل من 75% من باقي الطلبة! كمّل شوية كمان وش اسمك هيكون في الليدر بورد!',
    emoji: '🎯',
  },
  '100': {
    message: 'بطل حقيقي! تفوقت على الأغلبية وأثبت جدارتك، اسمك منور في الليدر بورد!',
    emoji: '🎉',
  },
};

const getMotivationalMessage = (progress: number): { message: string; emoji: string } => {
  if (progress < 20) return motivationalMessages['20'];
  if (progress < 50) return motivationalMessages['50'];
  if (progress < 75) return motivationalMessages['75'];
  return motivationalMessages['100'];
};

type LeaderboardModalProps = {
  courseTitle: string;
  progress: number;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const LeaderboardModal = ({ courseTitle, progress, isOpen, setIsOpen }: LeaderboardModalProps) => {
  return (
    <Modal show={isOpen} onClose={() => setIsOpen(false)} classNames={{ body: 'max-w-[500px] text-center' }}>
      <div className="mb-2">{courseTitle}</div>
      <div className="text-2xl text-gray-700 font-semibold mb-4">Leaderboard</div>
      <div dir="rtl" className="flex items-center gap-4 bg-gray-100 p-4 rounded">
        <div className="text-6xl">{getMotivationalMessage(progress).emoji}</div>
        <div className="text-gray-700 text-right ">{getMotivationalMessage(progress).message}</div>
      </div>
      <div className="flex flex-col gap-4 p-6 rounded-3xl bg-gray-100 mt-10">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index} className="w-full h-20 bg-white border border-gray-200 rounded-lg" />
        ))}
      </div>
    </Modal>
  );
};

export default LeaderboardModal;
