interface ConfirmModalProps {
    isOpen: boolean;
    message: string;
    onConfirm: () => void;
    onCancel: () => void;
}
const ConfirmModal = ({ isOpen, message, onConfirm, onCancel }: ConfirmModalProps) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="rounded-lg p-6 shadow-lg bg-background w-96">
                <h3 className="text-lg font-semibold text-text">{message}</h3>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        onClick={onCancel}
                        className="px-4 py-2 rounded-md text-primary"
                    >
                        No
                    </button>
                    <button
                        onClick={onConfirm}
                        className="px-4 py-2 bg-primary rounded-md text-background"
                    >
                        Yes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ConfirmModal