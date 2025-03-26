function Modal({children}) {
    return (
        <>
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white rounded-lg p-8 w-[600px] h-[300px] flex flex-col items-center justify-center">
                       
                       {children}
                    </div>
                </div>
        
        </>
    )
}

export default Modal