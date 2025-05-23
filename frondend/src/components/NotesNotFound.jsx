const NotesNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-center">
            <div className="mb-4">
                <svg
                    className="w-16 h-16 text-gray-400 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
                No notes found
            </h3>
            <p className="text-gray-500 max-w-sm">
                Start by creating your first note or try adjusting your search criteria.
            </p>
        </div>
    );
};

export default NotesNotFound;