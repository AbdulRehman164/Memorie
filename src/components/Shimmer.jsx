const Shimmer = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="grid grid-cols-4 gap-2">
                {Array(12)
                    .fill('')
                    .map((_, index) => {
                        return (
                            <div
                                key={index}
                                className="h-40 w-32 bg-gray-400 rounded "
                            ></div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Shimmer;
