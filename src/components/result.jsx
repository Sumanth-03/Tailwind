import React from "react";
import { useLocation } from "react-router";

function Result() {
    const location = useLocation();
    const response = location.state?.response || [];

    return (
        <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-4">Response Data:</h2>
            {response.length > 0 ? (
                response.map((item, index) => (
                    <div key={index} className="mb-4 border p-4 rounded-lg">
                        <p className="text-lg font-bold">ID: {item.userId}</p>
                        <p className="text-lg">Title: {item.title}</p>
                        <p className="text-lg">Body: {item.body}</p>
                    </div>
                ))
            ) : (
                <p className="text-lg">No data available</p>
            )}
        </div>
    );
}

export default Result;
