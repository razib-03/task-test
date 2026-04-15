import {
  ChevronsUpDown,
  Building2,
  BadgeInfo,
  FileChartLine,
  PieChart,
  CircleDollarSign,
  ArrowLeftRight,
  Users,
  Files,
  Edit,
  Sparkles,
  LayoutDashboard,
  Home,
  ListTodo,
  Settings,
  UserCog,
  ChevronRight,
  ChevronDown,
  MoreHorizontal,
  Eye,
  Plus,
  Pen,
  ArrowLeft,
  ChevronsLeft,
  Scale,
  BarChart3,
  X,
  Menu,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router";
import imgPhotoByLeeJafa from "figma:asset/7a1142da1e8789ea222bb53ce473b585eaef1d78.png";

function DropdownMenu({
  isOpen,
  onClose,
  onRename,
  onDelete,
}: {
  isOpen: boolean;
  onClose: () => void;
  onRename: () => void;
  onDelete: () => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={dropdownRef}
      className="absolute right-0 top-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-[9999] min-w-[140px]"
    >
      <button
        onClick={(e) => {
          e.stopPropagation();
          onRename();
          onClose();
        }}
        className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
      >
        <Pen size={14} />
        Rename
      </button>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
          onDelete();
        }}
        className="w-full px-4 py-2 text-left text-sm text-red-600 hover:bg-red-50 flex items-center gap-2"
      >
        <span className="text-red-600">×</span>
        Delete
      </button>
    </div>
  );
}

function EditContactModal({
  isOpen,
  onClose,
  phone,
  email,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  phone: string;
  email: string;
  onSave: (phone: string, email: string) => void;
}) {
  const [phoneValue, setPhoneValue] = useState(phone);
  const [emailValue, setEmailValue] = useState(email);

  useEffect(() => {
    setPhoneValue(phone);
    setEmailValue(email);
  }, [phone, email]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(phoneValue, emailValue);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[10000]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-white rounded-[16px] p-6 w-[400px] shadow-xl">
        <h2 className="text-xl font-semibold mb-4 font-['Work_Sans:SemiBold',sans-serif] text-[#2e3338]">
          Edit Contact Information
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-[#657381] mb-2 font-['Work_Sans:Medium',sans-serif]">
              Phone Number
            </label>
            <input
              type="tel"
              value={phoneValue}
              onChange={(e) => setPhoneValue(e.target.value)}
              className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1652f0] font-['Work_Sans:Medium',sans-serif] text-[14px]"
              placeholder="(123) 456-7890"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-[#657381] mb-2 font-['Work_Sans:Medium',sans-serif]">
              Email Address
            </label>
            <input
              type="email"
              value={emailValue}
              onChange={(e) => setEmailValue(e.target.value)}
              className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1652f0] font-['Work_Sans:Medium',sans-serif] text-[14px]"
              placeholder="email@example.com"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#657381] hover:bg-gray-100 rounded-lg transition-colors font-['Work_Sans:Medium',sans-serif]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1652f0] hover:bg-[#1141c7] rounded-lg transition-colors font-['Work_Sans:Medium',sans-serif]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function EditNoteModal({
  isOpen,
  onClose,
  note,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  note: string;
  onSave: (note: string) => void;
}) {
  const [noteValue, setNoteValue] = useState(note);

  useEffect(() => {
    setNoteValue(note);
  }, [note]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(noteValue);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[10000]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-white rounded-[16px] p-6 w-[400px] shadow-xl">
        <h2 className="text-xl font-semibold mb-4 font-['Work_Sans:SemiBold',sans-serif] text-[#2e3338]">
          Edit Note
        </h2>

        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-[#657381] mb-2 font-['Work_Sans:Medium',sans-serif]">
              Note
            </label>
            <textarea
              value={noteValue}
              onChange={(e) => setNoteValue(e.target.value)}
              className="w-full px-3 py-2 border border-[#e9ecef] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1652f0] font-['Work_Sans:Medium',sans-serif] text-[14px] min-h-[100px] resize-vertical"
              placeholder="Enter note..."
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6 justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-[#657381] hover:bg-gray-100 rounded-lg transition-colors font-['Work_Sans:Medium',sans-serif]"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-[#1652f0] hover:bg-[#1141c7] rounded-lg transition-colors font-['Work_Sans:Medium',sans-serif]"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

function DeleteConfirmationModal({
  isOpen,
  onClose,
  onConfirm,
}: {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[10000]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] w-[400px] shadow-xl">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[26px] text-black">
            <p className="css-4hzbpn leading-[32px]">
              Delete account
            </p>
          </div>
          <button
            onClick={onClose}
            className="relative shrink-0 size-[24px] cursor-pointer"
          >
            <X className="text-[#2e3338]" size={16} />
          </button>
        </div>
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
          <p className="css-ew64yg leading-[24px]">
            Please confirm you want to delete your account.
          </p>
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
          <button
            onClick={onClose}
            className="h-[48px] relative rounded-[100px] shrink-0 w-full border border-[#2e3338] border-solid hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
                <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
                  <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f575e] text-[16px] text-center">
                    <p className="css-ew64yg leading-[24px]">
                      Nevermind
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={() => {
              onConfirm();
              onClose();
            }}
            className="bg-[#ea333c] h-[48px] relative rounded-[100px] shrink-0 w-full hover:bg-[#d12a33] transition-colors"
          >
            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
                <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
                  <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
                    <p className="css-ew64yg leading-[24px]">
                      Yes, delete
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function RenameModal({
  isOpen,
  onClose,
  currentName,
  onSave,
}: {
  isOpen: boolean;
  onClose: () => void;
  currentName: string;
  onSave: (newName: string) => void;
}) {
  const [name, setName] = useState(currentName);

  useEffect(() => {
    setName(currentName);
  }, [currentName]);

  if (!isOpen) return null;

  const handleSave = () => {
    if (name.trim()) {
      onSave(name);
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-[10000]"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}
    >
      <div className="bg-white content-stretch flex flex-col gap-[24px] items-start p-[24px] relative rounded-[16px] w-[400px] shadow-xl">
        <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
          <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[26px] text-black">
            <p className="css-4hzbpn leading-[32px]">
              Rename account
            </p>
          </div>
          <button
            onClick={onClose}
            className="relative shrink-0 size-[24px] cursor-pointer"
          >
            <X className="text-[#2e3338]" size={16} />
          </button>
        </div>
        <div className="content-stretch flex flex-col gap-[8px] relative shrink-0 w-full">
          <label className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[14px]">
            <p className="css-ew64yg leading-[20px]">
              Account name
            </p>
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="h-[48px] px-[16px] py-[12px] border border-[#dee2e6] rounded-[8px] w-full font-['Work_Sans:Regular',sans-serif] text-[16px] text-[#2e3338] focus:outline-none focus:border-[#2e3338]"
            placeholder="Enter account name"
          />
        </div>
        <div className="content-stretch flex flex-col gap-[16px] items-end relative shrink-0 w-full">
          <button
            onClick={onClose}
            className="h-[48px] relative rounded-[100px] shrink-0 w-full border border-[#2e3338] border-solid hover:bg-gray-50 transition-colors"
          >
            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
                <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
                  <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#4f575e] text-[16px] text-center">
                    <p className="css-ew64yg leading-[24px]">
                      Cancel
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>
          <button
            onClick={handleSave}
            className="bg-[#2e3338] h-[48px] relative rounded-[100px] shrink-0 w-full hover:bg-[#1f2529] transition-colors"
          >
            <div className="flex flex-row justify-center overflow-clip rounded-[inherit] size-full">
              <div className="content-stretch flex items-start justify-center px-[16px] py-0 relative size-full">
                <div className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0">
                  <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white">
                    <p className="css-ew64yg leading-[24px]">
                      Save
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

function UseOfAccountDropdown({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (value: string) => void;
}) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside,
      );
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const options = [
    "Income",
    "Part-time retirement",
    "Full-time retirement",
    "Wealth accumulation",
    "Speculation",
    "Education",
    "Wealth preservation",
    "Other",
  ];

  return (
    <div
      ref={dropdownRef}
      className="absolute left-0 top-full mt-1 bg-white rounded-[16px] shadow-lg border border-[#e9ecef] py-4 px-4 z-[9999] min-w-[200px]"
      style={{ boxShadow: "0px 8px 10px 0px rgba(0,0,0,0.05)" }}
    >
      <div className="flex flex-col gap-6">
        {options.map((option) => (
          <button
            key={option}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(option);
              onClose();
            }}
            className="w-full text-left text-sm text-black hover:text-[#1652f0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px]"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

function Frame104() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[24px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#657381] text-[14px] uppercase">
          <p className="css-ew64yg leading-[normal]">
            Total AUM
          </p>
        </div>
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px]">
          <p className="css-ew64yg leading-[27px]">
            $300,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame105() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[24px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#657381] text-[14px] uppercase">
          <p className="css-ew64yg leading-[normal]">
            Total Assets
          </p>
        </div>
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px]">
          <p className="css-ew64yg leading-[27px]">
            $700,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame106() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[24px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#657381] text-[14px] uppercase">
          <p className="css-ew64yg leading-[normal]">
            Total Debt
          </p>
        </div>
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px]">
          <p className="css-ew64yg leading-[27px]">
            $20,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame107() {
  return (
    <div className="bg-white flex-[1_0_0] min-h-px min-w-[200px] relative rounded-[16px]">
      <div className="content-stretch flex flex-col gap-[4px] items-start leading-[0] p-[24px] relative w-full">
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[#657381] text-[14px] uppercase">
          <p className="css-ew64yg leading-[normal]">
            Net worth
          </p>
        </div>
        <div className="css-g0mm18 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center relative shrink-0 text-[#2e3338] text-[22px]">
          <p className="css-ew64yg leading-[27px]">
            $680,000.00
          </p>
        </div>
      </div>
    </div>
  );
}

function Frame108() {
  return (
    <div className="content-stretch flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame104 />
      <Frame105 />
      <Frame106 />
      <Frame107 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338] text-[22px]">
        <p className="css-4hzbpn leading-[27px]">Accounts</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="h-[32px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[24px] py-0 relative size-full">
          <Frame9 />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip px-[24px] py-0 relative shrink-0"
      data-name="label"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1652f0] text-[14px] text-center">
        <p className="css-ew64yg leading-[21px]">Investments</p>
      </div>
    </div>
  );
}

function PiecesTabsActive() {
  return (
    <div
      className="content-stretch flex flex-col gap-[14px] items-center relative shrink-0"
      data-name="Pieces / Tabs / Active"
    >
      <Label />
      <div
        className="bg-[#1652f0] h-[2px] shrink-0 w-full"
        data-name="border"
      />
    </div>
  );
}

function Label1() {
  return (
    <div
      className="content-stretch flex items-center overflow-clip px-[24px] py-0 relative shrink-0"
      data-name="label"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#6a7178] text-[14px] text-center">
        <p className="css-ew64yg leading-[21px]">Banking</p>
      </div>
    </div>
  );
}

function PiecesTabsInactive() {
  return (
    <div
      className="content-stretch flex flex-col gap-[15px] items-center relative shrink-0"
      data-name="Pieces / Tabs / Inactive"
    >
      <Label1 />
      <div
        className="bg-[#ced4da] h-px shrink-0 w-full"
        data-name="border"
      />
    </div>
  );
}

function TabsDefault() {
  return (
    <div
      className="content-stretch flex h-[37px] items-center relative shrink-0 w-full"
      data-name="Tabs / Default"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#ced4da] border-b border-solid inset-0 pointer-events-none"
      />
      <PiecesTabsActive />
      <PiecesTabsInactive />
    </div>
  );
}

function Frame91() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Frame10 />
      <TabsDefault />
    </div>
  );
}

function IconsUnsorted() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icons / unsorted"
    >
      <ChevronsUpDown size={16} className="text-[#657381]" />
    </div>
  );
}

function Content() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">
        Account
      </p>
      <IconsUnsorted />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-0 relative w-full">
          <Content />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content1() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 font-['Work_Sans:Medium',sans-serif] font-medium leading-[0] relative shrink-0 text-[#272b30] text-[0px]">
        <p className="css-ew64yg leading-[21px] mb-0 text-[14px]">
          Tax free (TFSA)
        </p>
        <p className="css-ew64yg leading-[18px] text-[#6a7178] text-[12px]">
          WD12345
        </p>
      </div>
    </div>
  );
}

function TableDesktopSmallCellText() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <Content1 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content2() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        <p className="css-ew64yg mb-0">Retirement (RRSP)</p>
        <p className="css-ew64yg text-[#6a7178]">LO12345</p>
      </div>
    </div>
  );
}

function TableDesktopSmallCellText1() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <Content2 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content3() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        <p className="css-ew64yg mb-0">RESP</p>
        <p className="css-ew64yg text-[#6a7178]">JJ12345</p>
      </div>
    </div>
  );
}

function TableDesktopSmallCellText2() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[24px] py-[8px] relative w-full">
          <Content3 />
        </div>
      </div>
    </div>
  );
}

function TableDesktopSmallColumnTextNoZebra() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
      data-name="Table / Desktop / Small/Column/Text/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort />
      <TableDesktopSmallCellText />
      <TableDesktopSmallCellText1 />
      <TableDesktopSmallCellText2 />
    </div>
  );
}

function IconsUnsorted1() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icons / unsorted"
    >
      <ChevronsUpDown size={16} className="text-[#657381]" />
    </div>
  );
}

function Content4() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">
        Status
      </p>
      <IconsUnsorted1 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort1() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
          <Content4 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content5() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00a062] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Active</p>
      </div>
    </div>
  );
}

function Tag() {
  return (
    <div
      className="bg-[#c8ffea] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content5 />
    </div>
  );
}

function Content6() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <Tag />
    </div>
  );
}

function TableDesktopSmallCellTag() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Tag"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content6 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content7() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ea333c] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Pending</p>
      </div>
    </div>
  );
}

function Tag1() {
  return (
    <div
      className="bg-[#ffefae] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content7 />
    </div>
  );
}

function Content8() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <Tag1 />
    </div>
  );
}

function TableDesktopSmallCellTag1() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Tag"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content8 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content9() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#272b30] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Closed</p>
      </div>
    </div>
  );
}

function Tag2() {
  return (
    <div
      className="bg-[#e9ecef] relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <div className="content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[inherit]">
        <Content9 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[100px]"
      />
    </div>
  );
}

function Tag3() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0"
      data-name="Tag"
    >
      <Tag2 />
    </div>
  );
}

function Content10() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <Tag3 />
    </div>
  );
}

function TableDesktopSmallCellTag2() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Tag"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content10 />
        </div>
      </div>
    </div>
  );
}

function TableDesktopSmallColumnTagNoZebra() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
      data-name="Table / Desktop / Small/Column/Tag/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort1 />
      <TableDesktopSmallCellTag />
      <TableDesktopSmallCellTag1 />
      <TableDesktopSmallCellTag2 />
    </div>
  );
}

function IconsUnsorted2() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icons / unsorted"
    >
      <ChevronsUpDown size={16} className="text-[#657381]" />
    </div>
  );
}

function Content11() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">
        Holder
      </p>
      <IconsUnsorted2 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort2() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
          <Content11 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content12() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        Sarah Smith
      </p>
    </div>
  );
}

function TableDesktopSmallCellText3() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content12 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content13() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        <p className="css-ew64yg mb-0">Sarah Smith</p>
        <p className="css-ew64yg">Mary Smith</p>
      </div>
    </div>
  );
}

function TableDesktopSmallCellText4() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content13 />
        </div>
      </div>
    </div>
  );
}

function TableDesktopSmallColumnTagNoZebra1() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
      data-name="Table / Desktop / Small/Column/Tag/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort2 />
      {[...Array(2).keys()].map((_, i) => (
        <TableDesktopSmallCellText3 key={i} />
      ))}
      <TableDesktopSmallCellText4 />
    </div>
  );
}

function IconsUnsorted3() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icons / unsorted"
    >
      <ChevronsUpDown size={16} className="text-[#657381]" />
    </div>
  );
}

function Content14() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">
        Use of account
      </p>
      <IconsUnsorted3 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort3() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
          <Content14 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsAngleDown() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / angle-down"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronDown className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Content15({
  selectedValue,
  onClick,
}: {
  selectedValue: string;
  onClick: () => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0 w-full cursor-pointer"
      data-name="Content"
      onClick={onClick}
    >
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        {selectedValue}
      </p>
      <IconsAngleDown />
    </div>
  );
}

function TableDesktopSmallCellTextIcon() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Income");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text+Icon"
    >
      <div className="overflow-visible rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <div className="relative w-full">
            <Content15
              selectedValue={selectedValue}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            <UseOfAccountDropdown
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsAngleDown1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / angle-down"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronDown className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Content16({
  selectedValue,
  onClick,
}: {
  selectedValue: string;
  onClick: () => void;
}) {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0 w-full cursor-pointer"
      data-name="Content"
      onClick={onClick}
    >
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        {selectedValue}
      </p>
      <IconsAngleDown1 />
    </div>
  );
}

function TableDesktopSmallCellTextIcon1() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("Income");

  const handleSelect = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text+Icon"
    >
      <div className="overflow-visible rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <div className="relative w-full">
            <Content16
              selectedValue={selectedValue}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            />
            <UseOfAccountDropdown
              isOpen={isDropdownOpen}
              onClose={() => setIsDropdownOpen(false)}
              onSelect={handleSelect}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableDesktopSmallColumnTagNoZebra2() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
      data-name="Table / Desktop / Small/Column/Tag/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort3 />
      {[...Array(2).keys()].map((_, i) => (
        <TableDesktopSmallCellTextIcon key={i} />
      ))}
      <TableDesktopSmallCellTextIcon1 />
    </div>
  );
}

function IconsUnsorted4() {
  return (
    <div
      className="relative shrink-0 size-[16px]"
      data-name="Icons / unsorted"
    >
      <ChevronsUpDown size={16} className="text-[#657381]" />
    </div>
  );
}

function Content17() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:SemiBold',sans-serif] font-semibold leading-[21px] relative shrink-0 text-[#657381] text-[14px]">
        Value
      </p>
      <IconsUnsorted4 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort4() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-0 relative w-full">
          <Content17 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content18() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <p className="css-ew64yg font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] relative shrink-0 text-[#272b30] text-[14px]">
        $100,000.00 CAD
      </p>
    </div>
  );
}

function TableDesktopSmallCellText5() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content18 />
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function Content19() {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0 w-full"
      data-name="Content"
    >
      <p className="css-4hzbpn flex-[1_0_0] font-['Work_Sans:Medium',sans-serif] font-medium leading-[21px] min-h-px min-w-px relative text-[#272b30] text-[14px]">
        $100,000.00 CAD
      </p>
    </div>
  );
}

function TableDesktopSmallCellText6() {
  return (
    <div
      className="bg-white relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Cell/Text"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[8px] relative w-full">
          <Content19 />
        </div>
      </div>
    </div>
  );
}

function TableDesktopSmallColumnTagNoZebra3() {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative"
      data-name="Table / Desktop / Small/Column/Tag/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort4 />
      {[...Array(2).keys()].map((_, i) => (
        <TableDesktopSmallCellText5 key={i} />
      ))}
      <TableDesktopSmallCellText6 />
    </div>
  );
}

function TableDesktopSmallHeaderCellTextSort5() {
  return (
    <div
      className="bg-[#f9fafe] relative shrink-0 w-full"
      data-name="Table / Desktop / Small/Header Cell/Text+Sort"
    >
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start px-[8px] py-0 w-full h-[48px]" />
      </div>
      <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
    </div>
  );
}

function IconsTimes({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer hover:bg-gray-100 rounded"
      data-name="Icons / times2"
      onClick={onClick}
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <MoreHorizontal className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Content20({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="content-stretch flex h-[48px] items-center relative shrink-0"
      data-name="Content"
    >
      <IconsTimes onClick={onClick} />
    </div>
  );
}

function TableDesktopSmallCellText7() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] =
    useState(false);
  const [accountName, setAccountName] = useState("Checking");

  const handleRename = () => {
    setIsRenameModalOpen(true);
  };

  const handleSaveRename = (newName: string) => {
    setAccountName(newName);
    console.log("Account renamed to:", newName);
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    // Add delete functionality here
  };

  return (
    <>
      <div
        className="bg-white relative shrink-0 w-full"
        data-name="Table / Desktop / Small/Cell/Text"
      >
        <div className="flex flex-col items-end overflow-visible rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end px-[24px] py-[8px] relative w-full">
            <div className="relative">
              <Content20
                onClick={() =>
                  setIsDropdownOpen(!isDropdownOpen)
                }
              />
              <DropdownMenu
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                onRename={handleRename}
                onDelete={() => setIsDeleteModalOpen(true)}
              />
            </div>
          </div>
        </div>
        <div className="absolute inset-0 pointer-events-none rounded-[inherit] shadow-[inset_0px_-1px_0px_0px_#e9ecef]" />
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
      <RenameModal
        isOpen={isRenameModalOpen}
        onClose={() => setIsRenameModalOpen(false)}
        currentName={accountName}
        onSave={handleSaveRename}
      />
    </>
  );
}

function IconsTimes1({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer hover:bg-gray-100 rounded"
      data-name="Icons / times2"
      onClick={onClick}
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <MoreHorizontal className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Content21({ onClick }: { onClick: () => void }) {
  return (
    <div
      className="content-stretch flex h-[48px] items-center justify-end relative shrink-0 w-full"
      data-name="Content"
    >
      <IconsTimes1 onClick={onClick} />
    </div>
  );
}

function TableDesktopSmallCellText8() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    useState(false);
  const [isRenameModalOpen, setIsRenameModalOpen] =
    useState(false);
  const [accountName, setAccountName] = useState("Savings");

  const handleRename = () => {
    setIsRenameModalOpen(true);
  };

  const handleSaveRename = (newName: string) => {
    setAccountName(newName);
    console.log("Account renamed to:", newName);
  };

  const handleDelete = () => {
    console.log("Delete clicked");
    // Add delete functionality here
  };

  return (
    <>
      <div
        className="bg-white relative shrink-0 w-full"
        data-name="Table / Desktop / Small/Cell/Text"
      >
        <div className="flex flex-col items-end overflow-visible rounded-[inherit] size-full">
          <div className="content-stretch flex flex-col items-end px-[24px] py-[8px] relative w-full">
            <div className="relative">
              <Content21
                onClick={() =>
                  setIsDropdownOpen(!isDropdownOpen)
                }
              />
              <DropdownMenu
                isOpen={isDropdownOpen}
                onClose={() => setIsDropdownOpen(false)}
                onRename={handleRename}
                onDelete={() => setIsDeleteModalOpen(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <DeleteConfirmationModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDelete}
      />
      <RenameModal
        isOpen={isRenameModalOpen}
        onClose={() => setIsRenameModalOpen(false)}
        currentName={accountName}
        onSave={handleSaveRename}
      />
    </>
  );
}

function TableDesktopSmallColumnTagNoZebra4() {
  return (
    <div
      className="content-stretch flex flex-col items-end relative shrink-0 w-[74px]"
      data-name="Table / Desktop / Small/Column/Tag/No Zebra"
    >
      <TableDesktopSmallHeaderCellTextSort5 />
      {[...Array(2).keys()].map((_, i) => (
        <TableDesktopSmallCellText7 key={i} />
      ))}
      <TableDesktopSmallCellText8 />
    </div>
  );
}

function TableDesktopSmallNoZebra() {
  return (
    <div
      className="bg-white relative shrink-0 w-full overflow-visible"
      data-name="Table / Desktop / Small / No Zebra"
    >
      <div className="content-stretch flex items-center overflow-visible relative rounded-[inherit] min-w-max">
        <TableDesktopSmallColumnTextNoZebra />
        <TableDesktopSmallColumnTagNoZebra />
        <TableDesktopSmallColumnTagNoZebra1 />
        <TableDesktopSmallColumnTagNoZebra2 />
        <TableDesktopSmallColumnTagNoZebra3 />
        <TableDesktopSmallColumnTagNoZebra4 />
      </div>
      <div
        aria-hidden="true"
        className="absolute border-[#e9ecef] border-solid border-t inset-[-1px_0_0_0] pointer-events-none"
      />
    </div>
  );
}

function Frame50() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-visible relative rounded-[8px] shrink-0 w-full">
      <TableDesktopSmallNoZebra />
    </div>
  );
}

function Accounts() {
  return (
    <div
      className="bg-white content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-0 overflow-visible pb-0 pt-[24px] px-0 relative rounded-[16px]"
      data-name="Accounts"
    >
      <Frame91 />
      <Frame50 />
    </div>
  );
}

function Frame97() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Accounts />
    </div>
  );
}

function IconsEnvelope() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / envelope"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <Eye className="text-[#1652f0]" size={16} />
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1652f0] text-[16px] text-center uppercase">
        <p className="css-ew64yg leading-[24px]">view</p>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0"
      data-name="Button"
    >
      <Frame />
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[24px] h-[27px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338] text-[22px]">
        <p className="css-4hzbpn leading-[27px]">Workflows</p>
      </div>
      <Button />
    </div>
  );
}

function SeparatorPadding() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 0"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame109() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#2e3338] text-[16px] w-[min-content]">
        <p className="css-4hzbpn leading-[24px]">IPS group</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#657381] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">
          Client signature
        </p>
      </div>
    </div>
  );
}

function Content22() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#12558e] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">In progress</p>
      </div>
    </div>
  );
}

function Tag4() {
  return (
    <div
      className="bg-[#e5f0fe] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content22 />
    </div>
  );
}

function IconsArrowRight() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / arrow-right"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronRight className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Frame71() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame109 />
      <Tag4 />
      <IconsArrowRight />
    </div>
  );
}

function Frame110() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-w-full relative shrink-0 text-[#2e3338] text-[16px] w-[min-content]">
        <p className="css-4hzbpn leading-[24px]">
          Account opening
        </p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[#657381] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">
          Process request
        </p>
      </div>
    </div>
  );
}

function Content23() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#ea333c] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">
          Needs attention
        </p>
      </div>
    </div>
  );
}

function Tag5() {
  return (
    <div
      className="bg-[#ffefae] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content23 />
    </div>
  );
}

function IconsArrowRight1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / arrow-right"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronRight className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Frame72() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full">
      <Frame110 />
      <Tag5 />
      <IconsArrowRight1 />
    </div>
  );
}

function Frame98() {
  return (
    <div className="bg-white relative rounded-[16px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <Frame61 />
        <SeparatorPadding />
        <Frame71 />
        <div
          className="bg-[#e9ecef] h-px shrink-0 w-full"
          data-name="Separator"
        />
        <Frame72 />
        <div
          className="bg-[#e9ecef] h-px shrink-0 w-full"
          data-name="Separator"
        />
        <Frame72 />
        <div
          className="bg-[#e9ecef] h-px shrink-0 w-full"
          data-name="Separator"
        />
        <Frame71 />
        <div
          className="bg-[#e9ecef] h-px shrink-0 w-full"
          data-name="Separator"
        />
        <Frame71 />
      </div>
    </div>
  );
}

function Frame99() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame98 />
    </div>
  );
}

function Frame75() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative">
      <div className="flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[22px] w-[216px]">
        <p className="css-4hzbpn leading-[27px]">
          Relationships
        </p>
      </div>
    </div>
  );
}

function IconsEnvelope1() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / envelope"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <Plus className="text-[#1652f0]" size={16} />
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope1 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#1652f0] text-[16px] text-center uppercase">
        <p className="css-ew64yg leading-[24px]">Add</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0"
      data-name="Button"
    >
      <Frame3 />
    </div>
  );
}

function NameAndContact() {
  return (
    <div
      className="content-stretch flex gap-[16px] items-center relative shrink-0 w-full"
      data-name="Name and contact"
    >
      <Frame75 />
      <Button1 />
    </div>
  );
}

function SeparatorPadding3() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 0"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame55() {
  return (
    <div className="bg-[#e6f2ef] content-stretch flex items-center justify-center px-0 py-[3px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[12px]">
        <p className="css-ew64yg leading-[18px]">JS</p>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[21px]">John Smith</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="css-ew64yg leading-[18px]">Parent</p>
      </div>
    </div>
  );
}

function Content24() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00a062] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Active</p>
      </div>
    </div>
  );
}

function Tag6() {
  return (
    <div
      className="bg-[#c8ffea] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content24 />
    </div>
  );
}

function IconsArrowRight2() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / arrow-right"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronRight className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Frame66() {
  return (
    <div className="content-stretch flex gap-[16px] h-[39px] items-center relative shrink-0 w-full">
      <Frame55 />
      <Frame64 />
      <Tag6 />
      <IconsArrowRight2 />
    </div>
  );
}

function SeparatorPadding1() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 1"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame56() {
  return (
    <div className="bg-[#e6f2ef] content-stretch flex items-center justify-center px-0 py-[3px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[12px]">
        <p className="css-ew64yg leading-[18px]">MS</p>
      </div>
    </div>
  );
}

function Frame67() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[21px]">Mary Smith</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="css-ew64yg leading-[18px]">Parent</p>
      </div>
    </div>
  );
}

function Content25() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00a062] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Active</p>
      </div>
    </div>
  );
}

function Tag7() {
  return (
    <div
      className="bg-[#c8ffea] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content25 />
    </div>
  );
}

function IconsArrowRight3() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / arrow-right"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronRight className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Frame68() {
  return (
    <div className="content-stretch flex gap-[16px] h-[39px] items-center relative shrink-0 w-full">
      <Frame56 />
      <Frame67 />
      <Tag7 />
      <IconsArrowRight3 />
    </div>
  );
}

function SeparatorPadding2() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 2"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame57() {
  return (
    <div className="bg-[#e6f2ef] content-stretch flex items-center justify-center px-0 py-[3px] relative rounded-[40px] shrink-0 size-[24px]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[12px]">
        <p className="css-ew64yg leading-[18px]">JS</p>
      </div>
    </div>
  );
}

function Frame69() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338]">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center relative shrink-0 text-[14px]">
        <p className="css-ew64yg leading-[21px]">Jason Smith</p>
      </div>
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center relative shrink-0 text-[12px]">
        <p className="css-ew64yg leading-[18px]">Sibling</p>
      </div>
    </div>
  );
}

function Content26() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#fd4049] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Prospect</p>
      </div>
    </div>
  );
}

function Tag8() {
  return (
    <div
      className="bg-[#ffefae] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content26 />
    </div>
  );
}

function IconsArrowRight4() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / arrow-right"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronRight className="text-[#2e3338]" size={16} />
      </div>
    </div>
  );
}

function Frame65() {
  return (
    <div className="content-stretch flex gap-[16px] h-[39px] items-center relative shrink-0 w-full">
      <Frame57 />
      <Frame69 />
      <Tag8 />
      <IconsArrowRight4 />
    </div>
  );
}

function ClientInfo() {
  return (
    <div
      className="bg-white relative rounded-[16px] shrink-0 w-full"
      data-name="Client info"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <NameAndContact />
        <SeparatorPadding3 />
        <Frame66 />
        <SeparatorPadding1 />
        <Frame68 />
        <SeparatorPadding2 />
        <Frame65 />
      </div>
    </div>
  );
}

function Frame94() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <ClientInfo />
    </div>
  );
}

function Frame101() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[24px] items-start min-h-px min-w-[300px] relative">
      <Frame99 />
      <Frame94 />
    </div>
  );
}

function IconsEnvelope2() {
  return (
    <div
      className="shrink-0 size-[24px]"
      data-name="Icons / envelope"
    />
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope2 />
    </div>
  );
}

function Button2() {
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0"
      data-name="Button"
    >
      <Frame4 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[24px] items-center relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338] text-[22px]">
        <p className="css-4hzbpn leading-[27px]">Summary</p>
      </div>
      <Button2 />
    </div>
  );
}

function NameAndContact1() {
  return (
    <div
      className="content-stretch flex flex-col items-start relative shrink-0 w-full"
      data-name="Name and contact"
    >
      <Frame59 />
    </div>
  );
}

function SeparatorPadding7() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 7"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame88() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Client type
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">Individual</p>
      </div>
    </div>
  );
}

function SeparatorPadding14() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 14"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame79() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] text-[14px] uppercase">
        <p className="css-4hzbpn leading-[normal]">Household</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#1652f0] text-[0px]">
        <p className="css-4hzbpn decoration-solid font-['Work_Sans:Bold',sans-serif] font-bold leading-[21px] text-[14px] underline">
          The Smiths
        </p>
      </div>
    </div>
  );
}

function SeparatorPadding5() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 0"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame83() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-px min-w-px relative">
      <div className="flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#657381] text-[14px] uppercase w-[206px]">
        <p className="css-4hzbpn leading-[normal]">Contact</p>
      </div>
    </div>
  );
}

function IconsEnvelope3({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer"
      data-name="Icons / envelope"
      onClick={onClick}
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <Pen className="text-[#1652f0]" size={16} />
      </div>
    </div>
  );
}

function Frame5({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope3 onClick={onClick} />
    </div>
  );
}

function Button3({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0"
      data-name="Button"
    >
      <Frame5 onClick={onClick} />
    </div>
  );
}

function Frame103() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phone, setPhone] = useState("(123) 456-7890");
  const [email, setEmail] = useState("sarahsmith@email.com");

  const handleSave = (newPhone: string, newEmail: string) => {
    setPhone(newPhone);
    setEmail(newEmail);
  };

  return (
    <>
      <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px relative">
        <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[21px] min-h-px min-w-px relative text-[#2e3338] text-[14px]">
          <p className="css-4hzbpn mb-0">{phone}</p>
          <p className="css-4hzbpn">{email}</p>
        </div>
        <Button3 onClick={() => setIsModalOpen(true)} />
      </div>
      <EditContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        phone={phone}
        email={email}
        onSave={handleSave}
      />
    </>
  );
}

function Frame80() {
  return (
    <div className="content-stretch flex gap-[10px] h-[42px] items-start relative shrink-0 w-full">
      <Frame83 />
      <Frame103 />
    </div>
  );
}

function SeparatorPadding6() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 1"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame81() {
  return (
    <div className="content-stretch flex gap-[10px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Date of birth
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">
          October 12, 1983
        </p>
      </div>
    </div>
  );
}

function SeparatorPadding8() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 2"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame89() {
  return (
    <div className="content-stretch flex gap-[10px] items-center relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Employment
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[21px] min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn mb-0">Role</p>
        <p className="css-4hzbpn">Company</p>
      </div>
    </div>
  );
}

function SeparatorPadding4() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 4"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame86() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Risk level
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">
          Conservative
        </p>
      </div>
    </div>
  );
}

function SeparatorPadding12() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 12"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame82() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">Advisor</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">
          Advisor name
        </p>
      </div>
    </div>
  );
}

function SeparatorPadding9() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 9"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame90() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Advisor team
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">Team name</p>
      </div>
    </div>
  );
}

function SeparatorPadding10() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 10"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame84() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">PM Team</p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">Team name</p>
      </div>
    </div>
  );
}

function SeparatorPadding11() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 11"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function Frame85() {
  return (
    <div className="content-stretch flex gap-[10px] h-[21px] items-center leading-[0] relative shrink-0 text-[14px] w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center min-h-px min-w-px relative text-[#657381] uppercase">
        <p className="css-4hzbpn leading-[normal]">
          Portfolio manager
        </p>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center min-h-px min-w-px relative text-[#2e3338]">
        <p className="css-4hzbpn leading-[21px]">PM Name</p>
      </div>
    </div>
  );
}

function SeparatorPadding13() {
  return (
    <div
      className="h-px relative shrink-0 w-full"
      data-name="Separator / Padding 13"
    >
      <div
        className="absolute bg-[#e9ecef] inset-0"
        data-name="Separator"
      />
    </div>
  );
}

function IconsEnvelope4({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="relative shrink-0 size-[24px] cursor-pointer"
      data-name="Icons / envelope"
      onClick={onClick}
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <Pen className="text-[#1652f0]" size={16} />
      </div>
    </div>
  );
}

function Frame6({ onClick }: { onClick?: () => void }) {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope4 onClick={onClick} />
    </div>
  );
}

function Button4({ onClick }: { onClick?: () => void }) {
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0"
      data-name="Button"
    >
      <Frame6 onClick={onClick} />
    </div>
  );
}

function Frame100() {
  const [isEditNoteModalOpen, setIsEditNoteModalOpen] =
    useState(false);
  const [noteText, setNoteText] = useState(
    "This client has a secondary email ssmith@email.com",
  );

  const handleSaveNote = (newNote: string) => {
    setNoteText(newNote);
  };

  return (
    <>
      <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-start min-h-px min-w-px relative">
        <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] min-h-px min-w-px relative text-[#2e3338] text-[14px]">
          <p className="css-4hzbpn leading-[21px]">
            {noteText}
          </p>
        </div>
        <Button4 onClick={() => setIsEditNoteModalOpen(true)} />
      </div>
      <EditNoteModal
        isOpen={isEditNoteModalOpen}
        onClose={() => setIsEditNoteModalOpen(false)}
        note={noteText}
        onSave={handleSaveNote}
      />
    </>
  );
}

function Frame87() {
  return (
    <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] min-h-px min-w-px relative text-[#657381] text-[14px] uppercase">
        <p className="css-4hzbpn leading-[normal]">Note</p>
      </div>
      <Frame100 />
    </div>
  );
}

function Frame92() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <SeparatorPadding7 />
      <Frame88 />
      <SeparatorPadding14 />
      <Frame79 />
      <SeparatorPadding5 />
      <Frame80 />
      <SeparatorPadding6 />
      <Frame81 />
      <SeparatorPadding8 />
      <Frame89 />
      <SeparatorPadding4 />
      <Frame86 />
      <SeparatorPadding12 />
      <Frame82 />
      <SeparatorPadding9 />
      <Frame90 />
      <SeparatorPadding10 />
      <Frame84 />
      <SeparatorPadding11 />
      <Frame85 />
      <SeparatorPadding13 />
      <Frame87 />
    </div>
  );
}

function ClientInfo1() {
  return (
    <div
      className="bg-white relative rounded-[16px] shrink-0 w-full"
      data-name="Client info"
    >
      <div className="content-stretch flex flex-col gap-[24px] items-start p-[24px] relative w-full">
        <NameAndContact1 />
        <Frame92 />
      </div>
    </div>
  );
}

function Frame93() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-[300px] relative">
      <ClientInfo1 />
    </div>
  );
}

function Frame102() {
  return (
    <div className="content-stretch flex flex-wrap gap-[24px] items-start relative shrink-0 w-full">
      <Frame101 />
      <Frame93 />
    </div>
  );
}

function Frame78() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] items-start relative shrink-0 w-full max-w-full overflow-visible">
      <Frame97 />
      <Frame102 />
    </div>
  );
}

function Frame95() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full">
      <Frame78 />
    </div>
  );
}

function Frame77() {
  return (
    <div className="bg-[#f9fafe] content-stretch flex flex-col gap-[24px] items-start px-[20px] md:px-[40px] py-[24px] w-full max-w-full overflow-y-visible flex-1">
      <Frame108 />
      <Frame95 />
    </div>
  );
}

function IconsEnvelope5() {
  return (
    <div
      className="relative shrink-0 size-[24px]"
      data-name="Icons / envelope"
    >
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ArrowLeft className="text-[#1652F0]" size={16} />
      </div>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <IconsEnvelope5 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#0645ad] text-[16px] text-center uppercase">
        <p className="css-ew64yg leading-[24px] text-[rgb(22,82,240)]">Back</p>
      </div>
    </div>
  );
}

function Button5() {
  const navigate = useNavigate();
  
  return (
    <div
      className="content-stretch flex items-start justify-center overflow-clip relative shrink-0 cursor-pointer"
      data-name="Button"
      onClick={() => navigate("/households")}
    >
      <Frame7 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[10px] h-[48px] items-center min-h-px min-w-px relative">
      <Button5 />
    </div>
  );
}

function IconsAngleDoubleRight({
  onClick,
  isCollapsed,
}: {
  onClick?: () => void;
  isCollapsed?: boolean;
}) {
  return (
    <div
      className="relative rounded-[30px] shrink-0 size-[40px] cursor-pointer hover:bg-gray-50 transition-colors"
      data-name="Icons / angle-double-right"
      onClick={onClick}
    >
      <div
        aria-hidden="true"
        className="absolute border border-[#e9ecef] border-solid inset-0 pointer-events-none rounded-[30px]"
      />
      <div className="absolute flex flex-col inset-[20%] justify-center items-center">
        <ChevronsLeft
          className={`text-[#2e3338] transition-transform duration-300 ease-in-out ${isCollapsed ? "rotate-180" : "rotate-0"}`}
          size={16}
        />
      </div>
    </div>
  );
}

function Frame8({
  onToggleCollapse,
  isCollapsed,
}: {
  onToggleCollapse?: () => void;
  isCollapsed?: boolean;
}) {
  return (
    <button className="cursor-pointer relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[10px] items-center px-[32px] py-[24px] relative w-full">
          <Frame1 />
          <IconsAngleDoubleRight
            onClick={onToggleCollapse}
            isCollapsed={isCollapsed}
          />
        </div>
      </div>
    </button>
  );
}

function Frame2() {
  return (
    <div className="h-0 relative shrink-0 w-full">
      <div className="size-full" />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <BadgeInfo className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame12 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">
          Client details
        </p>
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="h-[48px] relative shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <FileChartLine className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame26() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame25 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">IPS</p>
      </div>
    </div>
  );
}

function Frame17() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame26 />
        </div>
      </div>
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <PieChart className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame27 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">Investments</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame28 />
        </div>
      </div>
    </div>
  );
}

function Frame29() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <Building2 className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame29 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">Bank</p>
      </div>
    </div>
  );
}

function Frame24() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <CircleDollarSign className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame31 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">
          Fee management
        </p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame32 />
        </div>
      </div>
    </div>
  );
}

function Frame33() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <ArrowLeftRight className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame34() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame33 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">Funding</p>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame34 />
        </div>
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <Users className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame35 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">
          Relationships
        </p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <Files className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame37 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">Documents</p>
      </div>
    </div>
  );
}

function Frame19() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame38 />
        </div>
      </div>
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <Edit className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame39 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">Notes</p>
      </div>
    </div>
  );
}

function Frame21() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame40 />
        </div>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <Sparkles className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame41 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">AI Assistant</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[48px] relative rounded-[16px] shrink-0 w-full">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame42 />
        </div>
      </div>
    </div>
  );
}

function Frame111() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[24px]">
      <ListTodo className="text-[#2e3338]" size={16} />
    </div>
  );
}

function Frame112() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <Frame111 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-end leading-[0] relative shrink-0 text-[#2e3338] text-[16px]">
        <p className="css-ew64yg leading-[1.4]">View tasks</p>
      </div>
    </div>
  );
}

function Frame113() {
  const navigate = useNavigate();
  
  return (
    <div 
      className="h-[48px] relative rounded-[16px] shrink-0 w-full cursor-pointer hover:bg-gray-100 transition-colors"
      onClick={() => navigate("/clients/sarah-smith/tasks")}
    >
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[32px] py-[8px] relative size-full">
          <Frame112 />
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative w-full">
      <Frame15 />
      <Frame17 />
      <Frame23 />
      <Frame24 />
      <Frame18 />
      <Frame11 />
      <Frame20 />
      <Frame19 />
      <Frame21 />
      <Frame113 />
      <Frame22 />
    </div>
  );
}

function Phone({
  onToggleCollapse,
  isCollapsed,
}: {
  onToggleCollapse?: () => void;
  isCollapsed?: boolean;
}) {
  return (
    <div
      className="content-stretch flex flex-[1_0_0] flex-col h-full items-start min-h-px min-w-px relative overflow-hidden"
      data-name="Phone"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e9ecef] border-r border-solid inset-0 pointer-events-none"
      />
      <Frame8
        onToggleCollapse={onToggleCollapse}
        isCollapsed={isCollapsed}
      />
      <Frame2 />
      <Frame52 />
    </div>
  );
}

function Frame51({
  onToggleCollapse,
  isCollapsed,
}: {
  onToggleCollapse?: () => void;
  isCollapsed?: boolean;
}) {
  return (
    <div
      className={`content-stretch flex items-start px-0 py-[16px] shrink-0 overflow-hidden transition-all duration-300 ease-in-out ${
        isCollapsed
          ? "w-0 opacity-0"
          : "w-full md:w-[256px] opacity-100"
      }`}
    >
      <Phone
        onToggleCollapse={onToggleCollapse}
        isCollapsed={isCollapsed}
      />
    </div>
  );
}

function Frame58() {
  return (
    <div className="aspect-[32/32] relative rounded-[40px] shrink-0 w-full">
      <div className="content-stretch flex items-center justify-center overflow-clip px-0 py-0 relative rounded-[inherit] size-full">
        <div
          className="relative shrink-0 size-[80px] rounded-full bg-[#ECFDF5] flex items-center justify-center"
          data-name="Photo by Lee Jafa"
        >
          <span className="text-[#374151] text-2xl font-semibold">SS</span>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute border-4 border-[#c8ffea] border-solid inset-[-4px] pointer-events-none rounded-[44px]"
      />
    </div>
  );
}

function Frame70() {
  return (
    <div className="content-stretch flex flex-col items-center relative shrink-0 w-[78px]">
      <Frame58 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex items-start relative shrink-0">
      <Frame70 />
    </div>
  );
}

function Frame74() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Bold',sans-serif] font-bold justify-center leading-[0] relative shrink-0 text-[#2e3338] text-[36px] text-center">
        <p className="css-ew64yg leading-[45px]">Sarah Smith</p>
      </div>
    </div>
  );
}

function Content27() {
  return (
    <div
      className="content-stretch flex gap-[8px] h-[24px] items-center overflow-clip relative shrink-0"
      data-name="Content"
    >
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold justify-center leading-[0] relative shrink-0 text-[#00a062] text-[12px] text-center">
        <p className="css-ew64yg leading-[18px]">Active</p>
      </div>
    </div>
  );
}

function Tag9() {
  return (
    <div
      className="bg-[#c8ffea] content-stretch flex flex-col items-center overflow-clip px-[8px] py-0 relative rounded-[100px] shrink-0"
      data-name="Tag"
    >
      <Content27 />
    </div>
  );
}

function History() {
  return (
    <div
      className="content-stretch flex gap-[10px] items-center relative shrink-0"
      data-name="History"
    >
      <Tag9 />
      <div className="css-g0mm18 flex flex-col font-['Work_Sans:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#657381] text-[12px]">
        <p className="css-ew64yg leading-[18px]">Est. 2021</p>
      </div>
    </div>
  );
}

function Frame73() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0">
      <Frame74 />
      <History />
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-wrap gap-[24px] items-center min-h-px min-w-0 relative">
      <Frame63 />
      <Frame73 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-center min-h-px min-w-px relative self-stretch">
      <Frame60 />
    </div>
  );
}

function NameAndContact2() {
  return (
    <div
      className="relative shrink-0 w-full"
      data-name="Name and contact"
    >
      <div className="flex flex-row justify-center size-full">
        <div className="content-stretch flex items-start justify-center py-0 relative w-full">
          <Frame62 />
        </div>
      </div>
    </div>
  );
}

function Frame96() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full max-w-full px-[20px] md:px-[40px]">
      <NameAndContact2 />
    </div>
  );
}

function Frame76() {
  return (
    <div className="backdrop-blur-[13.65px] bg-[rgba(249,250,254,0.8)] content-stretch flex flex-col items-start pb-[24px] pt-[40px] px-0 w-full max-w-full sticky top-0 z-10">
      <Frame96 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="h-[96px] relative shrink-0 w-[48px] flex items-center justify-center">
      <Building2 size={40} className="text-[#2E3338]" />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full">
      <LayoutDashboard className="text-[#657381]" size={16} />
    </div>
  );
}

function Frame43() {
  return (
    <div className="bg-[#eaeffe] content-stretch flex flex-col items-center justify-center relative rounded-[40px] shrink-0 size-[48px]">
      <Home className="text-[#1652f0]" size={16} />
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <ListTodo className="text-[#657381]" size={16} />
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <ArrowLeftRight className="text-[#657381]" size={16} />
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <PieChart className="text-[#657381]" size={16} />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <Scale className="text-[#657381]" size={16} />
    </div>
  );
}

function Bagde() {
  return (
    <div
      className="absolute bg-[#dc2020] left-[35px] rounded-[100px] size-[8px] top-[16px]"
      data-name="Bagde"
    >
      <div className="absolute flex flex-col font-['Work_Sans:SemiBold',sans-serif] font-semibold h-[40px] justify-center leading-[0] left-0 right-0 text-[12px] text-center text-white top-1/2 translate-y-[-50%]">
        <p className="css-4hzbpn leading-[18px]">&nbsp;</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <BarChart3 className="text-[#657381]" size={16} />
      <Bagde />
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex flex-col h-[48px] items-center justify-center relative shrink-0 w-full">
      <Settings className="text-[#657381]" size={16} />
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-center min-h-px min-w-px relative w-full">
      <Frame16 />
      <Frame43 />
      <Frame44 />
      <Frame45 />
      <Frame46 />
      <Frame47 />
      <Frame14 />
      <Frame48 />
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] h-[48px] items-center justify-center relative rounded-[40px] shrink-0 w-full">
      <UserCog className="text-[#657381]" size={16} />
      <div className="absolute left-[66px] top-[24.5px] translate-y-[-50%]">
        <ChevronRight className="text-[#657381]" size={12} />
      </div>
    </div>
  );
}

function LeftMain() {
  return (
    <div
      className="bg-white content-stretch flex flex-col h-full items-center px-0 py-[12px] relative shrink-0 w-[88px] overflow-hidden"
      data-name="Left-main"
    >
      <div
        aria-hidden="true"
        className="absolute border-[#e9ecef] border-r border-solid inset-0 pointer-events-none"
      />
      <Frame54 />
      <Frame53 />
      <Frame49 />
    </div>
  );
}

function SecondaryNav() {
  return null;
}

export default function Active() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] =
    useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className="bg-[#f9fafe] relative size-full"
      data-name="ACTIVE"
    >
      <div className="flex flex-col md:flex-row h-full w-full">
        <SecondaryNav />
        <div className="flex flex-col md:flex-row flex-1 min-w-0 h-full relative">
          {isSidebarCollapsed && (
            <button
              onClick={toggleSidebar}
              className="absolute left-2 top-10 z-50 w-10 h-10 flex items-center justify-center bg-white border border-[#e9ecef] rounded-full hover:bg-gray-50 transition-colors shadow-md"
              aria-label="Expand sidebar"
            >
              <Menu className="text-[#2e3338]" size={16} />
            </button>
          )}
          <Frame51
            onToggleCollapse={toggleSidebar}
            isCollapsed={isSidebarCollapsed}
          />
          <div className="flex flex-col flex-1 min-w-0 overflow-y-auto">
            <Frame76 />
            <Frame77 />
          </div>
        </div>
      </div>
    </div>
  );
}