function Modal({ isOpen, children, onClose }) {
    const modalRef = useRef(null);

    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          onClose();
        }
      };
  
      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen, onClose]);
  
    if (!isOpen) return null;
    return (
        <>
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50" ref={modalRef}> 

                <div className="bg-white rounded-lg p-8 w-[600px] h-[300px] flex flex-col items-center justify-center">


                    {children}
                    
                </div>
            </div>

        </>
    )
}

export default Modal